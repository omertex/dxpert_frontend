import styled from "styled-components";
import { Colors } from "../../../configuration/Colors";

export const Section = styled.div`
  padding: 25px 50px;
`;

export const SectionName = styled.div`
  text-align: left;
  font: 16px Open Sans, sans-serif;
  line-height: 22px;
  letter-spacing: -0.4px;
  color: ${Colors.text_black};
  padding-bottom: 30px;
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
`;

export const Title = styled.p`
  width: 150px;
  margin: 0;
  padding: 0 10px 0 0;
  font-size: 12px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  color: ${Colors.text_black};
`;

export const Description = styled.p`
  font-size: 12px;
  line-height: 24px;
  text-align: left;
  color: ${Colors.text_black};
`;

export const AboutMe = styled(Description)`
  max-width: 550px;
  font-size: 16px;
`;

export const Tag = styled(Description)`
  margin: 0 32px 14px 10px;
`;

export const Experiences = styled.div`
  margin-bottom: 30px;
`;

export const EducationInfo = styled.div`
  text-align: left;
  margin-bottom: 5px;

  h6 {
    font-size: 16px;
    line-height: 22px;
  }
  p {
    font-size: 12px;
    line-height: 16px;
  }
`;
