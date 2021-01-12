import React from 'react';
import styled from "styled-components";
import Git from './Assets/Git.svg'
import Dribbble from './Assets/Dribbble.svg'
import Linkedin from './Assets/Linkedin.svg'
import './Intro.css';

const Name = styled.p`
    font-family: 'medium';
    font-weight: normal;
    font-size: 24px;
`;

const Occupation = styled.p`
    font-family: 'medium';
    font-weight: normal;
    font-size: 14px;
    color: #828282;
`;

const GitHubIcon = styled.img`
  width: 40px;
  height: 40px;
  &:hover {
    filter: invert(0.4);
  }
`;
const LinkedinIcon = styled.img`
  width: 40px;
  height: 40px;
  &:hover {
    filter: invert(0.4);
  }
`;
const DribbbleIcon = styled.img`
  width: 40px;
  height: 40px;
  &:hover {
    filter: invert(0.4);
  }
`;

function Intro() {
    return(
        <div>
            <Name>Isaac Gorman</Name>
            <Occupation>Designer | Studnet</Occupation>
            {/* I need to add the three svg links */}
            <GitHubIcon src={Git} alt="nan" /> 
            <LinkedinIcon src={Linkedin} alt="nan" /> 
            <DribbbleIcon src={Dribbble} alt="nan" /> 
        </div>
    )
}

export default Intro;
