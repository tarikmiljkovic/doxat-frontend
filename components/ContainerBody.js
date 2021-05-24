// import styles from '../styles/Home.module.css'

import styled from "@emotion/styled";
export default function ContainerBody(props) {

  // console.log(props.children);
  return (
    <>
      <ContainerBodyStyled>
        <div className="contain">
          <div className="grid-container">
            <div className="first">{props.children[0]}</div>
            <div className="second">
              {props.children[1]} {props.children[2]}
            </div>
          </div>
        </div>
      </ContainerBodyStyled>
    </>
  );
}


const ContainerBodyStyled = styled.div`

  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: 0;
  border: 0;

  .first{
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
  .first img,
  .second img {
    width: 100% !important;
    margin-bottom: 1.25rem;
  }
  .wrapper {
    height: 100%;
  }

  .second {
    display: flex;
    flex-direction: column;
    justify-content: start;
  }

  .contain {
    max-width: 1170px;
    margin: 0 auto;
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
      grid-template-columns: 2fr 1fr;
      grid-template-rows: 1.5fr;
      gap: 0 1.875rem;
      grid-template-areas: ". .";
    }
    .first img, .second img {
      margin-bottom: 1.875rem !important;
    }
  }
`;


