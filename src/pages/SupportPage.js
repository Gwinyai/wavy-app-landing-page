import ContactUs from "../components/Contact";
import MinNavigation from "../components/MinNavigation";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  margin-top: 9.6rem;
`;

export default function SupportPage({ theme, changeTheme }) {
  return (
    <>
      <MinNavigation changeTheme={changeTheme} theme={theme} />
      <Wrapper>
        <ContactUs />
      </Wrapper>
    </>
  );
}
