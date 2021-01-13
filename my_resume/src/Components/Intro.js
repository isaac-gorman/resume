import React from 'react';
import styled from "styled-components";
import Git from './Assets/Git.svg'
import Dribbble from './Assets/Dribbble.svg'
import Linkedin from './Assets/Linkedin.svg'
import './Intro.css';

const IntroWrap = styled.div`
    margin: 0px auto;
    background: #F2C94C;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Name = styled.p`
    font-family: 'medium';
    font-weight: normal;
    font-size: 28px;
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
    font-size: 14px;
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
  background: #FFACAC;

  @media (min-width: 1024px) {
    width: 200px;
    height: 40px;
  }
`;

function Intro() {
    return(
        <IntroWrap>
            <Name>Isaac Gorman</Name>
            <Occupation>Designer | Studnet</Occupation>
            <SocialContainer>
                <GitHubIcon src={Git} alt="nan" /> 
                <LinkedinIcon src={Linkedin} alt="nan" /> 
                <DribbbleIcon src={Dribbble} alt="nan" />    
            </SocialContainer>
        </IntroWrap>
    )
}

export default Intro;
