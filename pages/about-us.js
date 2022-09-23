import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import Image from 'next/image';
import {Github, Linkedin} from 'react-bootstrap-icons';

export default class NextJsCarousel extends Component {
    render() {
        return (

            <div>
                <Carousel>
                    <div class="container">
                        <p> Alec Torres</p>
                        <a href="https://github.com/atorresla24">
                            <Linkedin className="my-1 block w-auto mx-auto px-8 h-10" color="royalblue" size={24}/>
                        </a>
                        <a href="https://github.com/atorresla24">
                            <Github className="my-1 block w-auto mx-auto px-8 h-10" color="royalblue" size={24}/>
                        </a>
                        <img src="../images/alec.jpg" alt="image1" className=" block w-auto mx-auto"/>
                        <p className="legend"> Full stack software developer specializing in Python
                            Based out of Spotsylvania, Virginia
                            Enjoy reading books, playing sports, and space
                            Future goal: Excel in anything I set my sights on
                        </p>
                    </div>

                    <div class="container">
                        <p> Benjamin Small</p>
                        <a href="https://www.linkedin.com/in/bjgsmall/">
                            <Linkedin className="my-1 block w-auto mx-auto px-8 h-10" color="royalblue" size={24}/>
                        </a>
                        <a href="https://github.com/BenjaminSmall94">
                            <Github className="my-1 block w-auto mx-auto px-8 h-10" color="royalblue" size={24}/>
                        </a>
                        <img src="../images/ben.jpg" alt="image1" className=" block w-auto mx-auto"/>
                        <p className="legend"> BS in Industrial Engineering - UW Seattle in 2016
                            Army Aviation Officer - Commander/Blackhawk Pilot (6 years).
                            Full Stack Software Developer - Advanced Python Programming Certificate
                            Interested in process automation, database management, stand-alone applications, full-stack
                            web applications, and virtual reality
                        </p>
                    </div>

                    <div className="container">
                        <h1> Rui Guo</h1>
                        <a href="https://www.linkedin.com/in/rui-guo/">
                            <Linkedin className="my-1 block w-auto mx-auto px-8 h-10" color="royalblue" size={12}/>
                        </a>
                        <a href="https://github.com/mvrk">
                            <Github className="my-1 block w-auto mx-auto px-8 h-10" color="royalblue" size={24}/>
                        </a>
                        <img src="../images/rui.jpeg" alt="image1" className=" block w-auto mx-auto"/>
                        <p className="legend"> Full stack software developer
                            LSU graduate with a system science background
                            Living in greater Seattle area
                            Love outdoor discoveries and new technologies
                        </p>
                    </div>

                    <div className="container">
                        <p> Falashade Greene</p>
                        <a href="http://linkedin.com/in/falashadegreene">
                            <Linkedin className="my-1 block w-auto mx-auto px-8 h-10" color="royalblue" size={24}/>
                        </a>
                        <a href="https://github.com/falashadegreene">
                            <Github className="my-1 block w-auto mx-auto px-8 h-10" color="royalblue" size={24}/>
                        </a>
                        <img src="../images/shade.png" alt="image1" className=" block w-auto mx-auto"/>
                        <p className="legend"> Full stack software developer
                            Background in customer service and fashion
                            Living in the Baltimore, Maryland area
                            Love to travel
                        </p>
                    </div>

                    <div className="container">
                        <p> Ryan McMillan</p>
                        <a href="https://www.linkedin.com/in/ryan-m-369b50132/">
                            <Linkedin className="my-1 block w-auto mx-auto px-8 h-10" color="royalblue" size={24}/>
                        </a>
                        <a href="https://github.com/RyanLMcMillan">
                            <Github className="my-1 block w-auto mx-auto px-8 h-10" color="royalblue" size={24}/>
                        </a>
                        <img src="../images/ryan.jpg" alt="image1" className=" block w-auto mx-auto"/>
                        <p className="legend"> Full Stack Software Developer furthering learning in Python
                            Based in the greater Seattle area
                            Passion and interest for music and technologies
                            Career goal is to join a team with a growth mindset
                        </p>
                    </div>

                    <div className="container">
                        <p> Yu-wei Hsieh</p>
                        <a href="https://www.linkedin.com/in/welly-yu-wei-hsieh/">
                            <Linkedin className="my-1 block w-auto mx-auto px-8 h-10" color="royalblue" size={24}/>
                        </a>
                        <a href="https://github.com/welly091">
                            <Github className="my-1 block w-auto mx-auto px-8 h-10" color="royalblue" size={24}/>
                        </a>
                        <img src="../images/yu-wei.jpg" alt="image1" className=" block w-auto mx-auto"/>
                        <p className="legend"> Full-stack software developer & Python software developer
                            UW graduated
                            Chemistry & biochemistry background
                            Future goal: Seeking opportunities in tech industry
                        </p>
                    </div>
                </Carousel>
            </div>
        );
    }
};


{/*  <style jsx>{`*/
}

{/*.container {*/
}
{/*      display: flex;*/
}
{/*      height:400px;*/
}
{/*      flex-flow: column wrap;*/
}
{/*      background-color: green;*/
}
{/*      align-content: flex-start;*/
}
{/*    }*/
}
{/*    p {*/
}
{/*      color: blue;*/
}

{/*    }*/
}
{/*    .div {*/
}
{/*    justify-items: center;*/
}
{/*    }*/
}
{/*  `}</style>*/
}