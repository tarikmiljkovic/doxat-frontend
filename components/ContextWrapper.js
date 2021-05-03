import SiteContext from '../contexts/SiteContext'
import { useState } from 'react'
import styled from "@emotion/styled";

function ContextWrapper({children}) {

    const [visible, translateDown] = useState(true);
    const [category, setCategory] = useState("svi");


    return (
      <SiteContext.Provider value={{ visible, translateDown, category, setCategory }}>
        {/* 2 */}
        {/* // Use a Provider to pass the current theme to the tree below. // Any
        component can read it, no matter how deep it is. // In this example,
        we're passing "dark" as the current value. */}
        <WrapperStyled>
          <div className="wrapper">{children}</div>
        </WrapperStyled>
      </SiteContext.Provider>
    );
}

const WrapperStyled = styled.div`
  .first img, .second img{
    width: 100% !important;
  }

`;

export default ContextWrapper;