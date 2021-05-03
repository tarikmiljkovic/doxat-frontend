

const { API_URL } = process.env;

import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useContext } from "react";
import SiteContext from "../contexts/SiteContext";
import Link from 'next/link'

import { useRouter } from "next/router";
function Grid({projekti}) {

  const { visible } = useContext(SiteContext);
  const { category, setCategory } = useContext(SiteContext);


  // const [startIcon, changeIcon] = useState(true);
  // const { navIcon, changeNavIcon } = useState(`<RiMenuLine/>`);



  let router = useRouter();

  // console.log(router);

  return (
    <GridStyled visible={visible} className="center">
      <div className="grid-container">
        {projekti
          .filter((data) => {
            // console.log(data);
            if (category == "svi") {
              return data;
            } else if (category == "ideja" && data.faza == category) {
              return data;
            } else if (category == "izvedeno" && data.faza == category) {
              return data;
            }
          })
          .map((projekt, index) => (
            <Link
              key={projekt.id}
              className="relative"
              // href={`/${projekt.slug}`}
              href={`/projekti/${projekt.id}`}
              as={`/projekti/${projekt.id}`}
            >
              <a className="items" href="/">
                <img
                  src={API_URL + projekt.skica.url}
                  alt=""
                  className="main"
                />
                <img
                  src={API_URL + projekt.slike[0].formats.small.url}
                  alt=""
                  className="hover"
                />
                <div className="bottom">{projekt.naziv}</div>
              </a>
            </Link>
          ))}
      </div>
    </GridStyled>
  );
}

const GridStyled = styled.div`
  .grid-container {
    display: grid;
    grid-template-columns: repeat(1, auto);
    grid-template-rows: repeat(1, auto);
    gap: 1rem;
    gap: 10px 0;
    margin: 0 auto;
  }
  .center {
    /* margin: 0 auto; */
    /* width: 80%; */
  }
  .items {
    max-height: 20rem;
    min-width: auto;
    overflow: hidden;
    object-fit: cover;
    object-position: center;
    position: relative;
  }
  .items img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    object-position: center;
  }
  .items img.hover {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    object-fit: cover;
    opacity: 0;

    /* transition: opacity 0.01s; */
  }
  .items:hover img.hover {
    opacity: 1;
  }
  .items:hover .bottom {
    position: none;
    /* bottom: 0;
    left: 0;
    width: 100%;
    height: 40px; */
    box-sizing: border-box;
    padding: 10px;
    background-color: black;
    z-index: 999;
    color: white;
  }
  .items:hover .bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    background-color: black;
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (min-width: 600px) {
    .grid-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
      gap: 20px 20px;
      grid-template-areas:
        ". . ."
        ". . ."
        ". . .";
    }
    .items {
      height: 24rem;
      min-width: auto;
      overflow: hidden;
      object-fit: cover;
      object-position: center;
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




export default Grid;