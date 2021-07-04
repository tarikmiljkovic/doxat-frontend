

import {SiteContext} from '../contexts/SiteContext'
import { useState, useEffect } from 'react'
import styled from "@emotion/styled";
import { useContext } from "react";

function ContainerMain({children}) {

    const { carouselState } = useContext(SiteContext);
    const { pageTranslate } = useContext(SiteContext);
    const { pageTranslateSecond } = useContext(SiteContext);

    const onlyThisPageTranslate = pageTranslate;

    useEffect(() => {}, []);

    return (
      <ContainerMainStyled
        carouselState={carouselState}
        pageTranslate={pageTranslate}
        onlyThisPageTranslate={onlyThisPageTranslate}
      >
        {children}
      </ContainerMainStyled>
    );
}

const ContainerMainStyled = styled.div`
  transform: translateY(${(props) => props.onlyThisPageTranslate});
  overflow: ${(props) => (props.carouselState ? "hidden" : "visible")};
  transition-duration: 1s;
  transition-delay: 0.6s;
  opacity: 1;
  padding: 0 0.625rem;
  max-width: 1170px;
  margin: 0 auto;

  overflow: hidden !important;

  @media only screen and (max-width: 600px) {
    padding: 0 0.625rem;
  }
`;



export default ContainerMain;