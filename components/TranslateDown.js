import styled from "@emotion/styled";
import SiteContext from '../contexts/SiteContext'
// import { useRouter } from 'next/router'
import { useContext, setState, useState } from "react";
import { MdExpandMore } from "react-icons/md";
function TranslateDown() {

  const { visible, translateDown } = useContext(SiteContext);
  // console.log(visible);

  return (
    <DivStyled>
      <a onClick={() => translateDown(() => !visible)} className="down"><MdExpandMore/></a>
    </DivStyled>
  );
}

const DivStyled = styled.div`
  /* background-color: ${(props) => props.theme.colors.primary};
 */
  .down {
    position: absolute;
    bottom: 20px;
    left: calc(50%);
    transform: translate(-50%, 0);
    color: white;
    font-size: 4.5rem;
    cursor: pointer;
    fill: white;
    color: white;
  }
  .down > svg {
    fill: white;
    color: white;
  }
`;

export default TranslateDown;
