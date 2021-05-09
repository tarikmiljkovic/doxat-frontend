





const { API_URL } = process.env;

import styled from "@emotion/styled";
import Link from "next/link";

import { useRouter } from "next/router";
function Grid({ requestJ, currentProjectIndex,nextProjectIndex, prevProjectIndex }) {
  let router = useRouter();

  return (
    <OthersStyled>
      <div className="heading">
        <hr />
        <h4>Ostali projekti</h4>
      </div>
      <div className="grid-container">
        <Link
          key={requestJ[prevProjectIndex].id}
          className="relative"
          href={`/projekti/${requestJ[prevProjectIndex].id}`}
          as={`/projekti/${requestJ[prevProjectIndex].id}`}
        >
          <a className="items" href="/">
            <img
              src={API_URL + requestJ[prevProjectIndex].slike[0].url}
              alt=""
              className="main"
            />
            {/* <img
            src={API_URL + projekt.slike[0].formats.small.url}
            alt=""
            className="hover"
          /> */}
            <div className="bottom">{requestJ[prevProjectIndex].naziv}</div>
          </a>
        </Link>
        <Link
          key={requestJ[currentProjectIndex].id}
          className="relative"
          href={`/projekti/${requestJ[currentProjectIndex].id}`}
          as={`/projekti/${requestJ[currentProjectIndex].id}`}
        >
          <a className="items" href="/">
            <img
              src={API_URL + requestJ[currentProjectIndex].slike[0].url}
              alt=""
              className="main"
            />
            {/* <img
            src={API_URL + projekt.slike[0].formats.small.url}
            alt=""
            className="hover"
          /> */}
            <div className="bottom">{requestJ[currentProjectIndex].naziv}</div>
          </a>
        </Link>
        <Link
          key={requestJ[nextProjectIndex].id}
          className="relative"
          href={`/projekti/${requestJ[nextProjectIndex].id}`}
          as={`/projekti/${requestJ[nextProjectIndex].id}`}
        >
          <a className="items" href="/">
            <img
              src={API_URL + requestJ[nextProjectIndex].slike[0].url}
              alt=""
              className="main"
            />
            {/* <img
            src={API_URL + projekt.slike[0].formats.small.url}
            alt=""
            className="hover"
          /> */}
            <div className="bottom">{requestJ[nextProjectIndex].naziv}</div>
          </a>
        </Link>
      </div>
    </OthersStyled>
  );
}

const OthersStyled = styled.div`
  .grid-container {
    display: grid;
    grid-template-columns: repeat(1, auto);
    grid-template-rows: repeat(1, auto);
    gap: 1rem;
    gap: 1.25rem 0;
    margin: 0 auto;
  }
  .heading h4 {
    margin-bottom: 30px;
    margin-top: 12px;
    font-weight: 600;
    color: #1c1c1b;
  }
  hr {
    border: 0.5px solid #c0c0c0;
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
      grid-template-rows: repeat(1, 1fr);
      gap: 20px 20px;
      grid-template-areas: ". . .";
      margin: 20px 0;
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
