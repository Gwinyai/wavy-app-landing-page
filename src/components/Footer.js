import styled from "styled-components";
import logo from "../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { footerSection } from "../config/footerSection";
import { NavLink } from "react-router-dom";

const FooterSection = styled.div`
  padding: 12.8rem 0;
  border-top: 1px solid #eee;
`;

const GridContainer = styled.div`
  display: grid;
  column-gap: 6.4rem;
  row-gap: 9.6rem;
  grid-template-columns: 1.5fr 1fr 1fr;
  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;
`;

const LogoCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled.a`
  display: block;
  margin-bottom: 3.2rem;
`;

const SocialLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 2.4rem;
`;

const FooterLink = styled.a`
  &:link,
  &:visited {
    text-decoration: none;
    font-size: 1.6rem;
    color: #767676;
    transition: all 0.3s;
  }
  &:hover,
  &:active {
    color: #555;
  }
`;

const CopyRight = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
  color: #767676;
  margin-top: auto;
`;

const AddressCol = styled.div``;

const FooterHeading = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 4rem;
`;

const Contacts = styled.address`
  font-style: normal;
  font-size: 1.6rem;
  line-height: 1.6;
`;

const Address = styled.p`
  margin-bottom: 2.4rem;
`;

const NavCol = styled.nav``;

const FooterNav = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  a {
    &:link,
    &:visited {
      text-decoration: none;
      font-size: 1.6rem;
      color: #767676;
      transition: all 0.3s;
    }
    &:hover,
    &:active {
      color: #555;
    }
  }
`;

const LogoImage = styled.img`
  height: 5rem;
`;

export default function Footer() {
  return (
    <>
      <FooterSection>
        <GridContainer>
          <LogoCol>
            <FooterLogo>
              <LogoImage alt="logo" src={logo} />
            </FooterLogo>
            <SocialLinks>
              {footerSection.instagramLink.include && (
                <FooterLink href={footerSection.instagramLink.url}>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="2x"
                  ></FontAwesomeIcon>
                </FooterLink>
              )}
              {footerSection.facebookLink.include && (
                <FooterLink href={footerSection.facebookLink.url}>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="2x"
                  ></FontAwesomeIcon>
                </FooterLink>
              )}
              {footerSection.twitterLink.include && (
                <FooterLink href={footerSection.twitterLink.url}>
                  <FontAwesomeIcon icon={faTwitter} size="2x"></FontAwesomeIcon>
                </FooterLink>
              )}
            </SocialLinks>
            <CopyRight>Copyright &copy; {footerSection.copyright}</CopyRight>
          </LogoCol>
          <AddressCol>
            <FooterHeading>Contact Us</FooterHeading>
            <Contacts>
              {footerSection.location.include && (
                <Address>{footerSection.location.address}</Address>
              )}
              <p>
                {footerSection.phone.include && (
                  <>
                    <FooterLink href={"tel:" + footerSection.phone.phone}>
                      {footerSection.phone.phone}
                    </FooterLink>
                    <br />
                  </>
                )}
                {footerSection.email.include && (
                  <FooterLink href={"mailto:" + footerSection.email.email}>
                    {footerSection.email.email}
                  </FooterLink>
                )}
              </p>
            </Contacts>
          </AddressCol>
          <NavCol>
            <FooterHeading>Policy</FooterHeading>
            <FooterNav>
              <li>
                <NavLink to="/terms">Terms and Conditions</NavLink>
              </li>
              <li>
                <NavLink to="/privacy">Privacy Policy</NavLink>
              </li>
              <li>
                <NavLink to="/support">Support</NavLink>
              </li>
            </FooterNav>
          </NavCol>
        </GridContainer>
      </FooterSection>
    </>
  );
}
