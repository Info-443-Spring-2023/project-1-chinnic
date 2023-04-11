import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getDatabase, onValue, ref, set as firebaseSet } from 'firebase/database';

export default function StarRating(props) {
    let navigateTo = useNavigate();
    const db = getDatabase();
    const ratingRef = ref(db, "userData/" + props.currentUser.userId + "/ratings/" + props.bathroom.id)

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    // determine if user has rating for a bathroom when rendering stars
    useEffect(() => {
        onValue(ratingRef, (snapshot) => {
            const currentRating = snapshot.val();
            if (currentRating !== null) {
                setRating(currentRating);
            }
        })
    }, [])

    return (
        <div className="star-rating">
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <button
                        type="button"
                        key={index}
                        className={index <= (hover || rating) ? "on" : "off"}
                        onClick={() => {
                            if (!props.currentUser.userId) {
                                navigateTo("/signin");
                            } else {
                                setRating(index);
                                firebaseSet(ratingRef, rating);
                            }
                        }}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                    >
                        <span className="star mx-2">&#9733;</span>
                    </button>
                );
            })}
        </div >
    );
}