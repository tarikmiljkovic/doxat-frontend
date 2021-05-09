

import {SiteContext} from '../contexts/SiteContext'
import { useState, useEffect } from 'react'
import styled from "@emotion/styled";
import { useContext } from "react";

function ContainerMain({children}) {

    const { carouselState } = useContext(SiteContext);
    const { pageTranslate } = useContext(SiteContext);

    // console.log(carouselState);

    useEffect(() => {}, []);

    return (
      <ContainerMainStyled
        carouselState={carouselState}
        pageTranslate={pageTranslate}
      >
        {children}
      </ContainerMainStyled>
    );
}



const ContainerMainStyled = styled.div`
  transform: translateY(${(props) => props.pageTranslate});
  /* height: ${(props) => (props.pageTranslate ? "100%" : "100%")}; */
  /* height: calc('100%' - '100vh'); */
  overflow: ${(props) => (props.carouselState ? "hidden" : "visible")};
  transition-duration: 1s;
  transition-delay: 0.6s;
  opacity: 1;
  padding: 0 0.625rem;
  max-width: 1170px;
  margin: 0 auto;

  overflow: hidden !important;

  @media only screen and (max-width: 600px) {
    padding: 0 1.25rem;
  }
`;



export default ContainerMain;