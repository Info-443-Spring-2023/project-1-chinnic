import React from 'react'; //import React Component
import { Link } from 'react-router-dom'
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import StairsOutlinedIcon from '@mui/icons-material/StairsOutlined';

function BathroomCard(props) {
    let bathroomData = props.bathroomData;

    return (
        <Link to={'/search/br' + bathroomData.id} className="col-md-6 col-xl-4 d-flex justify-content-center" style={{ color: 'white', textDecoration: 'none' }}>
            <div className="card mb-4">
                <img src={bathroomData.src} className="pb-1 br-img" alt="the specific bathroom" />
                <div className="card-body p-0">
                    <div className="row">
                        <div className="col-sm">
                            <h2 className="card-title my-0">{bathroomData.building}</h2>
                            <div className="br-info d-flex justify-content-around mx-auto my-1">
                                <div className="mr-2">
                                    <StairsOutlinedIcon fontSize="medium" className="stairs my-auto" />
                                    <p className="card-text my-auto floor">{bathroomData.floor}</p>
                                </div>
                                <div>
                                    <ExploreOutlinedIcon fontSize="medium" className="compass my-auto" />
                                    <p className="card-text location my-atuo">{bathroomData.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default function BathroomList(props) {
    let bathrooms = props.data;
    let bathroomCards = bathrooms.map(bathroomData => {
        return <BathroomCard key={bathroomData.id} bathroomData={bathroomData} />
    })

    return (
        <div className="container">
            <div className="row">
                {bathroomCards}
            </div>
        </div>
    )
}