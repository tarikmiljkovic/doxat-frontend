

// const { API_URL } = process.env;

import styled from "@emotion/styled";
import { useContext } from "react";
import {SiteContext} from "../contexts/SiteContext";
import Link from 'next/link'
// import { jsx } from "@emotion/react";

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
                <img src={projekt.skica.formats.medium.url} alt="" className="primary"/>
                <img src={projekt.prelazMisem.formats.medium.url} alt="" className="secondary" />
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
    height: 22rem !important;

    min-width: auto;
    overflow: hidden;
    object-fit: cover;
    object-position: center;
    position: relative;
    transition: all .2s ease-in-out;
  }

  .primary {
  }

  .items img {
    object-fit: cover;
    object-position: center;
    width: 100% !important;
    height: 100% !important;
    z-index: 10;
    transition: all .2s ease-in-out;
  }
  .items .secondary {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 30 !important;
    transition: all .2s ease-in-out;
    opacity: 0;
    transition: all .2s ease-in-out;
  }
  .items:hover img.secondary {
    opacity: 1;
    display: block;
    transition: all .2s ease-in-out;
  }
  .items > .bottom {
    font-size: 1.1rem;
  }
  .items:hover .bottom {
    display: block !important;
    position: absolute;
    z-index: 50;
    bottom: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    color: white;
    transition: all .2s ease-in-out;

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
      gap: 1.875rem;
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
