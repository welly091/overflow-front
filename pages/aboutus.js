import Header from '../components/Header';
import Footer from '../components/Footer';
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

<div
  id="carouselDarkVariant"
  class="carousel slide carousel-fade carousel-dark relative"
  data-bs-ride="carousel"
>

  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="1"
      aria-label="Slide 1"
    ></button>
    <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="2"
      aria-label="Slide 1"
    ></button>
  </div>
  <Carousel className="carry" interval={null} >
  <div class="carousel-inner relative w-full overflow-hidden">

    <div class="carousel-item active relative float-left w-full">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp"
        class="block w-full"
        alt="Motorbike Smoke"
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>


    <div class="carousel-item relative float-left w-full">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp"
        class="block w-full"
        alt="Mountaintop"
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>

    <div class="carousel-item relative float-left w-full">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp"
        class="block w-full"
        alt="Woman Reading a Book"
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>

  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselDarkVariant"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselDarkVariant"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</Carousel>





                {/* <Carousel className="carry" interval={null} >
                    {/* <div>
                        <h2>Welcome to The Stack Fellows Software Dev Team Page! </h2>
                        <h3> Scroll through the Carousel to Meet the Devs! </h3>
                    </div> */}
                    {/* <div className='mr-28'>
                        <h2> Alec Torres </h2>
                        <h3> Full-Stack Software Developer</h3>
                        <p> FILL IN INFO ABOUT YOU</p>
                        <div className='flex'>
                            <div className=''>
                                <a href="https://github.com/atorresla24" className="absolute scale-75 left-6 top-52">
                                    <Image src={Github} alt="github photo" class="social-link" />
                                </a>
                                <div>
                                    <a className="absolute top-24 left-1/3">
                                    <Image
                                    src={Alec}
                                    alt="Alec Torres"
                                    />
                                    </a>
                                </div>
                                <a href="https://www.linkedin.com/in/alecjtorres" className="absolute right-0 scale-50 top-18">
                                    <Image src={Linkedin} alt="linkedin photo" class="social-link" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div id="person-div">
                        <h2> Ryan McMillan </h2>
                        <h3> Full-Stack Software Developer </h3>
                        <p> Greetings my fellow human, Glad to see ya here! My name is Ryan and I am a new and excited software developer! I personally love to play and stream video games, as well as spending a lot of time playing my guitar. One of my favorite outdoor activities is Disc Golf, such a great sport and a great hike all in one! Thanks for coming to my Ted talk yall!</p>
                        <a className="absolute top-24 left-1/3">
                        <Image
                            src={Ryan}
                            alt="Ryan McMillan"
                        />
                        </a>
                        <div>
                            <a href="https://github.com/RyanLMcMillan" className="absolute scale-75 left-6 top-52">
                                <Image src={Github} alt="github photo" class="social-link" />
                            </a>
                            <a href="https://www.linkedin.com/in/ryan-m-369b50132/" className="absolute right-0 scale-50 top-18">
                                <Image src={Linkedin} alt="linkedin photo" class="social-link" />
                            </a>
                        </div>
                    </div>

                    <div id="person-div">
                        <h2> Benjamin Small </h2>
                        <h3> Full-Stack Software Developer </h3>
                        <p>FILL IN LATER</p>
                        <a className="absolute top-24 left-1/3">
                        <Image
                            src={Ben}
                            alt="Benjamin Small"
                        />
                        </a>
                        <div>
                            <a href="https://github.com/BenjaminSmall94" className="absolute scale-75 left-6 top-52">
                                <Image src={Github} alt="github photo" class="social-link" />
                            </a>
                            <a href="https://www.linkedin.com/in/bjgsmall/" className="absolute right-0 scale-50 top-18">
                                <Image src={Linkedin} alt="linkedin photo" class="social-link" />
                            </a>
                        </div>

                    </div>

                    <div id="person-div">
                        <h2> Rui Guo </h2>
                        <h3> Full-Stack Software Developer </h3>
                        <p>FILL IN LATER</p>
                        <a className="absolute top-24 left-1/3">
                        <Image
                            src={Rui}
                            alt="Rui Guo"
                        />
                        </a>
                        <div>
                            <a href="https://github.com/mvrk" className="absolute scale-75 left-6 top-52">
                                <Image src={Github} alt="github photo" class="social-link" />
                            </a>
                            <a href="https://www.linkedin.com/in/rui-guo/" className="absolute right-0 scale-50 top-18">
                                <Image src={Linkedin} alt="linkedin photo" class="social-link" />
                            </a>
                        </div>
                    </div>

                    <div id="person-div">
                        <h2> Falashade Greene </h2>
                        <h3> Full-Stack Software Developer </h3>

                        <p>FILL IN LATER</p>
                        <a className='absolute top-24 left-1/3'>
                        <Image
                            src={Shade}
                            alt="Falashade Greene"
                        />
                        </a>
                        <div>
                            <a href="https://github.com/falashadegreene" className="absolute scale-75 left-6 top-52">
                                <Image src={Github} alt="github photo" class="social-link" />
                            </a>
                            <a href="http://linkedin.com/in/falashadegreene" className="absolute right-0 scale-50 top-18">
                                <Image src={Linkedin} alt="linkedin photo" class="social-link" />
                            </a>
                        </div>
                    </div>

                    <div id="person-div">
                        <h2> Yu-Wei Hsieh </h2>
                        <h3> Full-Stack Software Developer</h3>

                        <p>FILL IN LATER</p>
                        <a className='absolute top-24 left-1/3'>
                        <Image
                            src={Yuwei}
                            alt="Yu-Wei Hsieh"
                        />
                        </a>
                        <div>
                            <a href="https://github.com/welly091" className="absolute scale-75 left-6 top-52">
                                <Image src={Github} alt="github photo" class="social-link" />
                            </a>
                            <a href="https://www.linkedin.com/in/welly-yu-wei-hsieh/" className=''>
                                <Image src={Linkedin} alt="linkedin photo" class="social-link" />
                            </a>
                        </div>
                    </div> */}
                {/* </Carousel> */} 
            </>
        )
    }
}