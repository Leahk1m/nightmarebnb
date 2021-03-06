import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SpotShow.css';

function SpotShow({ spotsData }) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return(
        <div className="whole-container-showpage-spots">
            <div className="showpage-title-container">
                <h1 className="showpage-title">Haunting homes for resting your bones</h1>
                <img className="cute-skele-gif" src="https://c.tenor.com/CAes2FgXwrwAAAAC/skeleton-im-sorry.gif" alt="skele-gif"/>
            </div>
            <div className="div-for-the-showpage-div">
                {(spotsData || []).map((spot) => (
                    <div className="indiv-spot-container-showpage" key={spot.id}>

                        <div className="spot-showpage-img-container">
                            <Link to={`/spots/${spot.id}`} key={spot.id}>
                                <img className="spot-showpage-img" src={spot.imageUrl} alt="indiv-spots-pic"/>
                            </Link>

                        </div>

                        <Link className="indiv-spot-link" to={`/spots/${spot.id}`} key={spot.id}>
                            {spot.name}
                        </Link>

                        <p className="indiv-spot-description-showpage">
                        ${spot.price} / night
                        </p>

                    </div>
                ))}
            </div>
        </div>
    );


}

export default SpotShow;
