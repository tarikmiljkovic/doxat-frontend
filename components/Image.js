// const { API_URL } = process.env;

// import Link from "next/link";
import styled from "@emotion/styled";

export default function Image({ src, caption, key }) {
  return (
    <ImageStyled key={key} className="">
      <div className="subgrid">
        <img src={src} alt="doxat sarajevo" />
        { caption ? <div className="bottom">{caption}</div> : ''}
      </div>
    </ImageStyled>
  );
}

const ImageStyled = styled.div`
  .subgrid {
    display: flex;
    flex-direction: column;
    position: relative;
    /* margin-bottom: 1.875rem; */
    margin-bottom: 0.625rem;
  }

  .subgrid img {
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  .bottom {
    font-size: 1.1rem;
  }
  .bottom {
    display: block !important;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    color: white;
    transition: all 0.2s ease-in-out;
    opacity: 0;
    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
    }
    @supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
  .subgrid:hover .bottom {
    z-index: 50;
    opacity: 1;
  }

  @media only screen and (min-width: 600px) {
    .subgrid {
      margin-bottom: 1.875rem;
    }
  }

  /* 1.25rem */
`;