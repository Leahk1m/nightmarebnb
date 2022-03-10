import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as spotActions from '../../store/spot';
// import * as sessionActions from '../../store/session';
import './SpotForm.css';


function SpotFormPage() {
    const dispatch = useDispatch();
    // const spots = useSelector(state => state.spot.spots);
    // const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [errors, setErrors] = useState([]);
    const [imageUrl, setImageUrl] = useState('');
    // const [created, setCreated] = useState(false);


    const userId = useSelector(state => state.session.user.id);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        await dispatch(spotActions.addListing({ userId, address, city, state, country, name, price, imageUrl }))
            .catch(async (res) => {
                const data = await res.json();
                console.log(data)
                if(data && data.errors) setErrors(data.errors);
            })
            .then(() => history.push('/spots'))

    }

    // if(created === true) return (
    //     <Redirect to="/spots" />
    // );

    return(
        <div className="create-form-container">

            <form className="create-spot-form" onSubmit={handleSubmit}>
                <div className="create-spot-title">
                    <label>
                    Create a Haunted Listing
                    </label>
                </div>

                <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Name"
                />

                <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                // maxLength={11}
                // minLength={5}
                placeholder="Address"
                />

                <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                placeholder="City"
                />

                <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
                placeholder="State"
                />

                <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
                placeholder="Country"
                />

                <input
                type="number"
                value={price}
                onChange={(e) => setPrice(+e.target.value)}
                required
                placeholder="Price"
                />

                <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                required
                placeholder="Image url"
                />

                <button className="create-spot-btn" type="submit">Create Spot</button>


                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
            </form>

            <div className="preview-container">
                {
                    imageUrl !== '' ?
                        <img src={imageUrl} alt="preview-pic"/>
                    :
                        <img src="https://t3.ftcdn.net/jpg/03/28/29/20/360_F_328292034_Mdjyonyzxawept8Lel3mBAiHwc0xAjpM.jpg" alt="preview-house"/>

                }

                <div className="preview-name-location-text">
                    {
                        name !== '' ?
                            <h2>{name}</h2>
                        :
                            <h2>Spooky Name</h2>

                    }

                    {
                        city !== '' ?
                            <h4>{city} {state}, {country}</h4>
                        :
                            <h4>Scary City, Haunted State, Terrifying Country</h4>

                    }
                </div>


                {
                    price !== '' ?
                        <div className="price-container">
                            <h3>${price} / night</h3>
                        </div>
                    :
                        <div className="price-container">
                            <h3>$600 / night</h3>
                        </div>
                }



            </div>
        </div>
    );
}

export default SpotFormPage;
