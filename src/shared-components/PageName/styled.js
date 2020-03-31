import styled from "styled-components";
import { Colors } from "../../configuration/Colors";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: ${(props) =>
    props.littleBottom ? "19px auto 18px auto" : "19px auto 37px auto"};

  h2 {
    font: 24px Open Sans, sans-serif;
    font-weight: 600;
    line-height: 33px;
    letter-spacing: -0.4px;
    text-align: left;
    color: ${Colors.text_black};
    padding-left: 80px;
  }
`;
