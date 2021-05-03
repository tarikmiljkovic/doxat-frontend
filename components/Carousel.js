
import styled from '@emotion/styled'
import { useEffect, useState, useRef, createRef } from "react";
import Link from "next/link";
import { useContext } from "react";
import SiteContext from "../contexts/SiteContext";
import { useRouter } from "next/router";
import { MdChevronRight, MdChevronLeft, MdNavigateNext } from "react-icons/md";
// import PropChangeWatch from './Carou';
import React from "react";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";



function Carousel() {

  let router = useRouter();
  // let contextType = SiteContext;
  const { visible } = useContext(SiteContext);
  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(0);
  const imagesNode = useRef();

   const slideImages = [
     "images/doxat-1.jpg",
     "images/doxat-2.jpg",
     "images/doxat-3.jpg",
   ];


  useEffect(() => {



  },[prev, next]);

  return (
    <CarouselStyled visible={visible}>
      <div className="easee">

          <div className="container">
            <Link href={`/${router.locale == "bs" ? "" : "en"}`}>
              <a className="mylogo">
                <img src="/logo.svg" alt="Doxat" />
              </a>
            </Link>
          </div>


        <Slide easing="ease">
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
          </div>
        </Slide>
      </div>

      {/* <MdChevronLeft /> */}
    </CarouselStyled>
  );
}

const CarouselStyled = styled.div`
  * {
    box-sizing: border-box;
  }
  .container {
    max-width: 1170px;

    margin: 0 auto;
    position: relative;
  }

  .default-nav {
    background: transparent;
    color: white;
    fill: white;
  }
  .each-slide > div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    height: 100vh;
  }
  .easee {
    transform: translateY(${(props) => (props.visible ? "0vh" : "-100vh")});
    transition: all 1.5s ease-in;
    height: 100vh;
  }
  .each-slide span {
    padding: 40px;
    font-size: 20px;
    background: red;
    text-align: center;
  }

  .prev,
  .next {
    position: absolute;
    top: calc(50%);
    transform: translate(0, -50%);
    color: white;
    font-size: 4.5rem;
    cursor: pointer;
  }
  .prev {
    left: 0;
  }
  .next {
    right: 0;
  }
  .mylogo {
    position: absolute;
    left: 0;
    top: 0;
    margin-top: 3%;
    height: 2.2rem;
    z-index: 999;
    width: 270px;
  }
  .mylogo img {
    height: 100%;
    fill: white;
  }
  .mySlides {
    display: none;
    object-fit: cover;
    object-position: top center;
    width: 100%;
    height: 100vh;
  }
  .mySlides img {
    /* vertical-align: middle; */
    object-fit: cover;
    object-position: top center;
    width: 100%;
    height: 100vh;
  }

  /* Slideshow container */
  .slideshow-container {
    height: 100vh;
    width: 100%;
    position: relative;
    margin: auto;
    overflow: hidden;
    object-fit: contain;
    transform: translateY(0);
    transform: translateY(${(props) => (props.visible ? "0vh" : "-100vh")});
    transition: all 1s ease;
  }

  /* Caption text */
  .text {
    color: #f2f2f2;
    font-size: 15px;
    padding: 8px 12px;
    position: absolute;
    bottom: 8px;
    width: 100%;
    text-align: center;
  }

  /* Number text (1/3 etc) */
  .numbertext {
    color: #f2f2f2;
    font-size: 12px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
  }

  /* The dots/bullets/indicators */
  .dot {
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
  }

  .active {
    background-color: #717171;
  }

  /* Fading animation */
  .fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
  }

  @-webkit-keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }

  /* On smaller screens, decrease text size */
  @media only screen and (max-width: 300px) {
    .text {
      font-size: 11px;
    }
  }
`;


export default Carousel;



