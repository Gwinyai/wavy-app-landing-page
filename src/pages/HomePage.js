import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import MockupCarousel from "../components/MockupCarousel";
import ContactUs from "../components/Contact";
import styled from "styled-components";
import LightenDarkenColor from "../utility/LightenDarken";
import { sections } from "../config/sections";
import { aboutSection } from "../config/aboutSection";

const HeaderWrapper = styled.div`
  background: linear-gradient(
    ${({ theme }) => theme.primary},
    ${({ theme }) => LightenDarkenColor(theme.secondary, -20)}
  );
`;

export default function HomePage({ theme, changeTheme }) {
  return (
    <>
      <HeaderWrapper>
        <Navigation changeTheme={changeTheme} theme={theme} />
        <Hero />
      </HeaderWrapper>
      {sections.about && <Features theme={theme} />}
      {sections.about && aboutSection.carousel.include && (
        <MockupCarousel theme={theme} />
      )}
      {sections.testimonials && <Testimonials />}
      {sections.pricing && <Pricing />}
      {sections.contact && <ContactUs />}
      <Footer />
    </>
  );
}
