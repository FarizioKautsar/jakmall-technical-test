import styled from "styled-components";

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