import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Colors } from "../../configuration/Colors";

export const Header = styled.div`
  width: 100%;
  height: 80px;
  background: ${Colors.main_header};
`;

export const Container = styled.div`
  width: 930px;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isAuth ? "space-between" : "center")};
`;

export const ContainerCenter = styled(Container)`
  justify-content: center;
`;

export const Input = styled.div`
  width: 430px;
  display: flex;
  flex-flow: column;
`;

export const Nav = styled.div``;

export const MenuLink = styled(NavLink).attrs({
  activeClassName: "ActiveLink",
})`
  font: 16px "Open sans", sans-serif;
  color: ${Colors.link_gray};
  letter-spacing: -0.4px;
  text-decoration: none;
  padding-right: 31px;

  &.ActiveLink {
    color: ${Colors.bg_white};
  }
`;

export const BalanceLink = styled(NavLink)`
  height: 30px;
  font: 16px "Open sans", sans-serif;
  background-color: ${Colors.bg_white};
  padding: 4px 18px;
  letter-spacing: -0.4px;
  color: ${Colors.text_black};
  border-radius: 4px;
  text-decoration: none;

  span {
    font-size: 11px;
    margin-left: 5px;
  }
`;
