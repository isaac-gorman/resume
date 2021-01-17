import React from 'react';
import styled from "styled-components";

const AboutWrapper = styled.div`
    width: 90%;
    margin-left: 14px;
    @media (min-width: 1024px) {
        margin-left: 24px;
    }
`;

const Text = styled.p`
margin-top: 0px;
margin-bottom: 43px;
font-family: 'book';
font-weight: normal;
color: #4F4F4F;
font-size: 14px;
text-align: left;
margin-bottom: 30px;
@media (min-width: 1024px) {
    margin-bottom: 43px;
    font-size: 16px;
}
`

const Objective = styled.p`
margin-top: 0px;
margin-bottom: 43px;
font-family: 'medium';
font-weight: normal;
color: #4F4F4F;
font-size: 14px;
text-align: left;
margin-bottom: 5px;
@media (min-width: 1024px) {
    font-size: 16px;
}
`

function About() { 
    return (
        <AboutWrapper>
            <Objective>
                Seeking software engineering internships for Summer 2021
            </Objective>
            <Text>
                I'm a full-stack designer who is passionate about bringing new product ideas to life from development to marketing. I naturally enjoy design but have become an engineer by necessity. I’ve worked for startups in design and growth roles. I fell in love with how service design could be innovated through software development, so I switched over. In parallel with my commitment to work on products, I derive from my experience as a college athlete and competing in CrossFit when it comes to, coachability, and working with teams.
            </Text>
            <Text>
                Previously I was a Growth Manager and Designer at Hitch. Currently, I am a Computer Science and Engineering student living in central Texas. Outside of tech I used to play college football, and still fulfill my desire to compete in CrossFit.
            </Text>
        </AboutWrapper>
    );
}

export default About;
