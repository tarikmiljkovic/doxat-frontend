import styled from "@emotion/styled";

import { useEffect, useState } from "react";

import { useContext } from "react";
import SiteContext from "../contexts/SiteContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiMenuLine, RiMenu4Fill } from "react-icons/ri";


import bs from "../locales/bs";
import en from "../locales/en";

function Footer() {
  const { visible } = useContext(SiteContext);
  const [startIcon, changeIcon] = useState(true);
  // const { navIcon, changeNavIcon } = useState(`<RiMenuLine/>`);


  let router = useRouter();

  const { locale } = router;
  const t = locale === "bs" ? bs : en;

  useEffect(() => {});

  return (
    <FooterStyled visible={visible}>
      <footer>
        <div>
          <p>
            <b>Doxat</b> {t.ltd}
          </p>
        </div>
        <div>
          <address>
            Fadil-Paše Šerifovića 6b,
            <br />
            Sarajevo 71000,
            <br />
            {t.country}
          </address>
        </div>
        <div>
          <strong>T</strong>
          &nbsp;
          <a href="tel:+0038733239918">+387 33 239 - 918</a>
          <br />
          <strong>F</strong>
          &nbsp;
          <a href="tel:+0038733239918">+387 33 239 - 918</a>
          <br />
          <strong>E</strong>
          &nbsp;
          <a href="mailto:doxat@bih.net.ba">doxat@bih.net.ba</a>
          <br />
        </div>
      </footer>
    </FooterStyled>
  );
}

const FooterStyled = styled.div`
  footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    padding: 48px 0;
    flex-wrap: wrap;
  }
  footer div:first-of-type {
    margin-right: auto;
    flex-basis: 100%;
    /* flex-shrink: 0; */
  }
  b{
    font-weight: 600;
  }

  // flex grow shrink basis

  footer div:not(:first-of-type) {
    /* margin: 0 60px; */
    /* flex-grow: 0; */
    /* flex-shrink: 0; */
    flex-basis: 100%;
  }
  address {
    font-style: normal;
  }
  footer {
    color: black;
    line-height: 1.6;
  }
  footer a:link,
  footer a:active,
  footer a:visited {
    color: #333;
    text-decoration: none;
  }
  footer strong {
    color: #1c1c1b;
  }

  /* Responsive */
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (min-width: 600px) {
    footer {
      flex-wrap: nowrap;
    }
    footer div:first-of-type {
      flex: 4 1 auto;
    }
    footer div:not(:first-of-type) {
      flex: 0 1 auto;
      margin-left: 80px;
      float: right;
    }
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

export default Footer;
