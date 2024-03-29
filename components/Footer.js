import styled from "@emotion/styled";

import { useEffect, useState } from "react";

import { useContext } from "react";
import {SiteContext} from "../contexts/SiteContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiMenuLine, RiMenu4Fill } from "react-icons/ri";
import { GrInstagram, GrFacebook } from "react-icons/gr";

import bs from "../locales/bs";
import en from "../locales/en";

function Footer() {
  const { carouselState } = useContext(SiteContext);
  const [startIcon, changeIcon] = useState(true);
  // const { navIcon, changeNavIcon } = useState(`<RiMenuLine/>`);


  let router = useRouter();

  const { locale } = router;
  const t = locale === "bs" ? bs : en;

  useEffect(() => {});

  return (
    <FooterStyled carouselState={carouselState}>
      <footer>
        <div className="space">
          <p>
            <b>doxat</b> {t.ltd}
          </p>
        </div>
        <div className="space">
          <Link href="https://www.instagram.com/doxat_design/">
            <a className="gerade">
              <GrInstagram />
            </a>
          </Link>
          <Link href="https://www.instagram.com/doxat_design/">
            <a>Instagram</a>
          </Link>
          <br />
          <Link href="https://www.facebook.com/studiodoxat">
            <a className="gerade">
              <GrFacebook />
            </a>
          </Link>
          <Link href="https://www.facebook.com/studiodoxat">
            <a>Facebook</a>
          </Link>
        </div>
        <div className="space">
          <Link href="https://goo.gl/maps/5ZQ79TchgHW8a8N58">
            <a>
              <address>
                Fadil-Paše Šerifovića 6b,
                <br />
                Sarajevo 71000,
                <br />
                {t.country}
              </address>
            </a>
          </Link>
        </div>
        <div className="space">
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
          <Link href="mailto:doxat@bih.net.ba">
            <a>doxat@bih.net.ba</a>
          </Link>
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
    align-items: start;
    flex-direction: row;
    padding: 20px 0;
    flex-wrap: wrap;
    font-size: 1rem;
  }
  .space {
    padding: 0.625rem 0;
  }

  .gerade {
    display: inline-block;
    margin-right: 6px;
    margin-bottom: 4px;
  }
  footer p:first-of-type {
    margin-top: 0;
  }
  footer div:first-of-type {
    margin-right: auto;
    flex-basis: 100%;
    /* flex-shrink: 0; */
  }
  b {
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

  footer div a:hover {
    text-decoration: underline;
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

    footer {
      padding: 48px 0;
    }
  }
`;

export default Footer;
