import Header from '../components/Header';
import Footer from '../components/Footer';
import Gary from '../images/test.jpg'

// import '../styles/about-us.css';
import Alec from '../public/images/alec.jpg';
import Ryan from '../public/images/ryan.jpg';
import Ben from '../public/images/ben.jpg';
import Rui from '../public/images/rui.jpeg';
import Shade from '../public/images/shade.png';
import Yuwei from '../public/images/yu-wei.jpg';
import Github from '../public/images/github.png';
import Linkedin from '../public/images/linkedin.png';
import Image from 'next/image';

import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default class AboutUs extends Component {
    render() {
        return (
            <>
                <Header />
                {/* <div>
                <Image src='/images/alec.jpg' alt="Alec Torres" width='400px' height='400px'/>
                <p>Its Alec, not Alex</p>
                <Image src='/images/ben.jpg' alt="Benjamin Small" width='400px' height='400px'/>
                <p>Benjamin, been Jammin</p>
                <Image src='/images/rui.jpeg' alt="Rui Guo" width='400px' height='400px'/>
                <p>Rui Goi? Lets go!</p>
                <Image src='/images/ryan.jpg' alt="Ryan McMillan" width='400px' height='400px'/>
                <p>Guitar God</p>
                <Image src='/images/yu-wei.jpg' alt="Yu-Wei" width='400px' height='400px'/>
                <p>I cant think of any more stupid quotes :(</p>
                <Image src='/images/shade.png' alt="Falashade Green" width='400px' height='400px'/>
                <p>The final photo as been added at last, Huzzah!</p>
            </div> */}
                <Carousel className="carry" interval={null} >
                    <div>
                        <h2>Welcome to The Stack Fellows Software Dev Team Page! </h2>
                        <h3> Scroll through the Carousel to Meet the Devs! </h3>
                    </div>
                    <div>
                        <h2> Alec Torres </h2>
                        <h3> Full-Stack Software Developer</h3>
                        <p> FILL IN INFO ABOUT YOU</p>
                        <div className="carousel-div">
                            <Image
                                className="ourTeamImg"
                                src={Alec}
                                alt="Alec Torres"
                            />
                            {/* <Button className="carousel-button" href="">GitHub Profile</Button> */}
                            {/* <Button className="carousel-button" href="" >LinkedIn Profile</Button> */}
                        </div>
                        <div>
                            <a href="https://github.com/atorresla24">
                                <Image src={Github} alt="github photo" class="social-link" />
                            </a>
                            <a href="www.linkedin.com/in/alecjtorres">
                                <Image src={Linkedin} alt="linkedin photo" class="social-link" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h2> Ryan McMillan </h2>
                        <h3> Full-Stack Software Developer </h3>
                        <p> Greetings my fellow human, Glad to see ya here! My name is Ryan and I am a new and excited software developer! I personally love to play and stream video games, as well as spending a lot of time playing my guitar. One of my favorite outdoor activities is Disc Golf, such a great sport and a great hike all in one! Thanks for coming to my Ted talk yall!</p>
                        <Image
                            className="ourTeamImg"
                            src={Ryan}
                            alt="Ryan McMillan"
                        />
                        <div>
                            <a href="https://github.com/RyanLMcMillan">
                                <Image src={Github} alt="github photo" class="social-link" />
                            </a>
                            <a href="https://www.linkedin.com/in/ryan-m-369b50132/">
                                <Image src={Linkedin} alt="linkedin photo" class="social-link" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h2> Benjamin Small </h2>
                        <h3> Full-Stack Software Developer </h3>
                        <p>FILL IN LATER</p>
                        <Image
                            className="ourTeamImg"
                            src={Ben}
                            alt="Benjamin Small"
                        />
                        <div>
                            <a href="https://github.com/BenjaminSmall94">
                                <Image src={Github} alt="github photo" class="social-link" />
                            </a>
                            <a href="https://www.linkedin.com/in/bjgsmall/">
                                <Image src={Linkedin} alt="linkedin photo" class="social-link" />
                            </a>
                        </div>

                    </div>
                    <div>
                        <h2> Rui Guo </h2>
                        <h3> Full-Stack Software Developer </h3>
                        <p>FILL IN LATER</p>
                        <Image
                            className="ourTeamImg"
                            src={Rui}

                            alt="Rui Guo"
                        />

                        <div>
                            <a href="https://github.com/mvrk">
                                <Image src={Github} alt="github photo" class="social-link" />
                            </a>
                            <a href="https://www.linkedin.com/in/rui-guo/">
                                <Image src={Linkedin} alt="linkedin photo" class="social-link" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h2> Falashade Greene </h2>
                        <h3> Full-Stack Software Developer </h3>

                        <p>FILL IN LATER</p>
                        <Image
                            className="ourTeamImg"
                            src={Shade}
                            alt="Falashade Greene"
                        />

                        <div>
                            <a href="https://github.com/falashadegreene">
                                <Image src={Github} alt="github photo" class="social-link" />
                            </a>
                            <a href="http://linkedin.com/in/falashadegreene">
                                <Image src={Linkedin} alt="linkedin photo" class="social-link" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h2> Yu-Wei Hsieh </h2>
                        <h3> Full-Stack Software Developer</h3>

                        <p>FILL IN LATER</p>
                        <Image
                            className="ourTeamImg"
                            src={Yuwei}
                            alt="Yu-Wei Hsieh"
                        />
                        <div>
                            <a href="https://github.com/welly091">
                                <Image src={Github} alt="github photo" class="social-link" />
                            </a>
                            <a href="https://www.linkedin.com/in/welly-yu-wei-hsieh/">
                                <Image src={Linkedin} alt="linkedin photo" class="social-link" />
                            </a>
                        </div>
                    </div>
                </Carousel>
                <Footer />
            </>
        )
    }
}