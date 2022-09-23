import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Github from '../public/images/github.png';
import Linkedin from '../public/images/linkedin.png';
import Image from 'next/image';

export default class NextJsCarousel extends Component {
    render() {
        return (
            <div>
                <h2 className='font-sans text-center'>About Us</h2>
                <Carousel>
                    <div>
                        <img src="../images/alec.jpg" alt="image1" className='' />
                        <p className="legend">This is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is meThis is me</p>
                        <a href="https://github.com/atorresla24" >
                            <Image src={Github} alt="github photo" class="social-link" className="absolute scale-50" />
                        </a>
                        <a href="https://www.linkedin.com/in/alecjtorres" className="absolute scale-50">
                            <Image src={Linkedin} alt="linkedin photo" class="social-link" />
                        </a>
                    </div>
                    <div>
                        <img src="../images/ben.jpg" alt="image2" />
                        <p className="legend">Image 2</p>
                        <a href="https://github.com/BenjaminSmall94">
                            <Image src={Github} alt="github photo" class="social-link" className="absolute scale-50" />
                        </a>
                        <a href="https://www.linkedin.com/in/bjgsmall/" className="absolute scale-50">
                            <Image src={Linkedin} alt="linkedin photo" class="social-link" />
                        </a>
                    </div>
                    <div>
                        <img src="../images/rui.jpeg" alt="image3" />
                        <p className="legend">Image 3</p>
                        <a href="https://github.com/mvrk">
                            <Image src={Github} alt="github photo" class="social-link" className="absolute scale-50" />
                        </a>
                        <a href="https://www.linkedin.com/in/rui-guo/" className="absolute scale-50">
                            <Image src={Linkedin} alt="linkedin photo" class="social-link" />
                        </a>
                    </div>
                    <div>
                        <img src="../images/shade.png" alt="image4" />
                        <p className="legend">Image 4</p>
                        <a href="https://github.com/falashadegreene">
                            <Image src={Github} alt="github photo" class="social-link" className="absolute scale-50" />
                        </a>
                        <a href="http://linkedin.com/in/falashadegreene" className="absolute scale-50">
                            <Image src={Linkedin} alt="linkedin photo" class="social-link" />
                        </a>
                    </div>
                    <div>
                        <img src="../images/ryan.jpg" alt="image5" />
                        <p className="legend">Image 5</p>
                        <a href="https://github.com/RyanLMcMillan">
                            <Image src={Github} alt="github photo" class="social-link" className="absolute scale-50" />
                        </a>
                        <a href="https://www.linkedin.com/in/ryan-m-369b50132/" className="absolute scale-50">
                            <Image src={Linkedin} alt="linkedin photo" class="social-link" />
                        </a>
                    </div>
                    <div>
                        <img src="../images/yu-wei.jpg" alt="image6" />
                        <p className="legend">Image 6</p>
                        <a href="https://github.com/welly091">
                            <Image src={Github} alt="github photo" class="social-link" className="absolute scale-50" />
                        </a>
                        <a href="https://www.linkedin.com/in/welly-yu-wei-hsieh/" className="absolute scale-50">
                            <Image src={Linkedin} alt="linkedin photo" class="social-link" />
                        </a>
                    </div>
                </Carousel>
            </div>
        );
    }
};

// import Header from '../components/Header';
// import Footer from '../components/Footer';
// // import '../styles/about-us.css';
// import Alec from '../public/images/alec.jpg';
// import Ryan from '../public/images/ryan.jpg';
// import Ben from '../public/images/ben.jpg';
// import Rui from '../public/images/rui2.jpeg';
// import Shade from '../public/images/shade.png';
// import Yuwei from '../public/images/yu-wei.jpg';
// import Github from '../public/images/github.png';
// import Linkedin from '../public/images/linkedin.png';
// import Image from 'next/image';
// import Uni from '../public/images/unicorn.webp'

// import React, { Component } from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';


// export default class AboutUs extends Component {
//     render() {
//         return (
//             <>
//                 <Carousel className="font-serif" interval={null} >
//                     {/* <div>
//                         <h2>Welcome to The Stack Fellows Software Dev Team Page! </h2>
//                         <h3> Scroll through the Carousel to Meet the Devs! </h3>
//                     </div> */}
//                     <div className='mr-28'>
//                         <h2 className='text-4xl underline text-decoration-line:'> Alec Torres </h2>
//                         <h3> Full-Stack Software Developer</h3>
//                         <p> FILL IN INFO ABOUT YOU</p>
//                         <div className='flex'>
//                             <div className=''>
//                                 <a href="https://github.com/atorresla24" className="absolute scale-75 left-6 top-52">
//                                     <Image src={Github} alt="github photo" class="social-link w-0.5" />
//                                 </a>
//                                 <div>
//                                     <a className="absolute top-24 left-1/3">
//                                     <Image
//                                     src={Alec}
//                                     alt="Alec Torres"
//                                     />
//                                     </a>
//                                 </div>
//                                 <a href="https://www.linkedin.com/in/alecjtorres" className="absolute right-0 scale-50 top-16">
//                                     <Image src={Linkedin} alt="linkedin photo" class="social-link"/>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>

//                     <div id="person-div">
//                         <h2> Ryan McMillan </h2>
//                         <h3> Full-Stack Software Developer </h3>
//                         <p> Greetings my fellow human, Glad to see ya here! My name is Ryan and I am a new and excited software developer! I personally love to play and stream video games, as well as spending a lot of time playing my guitar. One of my favorite outdoor activities is Disc Golf, such a great sport and a great hike all in one! Thanks for coming to my Ted talk yall!</p>
//                         <div className="flex">
//                             <a className="absolute top-24 left-1/3">
//                             <Image
//                                 src={Ryan}
//                                 alt="Ryan McMillan"
//                             />
//                             </a>
//                             <div>
//                                 <a href="https://github.com/RyanLMcMillan" className="absolute scale-75 left-6 top-52">
//                                     <Image src={Github} alt="github photo" class="social-link w-0.5" />
//                                 </a>
//                                 <a href="https://www.linkedin.com/in/ryan-m-369b50132/" className="absolute scale-50 right-px top-16">
//                                     <Image src={Linkedin} alt="linkedin photo" class="social-link w-.05" />
//                                 </a>
//                             </div>
//                         </div>
//                     </div>

//                     <div id="person-div">
//                         <h2> Benjamin Small </h2>
//                         <h3> Full-Stack Software Developer </h3>
//                         <p>FILL IN LATER</p>
//                         <a className="absolute top-24 left-1/3">
//                         <Image
//                             src={Ben}
//                             alt="Benjamin Small"
//                         />
//                         </a>
//                         <div>
//                             <a href="https://github.com/BenjaminSmall94" className="absolute scale-75 left-6 top-52">
//                                 <Image src={Github} alt="github photo" class="social-link" />
//                             </a>
//                             <a href="https://www.linkedin.com/in/bjgsmall/" className="absolute right-0 scale-50 top-16">
//                                 <Image src={Linkedin} alt="linkedin photo" class="social-link" />
//                             </a>
//                         </div>

//                     </div>

//                     <div id="person-div">
//                         <h2> Rui Guo </h2>
//                         <h3> Full-Stack Software Developer </h3>
//                         <p>FILL IN LATER</p>
//                         <a className="absolute top-24 left-1/3">
//                         <Image
//                             src={Rui}
//                             alt="Rui Guo"
//                         />
//                         </a>
//                         <div>
//                             <a href="https://github.com/mvrk" className="absolute scale-75 left-6 top-52">
//                                 <Image src={Github} alt="github photo" class="social-link" />
//                             </a>
//                             <a href="https://www.linkedin.com/in/rui-guo/" className="absolute scale-50 right-px top-16">
//                                 <Image src={Linkedin} alt="linkedin photo" class="social-link" />
//                             </a>
//                         </div>
//                     </div>

//                     <div id="person-div">
//                         <h2> Falashade Greene </h2>
//                         <h3> Full-Stack Software Developer </h3>

//                         <p>FILL IN LATER</p>
//                         <a className='absolute top-24 left-1/3'>
//                         <Image
//                             src={Shade}
//                             alt="Falashade Greene"
//                         />
//                         </a>
//                         <div>
//                             <a href="https://github.com/falashadegreene" className="absolute scale-75 left-6 top-52">
//                                 <Image src={Github} alt="github photo" class="social-link" />
//                             </a>
//                             <a href="http://linkedin.com/in/falashadegreene" className="absolute right-0 scale-50 top-16">
//                                 <Image src={Linkedin} alt="linkedin photo" class="social-link" />
//                             </a>
//                         </div>
//                     </div>

//                     <div id="person-div">
//                         <h2> Yu-Wei Hsieh </h2>
//                         <h3> Full-Stack Software Developer</h3>

//                         <p>FILL IN LATER</p>
//                         <a className='absolute top-24 left-1/3'>
//                         <Image
//                             src={Yuwei}
//                             alt="Yu-Wei Hsieh"
//                         />
//                         </a>
//                         <div>
//                             <a href="https://github.com/welly091" className="absolute scale-75 left-6 top-52">
//                                 <Image src={Github} alt="github photo" class="social-link" />
//                             </a>
//                             <a href="https://www.linkedin.com/in/welly-yu-wei-hsieh/">
//                                 <Image src={Linkedin} alt="linkedin photo" class="social-link"/>
//                             </a>
//                         </div>
//                     </div>
//                     <div>
//                         <a href="https://www.linkedin.com/in/welly-yu-wei-hsieh/" className='absolute scale-100'>
//                             <Image src={Uni} alt='unicorn' />
//                         </a>
//                     </div>
//                 </Carousel>
//             </>
//         )
//     }
// }