import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import {
  MdOutlineHome,
  MdOutlineBookmarks,
  MdOutlineModeEditOutline,
  MdPersonOutline,
} from "react-icons/md";

export default function Footer() {
  return (
    <footer>
      <Nav>
        <StyledLink to="/">
          <MdOutlineHome color="black" size="1.5rem" title="home" />
        </StyledLink>
        <StyledLink to="bookmarks">
          <MdOutlineBookmarks color="black" size="1.5rem" title="bookmark" />
        </StyledLink>
        <StyledLink to="add">
          <MdOutlineModeEditOutline
            color="black"
            size="1.5rem"
            title="add movie"
          />
        </StyledLink>
        <StyledLink to="profile">
          <MdPersonOutline color="black" size="1.5rem" title="profile" />
        </StyledLink>
      </Nav>
    </footer>
  );
}

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: auto;
  background: linear-gradient(to right top, #65dfc9, #6cdbeb);
  display: flex;
  z-index: 2;
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 50, 0.75);
  -webkit-box-shadow: 0px 0px 5px 5px rgba(0, 0, 50, 0.75);
  -moz-box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 50.75);
`;

const StyledLink = styled(NavLink)`
  flex: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  transition: 0.5s;

  &:hover {
    background: #fff;
  }
`;
