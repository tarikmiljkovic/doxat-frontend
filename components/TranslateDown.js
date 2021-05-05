import styled, { jsx } from "@emotion/styled";
import SiteContext from '../contexts/SiteContext'
// import { useRouter } from 'next/router'
import { useContext, setState, useState } from "react";
import { MdExpandMore } from "react-icons/md";

import { IoChevronDownSharp } from "react-icons/io5";


function TranslateDown() {

  const { visible, translateDown } = useContext(SiteContext);
  // console.log(visible);

  return (
    <DivStyled>
      <a onClick={() => translateDown(() => !visible)} className="down">
        <MdExpandMore />
        <MdExpandMore className="second"

        />
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
    opacity: ${(props) => (props.visible == true ? 0 : 1)};
  }
  .down svg:not(:first-of-type) {
    bottom: 2rem;
  }
`;

export default TranslateDown;
