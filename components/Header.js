
import styled from '@emotion/styled'

function Header(){
  return (
  <HeaderStyled>
    <div className="container">
      <div className="logo"></div>
        <span className="logo-text"></span>
    </div>

  </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  background-color: ${(props) => props.theme.colors.primary};

`;


export default Header