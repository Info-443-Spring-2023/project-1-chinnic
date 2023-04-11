import React from 'react'; //import React Component
import { useParams } from 'react-router-dom';
import StarRating from './StarRating';

export default function BathroomPage(props) {

    const bathroomID = useParams().bathroomID;

    let bathroom = props.data[parseInt(bathroomID) - 1];

    if (!bathroom) return <h2>No bathroom specified</h2>

    return (
        <div>
            <h2 className="page-header">{bathroom.building} - {bathroom.floor}</h2>
            <img src={"/" + bathroom.src} alt={"Bathroom in " + bathroom.building + " on the " + bathroom.floor} className="bathroomPic" />
            <hr className="line-seperator" />
            <h2 className="page-header">Rate this bathroom!</h2>
            <StarRating currentUser={props.currentUser} bathroom={bathroom} />
        </div >
    )
}