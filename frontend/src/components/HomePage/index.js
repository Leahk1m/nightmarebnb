import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const HomePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <div className="splash-page-container">
            <div className="black-box-bg">
                <div className="welcome-title-home">
                    <img className="scaryhouse-pic" src="https://news.airbnb.com/wp-content/uploads/sites/4/2019/10/unique_press_1920x1280_A.jpg" alt="home-scary-house"/>
                    <div className="banner-text">
                        <h1 id="spooky-stays-title">
                            Spooky stays you can visit all year-round
                        </h1>
                        <h2 id="haunted-home-title">
                            Want to stay in a haunted home? Now you can. Scroll to explore utterly chilling stays.
                        </h2>
                    </div>
                </div>
            </div>

            <div className="white-box-bg">
                <div className="sleep-ghost-town-div">
                    <h1 className="sleep-in-ghost-town-title">Sleep in a Ghost Town</h1>
                    <p className="ghost-town-desc">In the heart of a desolate Utah desert, the Cisco ghost town invites brave travelers to come and stay awhile.</p>

                </div>





                <div className="splashpage-more-homes">
                    <img className="ghost-town-img" src="https://a0.muscache.com/im/pictures/fdc1904c-334e-45ee-866d-64c800711f6c.jpg?im_w=480" alt="scary-pic-1"/>

                    <img className="ghost-town-img" src="https://a0.muscache.com/im/pictures/7a53c75e-f11e-4a6b-9243-112e9f561b67.jpg?im_w=480" alt="scary-pic-2"/>

                    <img className="ghost-town-img" src="https://a0.muscache.com/im/pictures/d8ccda0d-f223-4cb1-9750-666916c6eab8.jpg?im_w=480" alt="scary-pic-3"/>

                    <img className="ghost-town-img" src="https://a0.muscache.com/im/pictures/c3326296-6bff-4fac-bfb5-377e40166774.jpg?im_w=480" alt="scary-pic-4"/>

                    <img className="ghost-town-img" src="https://a0.muscache.com/im/pictures/17037a1e-b150-4898-be26-3d6f3954e30f.jpg?im_w=480" alt="scary-pic-5"/>

                    <img className="ghost-town-img" src="https://a0.muscache.com/im/pictures/5bb157f1-4329-4613-a69f-2a587d742cfb.jpg?im_w=720" alt="scary-pic-6"/>

                </div>


            </div>


            <div className="ghost-gif-container">
                <div className="container-for-three-ghosts">
                    <Link to="/spots">
                        <img className="three-guiding-ghosts"src='https://thumbs.gfycat.com/FavorableDeliciousChuckwalla-size_restricted.gif' alt="ghost-gif"/>

                    </Link>
                </div>

                <div className="welcome-to-nightmare-desc">
                    <h1>BOO!</h1>
                    <h3>Welcome to Nightmarebnb! We hope you find
                        <br/> the scariest spots for your spooky needs.</h3>
                    <h4>Let us guide you to all of our ghost-friendly stays.
                        <br/>Click on us (the ghosts) to explore all of our available haunted listings.</h4>
                        <div className="footer-div">

                    <div className="discover-div">
                        <a className="portfolio-link-footer"target="_blank" href="http://www.leahkim.net/">Creator Portfolio</a>
                        <div className="github-div">
                            <FaGithub className="github-logo"/><a target="_blank"className="github-link"href='https://github.com/Leahk1m'>Github</a>
                        </div>

                        <div className="linked-in-div">
                            <FaLinkedin className="linked-in-logo" /><a target="_blank"className="linkedin-link"href='https://www.linkedin.com/in/leahk1m'>Linkedin</a>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    );
};


export default HomePage;
