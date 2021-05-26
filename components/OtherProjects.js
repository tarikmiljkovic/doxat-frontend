





const { API_URL } = process.env;

import styled from "@emotion/styled";
import Link from "next/link";

import { useRouter } from "next/router";
function OtherProjects({ requestJ, currentProjectIndex,nextProjectIndex, prevProjectIndex }) {
  let router = useRouter();

  // 18.06
  //



  // console.log(requestJ[currentProjectIndex].slike[1]);

  let prev = requestJ[prevProjectIndex];
  let curr = requestJ[currentProjectIndex];
  let next = requestJ[nextProjectIndex];

  console.log(prev.prelazMisem.formats.medium.url);


  return (
    <OthersStyled>
      <div className="heading">
        <hr />
        <h4>Ostali projekti</h4>
      </div>
      <div className="grid-container">
        <Link
          key={prevProjectIndex + 120}
          className="relative"
          href={`/projekti/${prev.id}`}
          as={`/projekti/${prev.id}`}
        >
          <a className="items">
            <img src={prev.skica.formats.medium.url} alt="" className="main" />
            <img
              src={prev.prelazMisem.formats.medium.url}
              alt=""
              className="hover"
            />
            <div className="bottom">{prev.naziv}</div>
          </a>
        </Link>
        <Link
          key={prevProjectIndex + 100}
          className="relative"
          href={`/projekti/${curr.id}`}
          as={`/projekti/${curr.id}`}
        >
          <a className="items">
            <img src={curr.skica.formats.medium.url} alt="" className="main" />
            <img
              src={curr.prelazMisem.formats.medium.url}
              alt=""
              className="hover"
            />

            <div className="bottom">{curr.naziv}</div>
          </a>
        </Link>
        <Link
          key={nextProjectIndex + 110}
          className="relative"
          href={`/projekti/${next.id}`}
          as={`/projekti/${next.id}`}
        >
          <a className="items">
            <img src={next.skica.formats.medium.url} alt="" className="main" />
            <img
              src={next.prelazMisem.formats.medium.url}
              alt=""
              className="hover"
            />
            <div className="bottom">{next.naziv}</div>
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
  .items {
    height: 22rem !important;
    min-width: auto;
    overflow: hidden;
    object-fit: cover;
    object-position: center;
    position: relative;
    transition: all 0.2s ease-in-out;
  }
  .items img {
    object-fit: cover;
    object-position: center;
    width: 100% !important;
    height: 100% !important;
    z-index: 10;
    transition: all 0.2s ease-in-out;
  }
  .items img.hover {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    object-fit: cover;
    opacity: 0;
  }
  .items:hover img.hover {
    opacity: 1;
  }
  .items > .bottom {
    font-size: 1.1rem;
  }

  .items .hover .bottom {
    /* display: none; */
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
    transition: all 0.2s ease-in-out;

    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
    }
    @supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
      background-color: rgba(0, 0, 0, 0.3);
    }
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

export default OtherProjects;
