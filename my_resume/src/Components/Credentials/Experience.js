import React from 'react';
import styled from "styled-components";

const ExperienceWrap = styled.div`
    width: 90%;
    // margin-left: 14px;
    @media (min-width: 1024px) {
        // margin-left: 24px;
    }
`
const ExperienceContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0px;
    margin-bottom: 30px;
    @media (min-width: 1024px) {
        margin-bottom: 43px;
    }

`
const Duration = styled.p`
    font-family: 'light';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #828282;
    text-align: left;
    margin-top: 0px;
    margin-bottom: 6px;
        @media (min-width: 1024px) {
        font-size: 16px;
    }
`
const Title = styled.p`
    font-family: 'medium';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #4F4F4F;
    text-align: left;
    margin-top: 0px;
    margin-bottom: 8px;
    margin-left: 14px;
    @media (min-width: 1024px) {
        font-size: 18px;
    }

`
const Impact = styled.p`
    font-family: 'book';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #4F4F4F;
    text-align: left;
    margin-top: 0px;
    margin-bottom: 20px;
    margin-left: 18px;
        @media (min-width: 1024px) {
        font-size: 16px;
    }
`
const Link = styled.a`
    // text-decoration: none;
    font-family: 'light';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #4F4F4F;
    text-align: left;
    margin-top: 0px;
    margin-bottom: 8px;
    margin-right: 4px;
    margin-left: 4px;
    &:hover {
        color: #9ab8e9;
      }
      &:active {
        color: #144ba6;
      }
    @media (min-width: 1024px) {
        font-size: 18px;
    }
`

function Experience() {
    return(
        <ExperienceWrap>
            <ExperienceContainer>
            <Duration>2018 - 2019</Duration>
                <Title>Growth Manager & Designer at<Link  rel="noreferrer" href={"https://www.ridehitch.com/"} target="_blank">Hitch</Link> 
                    </Title>
                    <Impact>Hitch connects riders and drivers headed to the same city. While at Hitch, I wore many hats, and my work included: </Impact>
                    <Impact>Implementing growth campaigns that helped grow the company’s users by over 50% in the early stages of the company.</Impact>
                    <Impact>Designed assets for marketing campaigns across several channels.</Impact>
                    <Impact>Managed and trained a team of 16 brand ambassadors.</Impact>
                    <Impact>Worked with the Hitch team to <Link  rel="noreferrer" href={"https://www.figma.com/file/B0UkdOFq8F80XyWeNJl4wY/Hitch-Brand-Sprint-FunSize.co?node-id=1533%3A389"} target="_blank">FunSize.co</Link>to redesign the brand and mobile app.</Impact>
            </ExperienceContainer>

            <ExperienceContainer>
            <Duration>2018</Duration>
                <Title>Designer at <Link  rel="noreferrer" href={"http://etho.io/"} target="_blank">Etho</Link></Title>
                    <Impact>Etho.io is the all-in-one augmented reality voice command assistant for motorcycle riders. While at Etho I focused mostly on redesigning the website and mobile app. My work included: </Impact>
                    <Impact>Designing wireframes for our website, and low-fidelity mock-ups for our mobile application.</Impact>
                    <Impact>Conducting customer interviews for the team’s beta product.</Impact>
            </ExperienceContainer>

            <ExperienceContainer>
            <Duration>2017 - 2018</Duration>
                <Title>Co-Founder & CEO at <Link  rel="noreferrer" href={"http://spokerepair.com/"} target="_blank">Spoke</Link></Title>
                    <Impact>Spoke was an on-demand bicycle pickup & repair service I founded as a student at UT-Austin. Some of the milestones of the business are as follows:</Impact>
                    <Impact>Fulfilled over 200 bikes for repair at UT-Austin Campus. </Impact>
                    <Impact>Developed partnerships with 4 local bikes shop for delivering and repairing bicycles.</Impact>
                    <Impact>Received $1,000 in funding from Capital Factory via the Longhorn Startup Lab.</Impact>
                    <Impact>Designed an app that enabled bike mechanics to track bicycle repairs via QR codes, to optimize the time spent filling out work orders.</Impact>
            </ExperienceContainer>
            <ExperienceContainer>
            <Duration>2017</Duration>
                <Title>Fellow at<Link  rel="noreferrer" href={"https://ugs.utexas.edu/launchpad"} target="_blank">Blackstone Launchpad UT-Austin</Link></Title>
                    <Impact>The LaunchPad is a program that helps students of all backgrounds navigate and explore entrepreneurship at UT. My responsibilities were as follows:</Impact>
                    <Impact>Helped students connect, and collaborate to create new businesses.</Impact>
                    <Impact>Connected students with resources around campus to help them launch their entrepreneurial ventures.</Impact>
                    <Impact>Conducted elevator pitch workshops for students.</Impact>
            </ExperienceContainer>
        </ExperienceWrap>
    )
}

export default Experience;
