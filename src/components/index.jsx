import styled from "styled-components";
import jmColors from "./jmColors";

export const JMContainer = styled.div`
  margin: auto;

  /* https://www.lambdatest.com/blog/how-to-use-css-breakpoints-for-responsive-design/ */
  @media only screen and (max-width: 595px) {
    width: 595px;
  }
  
  @media only screen and (min-width: 600px) {
    width: 600px;
  }
  
  @media only screen and (min-width: 768px) {
    width: 768px;
  }
  
  @media only screen and (min-width: 889px) {
    width: 889px;
  }
  
  @media only screen and (min-width: 1200px) {
    width: 1200px;
  }
`

export const JMCard = styled.div`
  background: #FFFFFF;
  box-shadow: 2px 10px 20px rgba(255, 138, 0, 0.1);
  border-radius: 4px;
  padding: 40px;
  padding-top: 72px;
`

export const JMHeader = styled.h1`
  font-weight: 500;
`

export const JMVerticalDivider = styled.div`
  border-left: 1px solid ${jmColors.orange};
  margin-right: 16px;
  margin-left: 16px;
`;

export const JMButton = styled.button`
  width: 100%;
  border: none;
  color: white;
  background-color: ${jmColors.orange};
  padding: 20px;
  font-size: 18px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 3px 5px 10px rgba(255, 138, 0, 0.2);
  border-radius: 2px;
  cursor: pointer;
  transition: 150ms;

  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.6);
    box-shadow: 0px 0px 5px rgba(255, 138, 0, 0.2);
  }

  &:focus {
    border: 1px solid rgba(255, 255, 255, 0.6);
    box-shadow: inset 0px 0px 8px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`