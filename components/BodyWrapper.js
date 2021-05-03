// import styles from '../styles/Home.module.css'

import styled from "@emotion/styled";
export default function BodyWrapper(props) {

  // console.log(props.children);
  return (
    <>
      <BodyWrapperStyled>
        <div className="contain">
          <div className="grid-container">
            <div className="first">{props.children[0]}</div>
            <div className="second">{props.children[1]}</div>
          </div>
        </div>
      </BodyWrapperStyled>
    </>
  );
}


const BodyWrapperStyled = styled.div`
  .contain {
    max-width: 1170px;
    margin: 0 auto;
  }
  .second{
    color:blue;
  }
  .grid-container {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    gap: 0px 0px;
    grid-template-areas:
      "."
      ".";
  }

  p:first-of-type {
    margin-top: 0;
  }

  a:link,
  a:visited,
  a:hover {
    color: #333;
    text-decoration: none;
  }

  /* .first img {
    width: 100%;
    height: 100%;
  } */
  @media only screen and (min-width: 600px) {
    .grid-container {
      display: grid;
      grid-template-columns: 1.4fr 0.6fr;
      grid-template-rows: 1.5fr;
      gap: 0 60px;
      grid-template-areas: ". .";
    }
  }
`;


