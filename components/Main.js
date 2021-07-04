
import styled from "@emotion/styled";

import { useEffect, useState } from "react";

import { useContext } from "react";
import SiteContext from "../contexts/SiteContext";
import Link from 'next/link'

import { RiMenuLine, RiMenu4Fill } from "react-icons/ri";


function Main() {
  const { carouselState } = useContext(SiteContext);
  const [startIcon, changeIcon] = useState(true);
  // const { navIcon, changeNavIcon } = useState(`<RiMenuLine/>`);


  useEffect(() => {






  });

  return (
    <MainStyled carouselState={carouselState}>

      <h1>hello</h1>
    </MainStyled>
  );
}

const MainStyled = styled.div`

`;

export default Main;
