import React from 'react';
import styled from "styled-components";
import Git from './Assets/Git.svg'
import Dribbble from './Assets/Dribbble.svg'
import Linkedin from './Assets/Linkedin.svg'

const IntroWrap = styled.div`
    margin: 0px auto;
    // background: #F2C94C;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Name = styled.p`
    font-family: 'medium';
    font-weight: normal;
    font-size: 36px;
    text-align: center;
    margin-top: 0px;
    margin-bottom: 0px;  

    @media (min-width: 1024px) {
        font-size: 54px;
      }
`;

const Occupation = styled.p`
    font-family: 'medium';
    font-weight: normal;
    font-size: 18px;
    color: #828282;
    text-align: center;
    margin-top: 0px;
    margin-bottom: 10px;


    @media (min-width: 1024px) {
        font-size: 32px;
      }
`;

const GitHubIcon = styled.img`
  width: 24px;
  height: 24px;
  &:hover {
    filter: invert(0.4);
  }
    @media (min-width: 1024px) {
    width: 34px;
    height: 34px;
  }
`;
const LinkedinIcon = styled.img`
  width: 24px;
  height: 24px;
  &:hover {
    filter: invert(0.4);
  }
    @media (min-width: 1024px) {
    width: 34px;
    height: 34px;
  }
`;
const DribbbleIcon = styled.img`
  width: 24px;
  height: 24px;
  &:hover {
    filter: invert(0.4);
  }
    @media (min-width: 1024px) {
    width: 34px;
    height: 34px;
  }
`;

const SocialContainer = styled.div`
  width: 140px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // background: #FFACAC;

  @media (min-width: 1024px) {
    width: 200px;
    height: 40px;
  }
`;

function Intro() {
    return(
        <IntroWrap>
            <Name>Isaac Gorman</Name>
            <Occupation>Designer | Developer</Occupation>
            <SocialContainer>
              <a rel="noreferrer" href={"https://github.com/isaac-gorman"} target="_blank">
                <GitHubIcon src={Git} alt="nan" /> 
              </a>
              <a rel="noreferrer" href={"https://www.linkedin.com/in/isaac-m-gorman/"} target="_blank">
                <LinkedinIcon src={Linkedin} alt="nan" /> 
              </a>
              <a rel="noreferrer" href={"https://dribbble.com/isaacgorman"} target="_blank">
                <DribbbleIcon src={Dribbble} alt="nan" /> 
              </a>  
            </SocialContainer>
        </IntroWrap>
    )
}

export default Intro;
