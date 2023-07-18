import React, {useState} from 'react';
import styled from 'styled-components';
import logo from '../images/logo.svg';
import CloseIcon from '@mui/icons-material/Close';
import { selectMenu } from '../features/car/menu';
import { selectBurger } from '../features/car/BergurMenu';
import { useSelector } from 'react-redux';

const Header = () => {

  const [BurgerStatus, setBurgerStatus] = useState(0);
  const menu = useSelector(selectMenu);
  const burger = useSelector(selectBurger);

  return (
    <Container>
      <a href='/'>
        <img src={logo} alt='logo'/>
      </a>
      <Menu>
        {menu && menu.map((menu, index) => (
          <a key={index} href="#">{menu}</a>
        ))}

      </Menu>
      <RightMenu>
        <a href='#' onClick={() => setBurgerStatus(true)}>Menu</a>
      </RightMenu>
      <BurgerNav show = {BurgerStatus}>
        <CloseWrapper> <CustomClose onClick={() => setBurgerStatus(false)}/></CloseWrapper>
        {burger && burger.map((burger, index) => (
          <li><a key={index} href="#">{burger}</a></li>
        ))}
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  z-index : 1;
  min-height : 50px;
  position : fixed;
  display : flex;
  align-items : center;
  justify-content : space-between;
  padding :0px;
  top : 0;
  left : 0;
  right : 0;
`;

const Menu = styled.div`
  display : flex;
  align-items : center;
  justify-content : right;
  flex : 1;


  a {
    font-weight : 600;
    padding : 5px 10px;
    flex-wrap: nowrap;
    margin : 0 2px;
    border-radius : 5px;
  }

  a:hover {
    background :rgba(128,128,128,0.4);
  }

  @media (max-width : 768px) {
    display : none;
  }
`;

const RightMenu = styled.div`
  display : flex;
  align-items : center;

  a {
    font-weight : 600;
    padding : 5px 10px;
    flex-wrap: nowrap;
    margin : 0 2px;
    border-radius : 5px;
  }
  
  a:hover {
    background :rgba(128,128,128,0.3);
  }
`;

const BurgerNav = styled.div`
  position : fixed;
  top : 0;
  right : 0;
  background : white;
  width : 250px;
  z-index : 10;
  list-style : none;
  padding : 20px;
  display : flex;
  flex-direction : column;
  text-align : start;
  transform : ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition : transform 0.2s;

  li {
    padding : 15px 0;
    border-bottom : 1px solid rgba(0,0,0,0.3);
  }

  a { 
    font-weight : 600;
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor : pointer;
`;

const CloseWrapper = styled.div`
  display : flex;
  justify-content : flex-end;
`;