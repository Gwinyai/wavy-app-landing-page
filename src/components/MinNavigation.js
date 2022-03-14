import styled from "styled-components";
import logo from "../img/logo.png";
import { ModeUISwitch } from "../styles/base";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import classNames from "classnames";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 9.6rem;
  padding: 0 4.8rem;
  position: relative;
`;

const LogoImage = styled.img`
  height: 5rem;
`;

const MainNav = styled.nav`
  @media (max-width: 59em) {
    background-color: rgba(255, 255, 255, 0.97);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    transform: translateX(100%);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease-out;
    opacity: 1;
    pointer-events: none;
  }
`;

const MainNavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 3.2rem;
  .navCta:link,
  .navCta:visited {
    padding: 1.2rem 2.4rem;
    border-radius: 9px;
    color: ${({ theme }) => theme.textSecondary};
    background-color: ${({ theme }) => theme.background};
  }
  .navCta:hover,
  .navCta:active {
    background-color: ${({ theme }) => theme.background};
  }
  @media (max-width: 59em) {
    flex-direction: column;
    gap: 4.8rem;
  }
`;

const MainNavLink = styled.a`
  &:link,
  &:visited {
    display: inline-block;
    text-decoration: none;
    color: ${({ theme }) => theme.headerText};
    font-weight: 600;
    font-size: 1.8rem;
    transition: all 0.3s;
  }
  &:hover,
  &:active {
    color: ${({ theme }) => theme.background};
  }
`;

const MobileNavButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  display: none;
  @media (max-width: 59em) {
    display: block;
    z-index: 9999;
  }
`;

export default function MinNavigation({ changeTheme }) {
  const [isNavOpen, setNavOpen] = useState(false);
  const handleThemeChange = (event) => {
    changeTheme(event.target.checked ? "dark" : "light");
  };
  return (
    <>
      <Header>
        <LogoImage alt="logo" src={logo} />
        <MainNav className={classNames({ navOpen: isNavOpen })}>
          <MainNavList>
            <li>
              <MainNavLink className="navCta" href="#">
                Contact
              </MainNavLink>
            </li>
            <li>
              <ModeUISwitch onChange={handleThemeChange} />
            </li>
          </MainNavList>
        </MainNav>
        <MobileNavButton>
          <FontAwesomeIcon
            name="closedMenu"
            icon={faXmarkCircle}
            size="2x"
            className={classNames({ iconNoDisplay: !isNavOpen })}
            onClick={() => {
              setNavOpen(false);
            }}
          />
          <FontAwesomeIcon
            name="openMenu"
            icon={faBars}
            className={classNames({ iconNoDisplay: isNavOpen })}
            size="2x"
            onClick={() => {
              setNavOpen(true);
            }}
          ></FontAwesomeIcon>
        </MobileNavButton>
      </Header>
    </>
  );
}
