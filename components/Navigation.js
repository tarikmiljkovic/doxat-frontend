import styled from "@emotion/styled";

import { useEffect, useState } from "react";

import { useContext } from "react";
import SiteContext from "../contexts/SiteContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiMenuLine, RiMenu4Fill } from "react-icons/ri";

import bs from '../locales/bs';
import en from '../locales/en';

import { IoLanguageOutline } from "react-icons/io5";

function Main() {


  const { visible } = useContext(SiteContext);
  const { category, setCategory } = useContext(SiteContext);

  // console.log(category);

  // const [startIcon, changeIcon] = useState(true);
  // const { navIcon, changeNavIcon } = useState(`<RiMenuLine/>`);

  let router = useRouter();

  const {locale} =router;
  const t= locale === 'bs'?bs:en;

  // console.log(router);

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
    <MainStyled visible={visible}>
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__listlogo">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 1155 367"
              style={{ enableBackground: "new 0 0 1155 367" }}
              xmlSpace="preserve"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: "\n\t.st0{fill:#FF0000;}\n",
                }}
              />
              <g transform="translate(0.000000,367.000000) scale(0.100000,-0.100000)">
                <path
                  className="st0"
                  d="M4994,3103c-12-2-40-20-62-39c-52-44-71-118-53-199c12-52,21-67,356-560c241-355,415-615,415-619
		c0-2-173-263-384-579c-415-619-411-613-386-706c13-49,66-112,114-135c69-33,165-16,222,38c12,11,127,179,254,371
		c334,504,423,635,431,635c3,0,151-219,329-488c177-268,334-500,349-516c35-39,80-56,143-56c65,0,128,28,157,68c34,48,46,129,29,188
		c-13,45-145,250-634,985c-68,102-124,189-124,194c0,4,169,261,375,570c325,487,376,569,385,616c28,146-43,239-184,239
		c-76,0-110-14-152-62c-16-19-173-248-348-511c-176-262-323-477-327-477s-106,147-226,328c-493,738-447,673-505,703
		C5133,3109,5053,3115,4994,3103z"
                />
                <path
                  d="M3364,2928c-40-19-44-47-44-318v-258l-252-4c-234-3-257-5-300-25c-58-27-127-89-167-152c-58-90-62-132-59-528
		c3-393,4-396,70-488l29-40l-1311-3l-1310-2v-55v-55l1423-2c2387-4,3033,0,3092,17c105,30,212,119,276,230c53,91,61,162,57,462
		c-5,292-11,330-72,420c-100,147-240,223-411,223c-144,0-253-48-354-155c-119-127-131-176-131-522c0-279,6-327,55-424
		c14-27,41-67,60-88s35-41,35-45c0-3-120-5-267-4l-268,3l-5,885c-3,487-9,892-13,901C3480,2936,3409,2950,3364,2928z M3320,1670
		v-490h-202c-114,0-220,5-242,11c-54,15-121,79-135,132c-9,29-11,140-9,374l3,331l30,44c18,25,49,52,75,66c42,21,56,22,262,22h218
		V1670z M4521,2123c57-30,98-73,131-136c22-41,23-51,23-312c0-253-1-273-21-316c-31-66-78-114-142-146c-79-39-183-39-258,0
		c-64,32-127,103-148,164c-23,66-23,505-1,580c26,86,115,169,210,194C4370,2166,4467,2153,4521,2123z"
                />
                <path
                  d="M8534,2928c-40-19-44-47-44-318v-260h-73c-65,0-76-3-97-25c-32-34-33-107-2-138c18-17,37-22,97-25l75-4l-2-522l-3-521
		l-290-2l-290-2l-5,477l-5,477l-32,66c-39,80-111,150-191,187c-57,27-58,27-324,30l-268,3l-25-25c-29-29-33-81-10-126
		c9-17,17-31,18-32s120-4,264-7l261-6l39-31c66-53,83-100,83-235v-118l-242-3c-228-3-247-5-303-27c-79-32-156-109-198-198
		c-27-60-31-79-31-158c-1-111,20-173,84-253c35-44,63-66,124-97l79-40l701,2c385,2,1357,3,2159,3h1458l-3,55l-3,55h-1427H8680v525
		v525h160c170,0,201,6,219,47c22,47,3,122-34,137c-9,3-91,6-181,6h-164v260c0,168-4,268-11,283C8650,2935,8583,2952,8534,2928z
		 M7710,1380v-200h-210c-229,0-258,5-313,58c-43,40-59,79-60,141c0,62,16,102,60,143c55,53,80,57,311,58h212V1380z"
                />
              </g>
            </svg>
          </li>
          <Link href="/o-nama" locale={router.locale}>
            <a class="nav__listitem">{t.aboutus}</a>
          </Link>
          <Link href="projekti">
            <li class="nav__listitem">
              {t.projects}
              <ul class="nav__listitemdrop">
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
            <li class="nav__listitem">
              {t.software}
              {/* <ul class="nav__listitemdrop">
              <li>Svi</li>
              <li>Izvedeno</li>
              <li>Ideja</li>
            </ul> */}
            </li>
          </Link>
          <Link href="/kontakt" locale={router.locale}>
            <li class="nav__listitem">{t.software}</li>
          </Link>
          <Link href="/kontakt" locale={router.locale == "bs" ? "en" : "bs"}>
            <a class="nav__listitem">
              {router.locale == "bs" ? " EN" : " BS"}
            </a>
          </Link>
        </ul>
      </nav>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  /* Add a black background color to the top navigation */

  /* color variables */
  /* border radius */
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
  a:link {
    text-decoration: none;
    font-weight: normal;
  }
  .nav {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 50px;
  }
  .nav__list {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 2rem;
    margin: 0 2rem;
  }
  .nav__listlogo {
    list-style: none;
    margin-right: auto;
    cursor: pointer;
  }
  .nav__listlogo svg {
    width: 8rem;
    transition: fill 100ms ease-in;
  }
  .nav__listlogo svg:hover,
  .nav__listlogo svg:focus {
    /* fill: #f06292; */
    fill: black;
  }
  .nav__listitem {
    list-style: none;
    font-weight: bold;
    position: relative;
    padding: 1.5rem 1rem;
    cursor: pointer;
    font-weight: 400;
  }
  .nav__listitem::after {
    content: "";
    width: 0;
    height: 0.2rem;
    border-radius: 0;
    position: absolute;
    left: 1rem;
    bottom: 0.8rem;
    background-color: black;
    transition: width 100ms ease-in;
  }
  .nav__listitem:hover::after,
  .nav__listitem:focus::after {
    width: 60%;
  }
  .nav__listitem:hover ul,
  .nav__listitem:focus ul {
    opacity: 1;
    visibility: visible;
  }
  .nav__listitemdrop {
    position: absolute;
    top: 4rem;
    left: -1rem;
    /* box-shadow: 0 0 10px #e1e5ee; */
    background-color: white;
    border-radius: 0.2rem;
    width: 12rem;
    padding: 1rem;
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
    font-weight: normal;
  }
  .nav__listitemdrop li:hover,
  .nav__listitemdrop li:focus {
    font-weight: normal;
  }
`;

export default Main;
