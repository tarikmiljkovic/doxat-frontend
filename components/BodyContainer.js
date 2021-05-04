

import SiteContext from '../contexts/SiteContext'
import { useState } from 'react'
import styled from "@emotion/styled";
import { useContext } from "react";

function BodyContainer({children}) {

    const { visible } = useContext(SiteContext);

    // console.log(visible);

    return (
      <BodyStyled visible={visible}>
        <div className="container">{children}</div>
      </BodyStyled>
    );
}

const BodyStyled = styled.div`
  .container {
    max-width: 1170px;
    margin: 0 auto;
    padding: 0 0.625rem;
    transform: translateY(${(props) => (props.visible ? "0vh" : "-100vh")});

    height: 0;

    transition-duration: 1s;
    transition-delay: 0.6s;
    opacity: 1;
    /* transform: translateY(-100%) scale(0.9); */
    /* opacity: 0; */
  }
`;

export default BodyContainer;