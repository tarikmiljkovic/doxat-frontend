import styled, { jsx } from "@emotion/styled";
import { useContext } from "react";
import { MdExpandMore } from "react-icons/md";
import {SiteContext} from '../contexts/SiteContext'
// import { useRouter } from 'next/router'


function translateDown() {

  const { carouselState, mutateCarousel } = useContext(SiteContext);
  const { pageTranslate, setPageTranslate } = useContext(SiteContext);

  console.log(carouselState);


  const onClickHandler = () => {
    mutateCarousel(!carouselState);
    setPageTranslate('-100vh');
  };





  return (
    <DivStyled>
      <a
        // onClick={() => {

        // }}
        onClick={onClickHandler}
        className="down"
      >
        <MdExpandMore />
        <MdExpandMore className="second" />
      </a>
    </DivStyled>
  );
}

const DivStyled = styled.div`
  /* background-color: ${(props) => props.theme.colors.primary};
 */
  .down svg {
    position: absolute;
    bottom: 3.2rem;
    left: calc(50%);
    transform: translate(-50%, 0);
    color: white;
    font-size: 5rem;
    cursor: pointer;
    fill: white;
    color: white;
  }
  .down svg {
    fill: white;
    color: white;
    opacity: ${(props) => (props.carouselState ? 0 : 1)};
    display: ${(props) => (props.carouselState ? "none" : "block")};
  }
  .down svg:not(:first-of-type) {
    bottom: 2rem;
  }

  @media only screen and (max-width: 600px) {
    .down > svg {
      font-size: 3.5rem !important;
    }
  }
`;

export default translateDown;
