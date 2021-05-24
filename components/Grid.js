

// const { API_URL } = process.env;

import styled from "@emotion/styled";
import { useContext } from "react";
import {SiteContext} from "../contexts/SiteContext";
import Link from 'next/link'
import { jsx } from "@emotion/react";

import { useRouter } from "next/router";


function Grid({ projekti, numberOfProjects }) {
  const { carouselState } = useContext(SiteContext);
  const { category, setCategory } = useContext(SiteContext);
  const { pageTranslate, setPageTranslate } = useContext(SiteContext);


  let calculateGridRows = Math.ceil(numberOfProjects.length/3);

  let router = useRouter();


  return (
    <GridStyled
      carouselState={carouselState}
      numberOfProjects={numberOfProjects.length}
      calculateGridRows={calculateGridRows}
      className="center"
    >
      <div className="grid-container">
        {projekti
          .filter((data) => {
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
              <a className="items" onClick={() => setPageTranslate("0vh")}>
                <img src={projekt.skica.url} alt="" className="main" />
                <img src={projekt.prelazMisem.url} alt="" className="hover" />
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
    grid-template-rows: repeat(${(props) => props.numberOfProjects}, 1fr);
    gap: 1.25rem;
    margin: 0 auto;
    height: auto;
  }

  .items {
    max-height: 22rem !important;
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
    transition: opacity 1s;
  }
  .items:hover img.hover {
    opacity: 1;
  }
  .items .hover .bottom {
    display: none;
  }
  .items:hover .bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    color: white;

    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
    }
    @supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }

  @media only screen and (min-width: 600px) {
    .grid-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(${(props) => props.calculateGridRows}, 1fr);
      gap: 1.85rem;
    }
    .items {
      height: 24rem !important;
      min-width: auto;
      overflow: hidden;
      object-fit: cover;
      object-position: center;
    }
    .item img {
      height: 100%;
    }
  }
`;






export default Grid;
