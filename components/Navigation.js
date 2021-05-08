import styled from "@emotion/styled";

import { useEffect, useContext, useState} from "react";

import {SiteContext} from "../contexts/SiteContext";
import Link from "next/link";
import { useRouter } from "next/router";
// import { RiMenuLine, RiMenu4Fill } from "react-icons/ri";

import bs from '../locales/bs';
import en from '../locales/en';

import { IoLanguageOutline } from "react-icons/io5";
import {MdMenu} from 'react-icons/md';

function Main({ requestJ, currentProjectIndex }) {
  const { carouselState, mutateCarousel } = useContext(SiteContext);
  const { category, setCategory } = useContext(SiteContext);
  const { pageTranslate, setPageTranslate } = useContext(SiteContext);


  const [mobileNavIcon, setMobileNavIcon] = useState(false);


  console.log(mobileNavIcon);

  const onClickHandler = () => {
    // mutateCarousel(false);
    // setPageTranslate('0vh');

  };



  // const [startIcon, changeIcon] = useState(true);
  // const { navIcon, changeNavIcon } = useState(`<RiMenuLine/>`);

  let router = useRouter();

  const { locale } = router;
  const t = locale === "bs" ? bs : en;

  useEffect(() => {
    function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
  });

  return (
    <MainStyled mobileNavIcon={mobileNavIcon}>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__listlogo">
            {/* <img src="/logo.svg" alt=""/> */}
            <Link href="/" locale={router.locale}>
              <a
                onClick={() => {
                  mutateCarousel(true);
                  setPageTranslate("0vh");
                }}
              >
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 180 58"
                >
                  <defs>
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          ".cls-1{fill:#000001;stroke:#231f20;}.cls-1,.cls-2{stroke-miterlimit:22.93;stroke-width:0.57px;fill-rule:evenodd;}.cls-2{fill:#ec1c24;stroke:#ec1652;}",
                      }}
                    />
                  </defs>
                  <path
                    className="cls-1"
                    d="M.28,28.94a11.1,11.1,0,0,1,1.49-5.65,10.55,10.55,0,0,1,9.79-5.58H22.85V3.63c0-1.88.93-2.82,2.78-2.82a2.47,2.47,0,0,1,2.79,2.8V54.2A2.49,2.49,0,0,1,25.6,57H11.53a10.91,10.91,0,0,1-8-3.25,10.82,10.82,0,0,1-3.26-8V28.94Zm11.24-5.65a5.49,5.49,0,0,0-4,1.64,5.43,5.43,0,0,0-1.66,4V45.8a5.42,5.42,0,0,0,1.67,4,5.5,5.5,0,0,0,4,1.67H22.85V23.29ZM39.59,43V31.74a14,14,0,0,1,14.07-14,13.9,13.9,0,0,1,14.08,14V43A14,14,0,0,1,53.66,57,14,14,0,0,1,39.59,43Zm22.57,0V31.77a8.11,8.11,0,0,0-2.48-5.95,8.56,8.56,0,0,0-12,0,8.11,8.11,0,0,0-2.48,5.95V43a8.15,8.15,0,0,0,2.47,6,8.61,8.61,0,0,0,12,0,8.1,8.1,0,0,0,2.48-6Zm67.31,14a11.12,11.12,0,0,1-11.24-11.24,11.09,11.09,0,0,1,1.5-5.66,10.48,10.48,0,0,1,9.74-5.58H140.7V28.91a5.5,5.5,0,0,0-5.62-5.62H123.85a2.47,2.47,0,0,1-2.8-2.79,2.47,2.47,0,0,1,2.8-2.79h11.23a11.1,11.1,0,0,1,11.2,11.23V54.21a2.47,2.47,0,0,1-2.79,2.8Zm11.23-16.9H129.47a5.4,5.4,0,0,0-4,1.65,5.47,5.47,0,0,0-1.64,4,5.53,5.53,0,0,0,1.66,4,5.38,5.38,0,0,0,4,1.67H140.7V40.11Zm22.5-16.82h-2.81a2.48,2.48,0,0,1-2.81-2.79,2.48,2.48,0,0,1,2.81-2.79h2.81V3.63c0-1.88.93-2.82,2.78-2.82a2.48,2.48,0,0,1,2.79,2.82V17.71h8.43A2.47,2.47,0,0,1,180,20.5a2.47,2.47,0,0,1-2.8,2.79h-8.43V54.2a2.79,2.79,0,1,1-5.57,0Z"
                  />
                  <path
                    className="cls-2"
                    d="M96.39,37.36l10.17,15.27a2.8,2.8,0,0,1,.46,1.58,2.47,2.47,0,0,1-2.8,2.8,2.61,2.61,0,0,1-2.34-1.23L93,42.42l-8.9,13.36A2.61,2.61,0,0,1,81.75,57a2.82,2.82,0,0,1-2.8-2.8,2.8,2.8,0,0,1,.46-1.58L89.58,37.36,79.41,22.1A2.82,2.82,0,0,1,79,20.52a2.48,2.48,0,0,1,2.8-2.81A2.62,2.62,0,0,1,84.09,19L93,32.27,101.88,19a2.62,2.62,0,0,1,2.34-1.24c1.87,0,2.8.92,2.8,2.76a2.89,2.89,0,0,1-.46,1.63Z"
                  />
                </svg>
              </a>
            </Link>
          </li>

          <a href="#" onClick={() => setMobileNavIcon(!mobileNavIcon)}>
            <MdMenu className="mobileNavToggler" />
          </a>

          <Link href="/o-nama" locale={router.locale}>
            <a
              className={
                router.pathname == "/o-nama" || router.pathname == "/about"
                  ? "bold nav__listitem"
                  : "nav__listitem"
              }
              onClick={() => setPageTranslate("0vh")}
            >
              {t.aboutus}
            </a>
          </Link>
          <Link href="/projekti" locale={router.locale}>
            <li
              className={
                router.pathname == "/projekti" || router.pathname == "/projects"
                  ? "bold nav__listitem"
                  : "nav__listitem"
              }
              onClick={() => setPageTranslate("0vh")}
            >
              {t.projects}
              <ul className="nav__listitemdrop">
                <Link href="/projekti" locale={router.locale}>
                  <a onClick={() => setCategory("svi")}>Svi</a>
                </Link>
                <Link href="/projekti" locale={router.locale}>
                  <a onClick={() => setCategory("ideja")}>Izvedeno</a>
                </Link>
                <Link href="/projekti" locale={router.locale}>
                  <a onClick={() => setCategory("izvedeno")}>Ideja</a>
                </Link>
              </ul>
            </li>
          </Link>
          <Link href="/software" locale={router.locale}>
            <a
              className={
                router.pathname == "/software"
                  ? "bold nav__listitem"
                  : "nav__listitem"
              }
              onClick={() => setPageTranslate("0vh")}
            >
              {t.software}
              {/* <ul class="nav__listitemdrop">
              <li>Svi</li>
              <li>Izvedeno</li>
              <li>Ideja</li>
            </ul> */}
            </a>
          </Link>
          <Link href="/kontakt" locale={router.locale}>
            <a
              className={
                router.pathname == "/kontakt" || router.pathname == "/contact"
                  ? "bold nav__listitem"
                  : "nav__listitem"
              }
              onClick={() => setPageTranslate("0vh")}
            >
              {t.contact}
            </a>
          </Link>

          {requestJ != undefined ? (
            <Link
              href={`${requestJ[currentProjectIndex].localizations[0].id}`}
              locale={router.locale == "bs" ? "en" : "bs"}
            >
              <a className="nav__listitem">
                <IoLanguageOutline />
                {router.locale == "bs" ? " EN" : " BS"}
              </a>
            </Link>
          ) : (
            <Link
              href={router.asPath}
              locale={router.locale == "bs" ? "en" : "bs"}
            >
              <a className="nav__listitem">
                <IoLanguageOutline />
                {router.locale == "bs" ? " EN" : " BS"}
              </a>
            </Link>
          )}
        </ul>
      </nav>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  /* Add a black background color to the top navigation */

  /* color variables */
  /* border radius */
  *{
    list-style:none;
    list-style-type:none;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    /* font-family: Montserrat, sans-serif; */
  }
  }
  a:link {
    text-decoration: none;
  }
  li.bold, .bold {
    font-weight: 600 !important;
    list-style: none;
    /* padding: 0.5rem 1rem;
    border-radius: 0.2rem; */
    transition: background-color 100ms ease-in-out;
  }
  .nav {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 70px;
  }
  .nav__list {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 2rem;
    margin: 0 0rem;
  }
  .nav__listlogo {
    list-style: none;
    margin-right: auto;
    cursor: pointer;
    padding-top: 24px;

  }
  .nav__listlogo svg {
    /* width: 7.5rem; */
    height: 2.5rem;
    transition: fill 100ms ease-in;

  }
  .nav__listlogo svg:hover,
  .nav__listlogo svg:focus {
    /* fill: #f06292; */
    fill: black;
  }
  .nav__listitem {
    list-style-type: none;
    font-weight: bold;
    position: relative;
    padding: 1.5625rem 0.625rem;
    cursor: pointer;
    font-weight: 400;
  }
  .nav__listitem::after {
    content: "";
    width: 0;
    height: 0.2rem;
    border-radius: 0;
    position: absolute;
    left: 0.625rem;
    bottom: 0.8rem;
    background-color: black;
    transition: width 100ms ease-in;
  }
  .nav__listitem:hover::after,
  .nav__listitem:focus::after {
    width: 85%;
  }
  .nav__listitem:hover ul,
  .nav__listitem:focus ul {
    opacity: 1;
    visibility: carouselState;
  }
  .nav__listitemdrop {
    position: absolute;
    top: 4rem;
    left: 0.625rem;
    /* box-shadow: 0 0 10px #e1e5ee; */
    background-color: white;
    border-radius: 0;
    width: 12rem;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    opacity: 0;
    visibility: hidden;
    transition: opacity 100ms ease-in-out;
    z-index: 999;
  }
  .nav__listitemdrop li {
    list-style: none;
    padding: 0.5rem 1rem;
    border-radius: 0.2rem;
    transition: background-color 100ms ease-in-out;
  }
  .nav__listitemdrop a:hover{
    font-weight: 600;
  }
  .nav__listitemdrop li:hover,
  .nav__listitemdrop li:focus {
  }

  .mobileNavToggler{
    display: none;
  }
@media only screen and (max-width: 600px) {
  nav{
    flex-wrap: wrap;
    margin: 14px 0 !important;
  }
  .nav__list{
    width: 100%;
    margin: 0;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

  }
  .mylogo img{

    /* padding: 0 0.625rem;
    left: 0.625rem; */

  }

  /*  */
  .nav__listlogo{
    flex-basis: 1;
    padding: 0;

  }
  .mobileNavToggler{
    flex-basis: 1;
    display: block;
    fill:white;
    font-size: 2rem;
  }
  .mobileNavToggler img{
    margin: auto 0;
  }
  .nav__listitem{
    width: 100%;
    padding: 0;
    margin: 0;
    display: none;
    display: ${(props) => (props.mobileNavIcon ? "block" : "none")};
    /* transition: all 1s ease; */
  }
    .nav__listitem::after {
    content: "";
    width: 0;
    height: 0rem;
    border-radius: 0;
  }
  .nav__listitem:hover::after,
  .nav__listitem:focus::after {
    width: 0;
  }
  .nav__listitem:hover ul,
  .nav__listitem:focus ul {
    opacity: 0;

  }
}

`;

export default Main;
