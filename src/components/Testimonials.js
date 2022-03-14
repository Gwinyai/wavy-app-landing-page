import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { Rating } from "@mui/material";
import { testimonialsSection } from "../config/testimonialsSection";

const TestimonialsSection = styled.section`
  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;
  padding: 9.6rem;
`;

const TestimonialsTitle = styled.h2`
  color: ${({ theme }) => theme.primary};
  display: block;
  font-size: 1.7rem;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 1.6rem;
  letter-spacing: 0.75px;
  text-align: center;
`;

const TestimonialsSubtitle = styled.h2`
  color: #${({ theme }) => theme.text};
  font-weight: 700;
  letter-spacing: -0.5px;
  font-size: 4.8rem;
  line-height: 1.05;
  margin-bottom: 8.2rem;
  text-align: center;
`;

const TestimonyBox = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 4.8rem;
  @media (max-width: 59em) {
    gap: 6.2rem;
    flex-direction: column;
  }
`;

const TestimonyText = styled.blockquote`
  font-size: 1.8rem;
  line-height: 1.8;
  margin-bottom: 1.6rem;
`;

const TestimonyName = styled.p`
  font-size: 1.6rem;
  color: #6f6f6f;
`;

const TestimonialImage = styled.img`
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 50%;
  margin-bottom: 1.2rem;
`;

const TestimonyFlexWrapper = styled.div`
  display: flex;
  justify-content: left;
  gap: 2rem;
`;

const CustomersSection = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 4.8rem 0 3.2rem 0;
`;

const Logos = styled.div`
  display: flex;
  justify-content: space-around;
  img {
    height: 3.2rem;
    filter: contrast(0);
    //opacity: 90%;
  }
  @media (max-width: 53em) {
    margin-top: 6.2rem;
    justify-content: center;
    flex-direction: column;
    gap: 6.4rem;
    img {
      object-fit: contain;
    }
  }
`;

const CustomersTitle = styled.h2`
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 0.75px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 2.4rem;
  color: #888;
`;

export default function Testimonials() {
  return (
    <>
      <TestimonialsSection>
        <TestimonialsTitle>{testimonialsSection.title}</TestimonialsTitle>
        <TestimonialsSubtitle>
          {testimonialsSection.subtitle}
        </TestimonialsSubtitle>
        <TestimonyBox>
          {testimonialsSection.testimonial1.include && (
            <div>
              <TestimonyFlexWrapper>
                <FontAwesomeIcon
                  className="quoteIcon"
                  icon={faQuoteLeft}
                ></FontAwesomeIcon>
                <TestimonialImage
                  src={testimonialsSection.testimonial1.image}
                />
              </TestimonyFlexWrapper>
              <TestimonyText>
                {testimonialsSection.testimonial1.text}
              </TestimonyText>
              <TestimonyFlexWrapper>
                <TestimonyName>
                  &mdash; {testimonialsSection.testimonial1.name}
                </TestimonyName>
                <Rating
                  name="half-rating-read"
                  defaultValue={testimonialsSection.testimonial1.rating}
                  size="large"
                  readOnly
                />
              </TestimonyFlexWrapper>
            </div>
          )}
          {testimonialsSection.testimonial2.include && (
            <div>
              <TestimonyFlexWrapper>
                <FontAwesomeIcon
                  className="quoteIcon"
                  icon={faQuoteLeft}
                ></FontAwesomeIcon>
                <TestimonialImage
                  src={testimonialsSection.testimonial2.image}
                />
              </TestimonyFlexWrapper>
              <TestimonyText>
                {testimonialsSection.testimonial2.text}
              </TestimonyText>
              <TestimonyFlexWrapper>
                <TestimonyName>
                  &mdash; {testimonialsSection.testimonial2.name}
                </TestimonyName>
                <Rating
                  name="half-rating-read"
                  defaultValue={testimonialsSection.testimonial2.rating}
                  size="large"
                  readOnly
                />
              </TestimonyFlexWrapper>
            </div>
          )}
        </TestimonyBox>
      </TestimonialsSection>
      {testimonialsSection.brands.include && (
        <CustomersSection>
          <CustomersTitle>{testimonialsSection.brands.title}</CustomersTitle>
          <Logos>
            {testimonialsSection.brands.images.map((image) => {
              return <img src={image} />;
            })}
          </Logos>
        </CustomersSection>
      )}
    </>
  );
}
