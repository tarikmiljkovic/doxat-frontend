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


  });

  return (
    <MainStyled visible={visible}>
      <nav className="wrapper">
        {/* Navigation ul > li > a */}
        <ul>
          <li>
            <Link href={`/${router.locale == "bs" ? "" : "en"}`}>
              <a className="logo">
                <img src="/logo.jpg" alt="Doxat" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/o-nama" locale={router.locale}>
              <a>{t.aboutus}</a>
            </Link>
          </li>
          <li id="subnav">
            <Link href="/projekti" locale={router.locale}>
              <a>{t.projects}</a>
            </Link>
            {/* Subnavigation */}
            {/* Navigation ul > li > a*/}
            <ul className="subnav-list">
              <li>
                <Link href="/projekti" locale={router.locale}>
                  <a onClick={() => setCategory("svi")}>Svi</a>
                </Link>
              </li>
              <li>
                <Link href="/projekti" locale={router.locale}>
                  <a onClick={() => setCategory("ideja")}>Ideja</a>
                  {/* <button onClick={() => setCount(count + 1)}></button> */}
                </Link>
              </li>
              <li>
                <Link href="/projekti" locale={router.locale}>
                  <a onClick={() => setCategory("izvedeno")}>Izvedeno</a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/software" locale={router.locale}>
              <a>{t.software}</a>
            </Link>
          </li>
          <li>
            <Link href="/kontakt" locale={router.locale}>
              <a>{t.contact}</a>
            </Link>
          </li>
          <li>
            <Link
              href={router.asPath}
              locale={router.locale == "bs" ? "en" : "bs"}
            >
              <a>
                <IoLanguageOutline />
                {router.locale == "bs" ? " EN" : " BiH"}
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  * {
    box-sizing: border-box;
  }
  body {
  }
  .wrapper {
    padding: 0;
    padding-bottom: 50px;
  }
  .logo img {
    height: 2.2rem;
  }

  nav > ul {
    background: white;
    padding: 0.625rem 0;
    /* padding-bottom: 10px; */
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    margin: 0;
  }
  .subnav-list {
    position: absolute;
    display: none;
  }
  #subnav {
    position: relative;
    padding: 0;
  }
  #subnav:hover .subnav-list {
      display: block;
      background-color: white;
      z-index: 999;
      bottom: -110px;
      padding-top: 20px;
  }
  .subnav-list:hover {
    display: block;
    background-color: white;
    z-index: 999;
    bottom: -130px;
  }

  .subnav-list li {
    /* padding-bottom: 10px; */
    padding: 10px 0;
    margin: 0;
    /* padding-right: 20px; */
  }

  .subnav-list li:first-of-type {
    /* padding-top: 0; */
    /* margin-top: 0; */


  }

  nav > ul > li {
    list-style: none;
    width: 100%;
  }

  nav > ul > li a {
    text-decoration: none;
    color: black;
    transition: all 100ms ease-in-out;
  }

  nav > ul > li a:hover {
    /* text-decoration: underline; */
    color: #808080;
  }

  nav > ul > li:first-of-type {
    margin-right: auto;
  }
  nav > ul > li:not(:first-of-type) {
    padding: 0.9rem 0;
  }

  .btn-primary:hover {
    background: black;
  }

  nav > ul > li > ul {
    list-style-type: none;
    padding: 0;
  }
  nav > ul > li > ul li {
    padding: 0;
    margin: 0;
  }

  @media (min-width: 769px) {
    nav > ul {
      flex-direction: row;
      max-height: 100px;
    }
    nav > ul > li:first-child {
      margin-right: auto;
      margin-left: 0;
    }
    nav > ul > li {
      width: auto;
      margin-left: 2rem;
    }
    nav > ul > li:last-of-type {
      margin-left: 3rem;
    }
    nav > ul > li > ul {
      flex-direction: row;
    }
  }

  /* =================================
  Media Queries
==================================== */

  /* @media (min-width: 769px) {
    header,
    ul {
      display: flex;
    }
    header {
      flex-direction: column;
      align-items: center;
      header {
        width: 80%;
        margin: 0 auto;
        max-width: 1170px;
      }
    }
  }

  @media (min-width: 1025px) {
    header {
      flex-direction: row;
      justify-content: space-between;
    }
  } */

  /*
 * And let's slide it in from the left
 */
  /* #menuToggle input:checked ~ ul {
    transform: none;
  } */

  /* Responsive */
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
  }
`;

export default Main;
