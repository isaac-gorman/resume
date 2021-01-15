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
            <Duration>2021 - Now</Duration>
                <Title>Designer & Software Engineer at Uno</Title>
                    <Impact>Creating animations for marketing content</Impact>
                    <Impact>Creating service calculator for prospective customers on company website</Impact>
                    <Impact>Implementing Growth Cycle </Impact>
            </ExperienceContainer>

            <ExperienceContainer>
            <Duration>2018 - 2019</Duration>
                <Title>Growth Manager & Designer at<Link href={"https://www.ridehitch.com/"} target="_blank">Hitch</Link> 
                    </Title>
                    <Impact>Implemented growth campaigns that helped grow the company’s users over 50% in the early stages of the company</Impact>
                    <Impact>Designed assets for marketing campaigns across several channels </Impact>
                    <Impact>Managed and trained a team of 15 brand ambassadors</Impact>
                    <Impact>Participated in Design Sprint with FunSize.co redesign the brand</Impact>
            </ExperienceContainer>

            <ExperienceContainer>
            <Duration>2018</Duration>
                <Title>Designer at <Link href={"http://etho.io/"} target="_blank">Etho</Link></Title>
                    <Impact>Designed wireframes for website, and low-fidelity mobile application</Impact>
                    <Impact>Conducted customer interviews for the team’s beta product</Impact>
            </ExperienceContainer>

            <ExperienceContainer>
            <Duration>2017 - 2018</Duration>
                <Title>Co-Founder & CEO at <Link href={"http://spokerepair.com/"} target="_blank">Spoke</Link></Title>
                    <Impact>Fulfilled over 200 bikes for repair at UT-Austin Campus </Impact>
                    <Impact>Developed partnerships with 4 local bikes shop for delivering and repairing bicycles</Impact>
                    <Impact>Received $1,000 in funding from Capital Factory via the Longhorn Startup Lab</Impact>
                    <Impact>Designed an app that enabled bike mechanics to track bicycle repairs via QR codes, to optimize the time spent filling out work orders</Impact>
            </ExperienceContainer>
            <ExperienceContainer>
            <Duration>2017</Duration>
                <Title>Fellow at<Link href={"https://ugs.utexas.edu/launchpad"} target="_blank">Blackstone Launchpad UT-Austin</Link></Title>
                    <Impact>Helped students connect, and collaborate to create new businesses</Impact>
                    <Impact>Connected students with resources around campus to help them launch their entrepreneurial ventures</Impact>
                    <Impact>Conducted elevator pitch workshops for students</Impact>
            </ExperienceContainer>
        </ExperienceWrap>
    )
}

export default Experience;
