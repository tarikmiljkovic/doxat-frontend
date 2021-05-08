// import SiteContext from '../contexts/SiteContext'
import { useState } from 'react'
import styled from "@emotion/styled";

function Wrapper({children}) {

    // const [carouselState, mutateCarousel] = useState(true);
    // const [category, setCategory] = useState("svi");
    // console.log(carouselState);

    return (
      <WrapperStyled>
        <div className="wrapper">{children}</div>
      </WrapperStyled>
    );
}

const WrapperStyled = styled.div`
  /*  */
`;

export default Wrapper;