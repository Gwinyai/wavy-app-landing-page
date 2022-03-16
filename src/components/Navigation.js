import styled from "styled-components";
import logo from "../img/logo.png";
import { ModeUISwitch } from "../styles/base";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import classNames from "classnames";
import { sections } from "../config/sections";

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
  z-index: 20;
  @media (max-width: 59em) {
    background-color: ${({ theme }) => theme.body};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: none;
    pointer-events: none;
    transform: translateX(100%);
    transition: all 0.5s ease-out;
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
  @media (max-width: 59em) {
    &:link,
    &:visited {
      color: ${({ theme }) => theme.text};
    }
    &:hover,
    &:active {
      color: ${({ theme }) => theme.text};
    }
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

export default function Navigation({ changeTheme }) {
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
              <MainNavLink href="#">Home</MainNavLink>
            </li>
            {sections.about && (
              <li>
                <MainNavLink href="#about">About</MainNavLink>
              </li>
            )}
            {sections.features && (
              <li>
                <MainNavLink href="#features">Features</MainNavLink>
              </li>
            )}
            {sections.testimonials && (
              <li>
                <MainNavLink href="#testimonials">Testimonials</MainNavLink>
              </li>
            )}
            {sections.pricing && (
              <li>
                <MainNavLink href="#pricing">Pricing</MainNavLink>
              </li>
            )}
            {sections.contact && (
              <li>
                <MainNavLink className="navCta" href="#contact">
                  Contact
                </MainNavLink>
              </li>
            )}
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
            className={classNames(
              { iconNoDisplay: !isNavOpen },
              "closeNavMenuIcon"
            )}
            onClick={() => {
              setNavOpen(false);
            }}
          />
          <FontAwesomeIcon
            name="openMenu"
            icon={faBars}
            className={classNames(
              { iconNoDisplay: isNavOpen },
              "openNavMenuIcon"
            )}
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
