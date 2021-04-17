import React from 'react';
import styled from "styled-components";

const SkillsWrap = styled.div`
    width: 90%;
    margin-left: 14px;
    @media (min-width: 1024px) {
        margin-left: 24px;
    }
`
const SkillContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0px;
    margin-bottom: 30px;
    @media (min-width: 1024px) {
        margin-bottom: 43px;
    }

`
const SkillCategory = styled.p`
    font-family: 'medium';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #4F4F4F;
    text-align: left;
    margin-top: 0px;
    margin-bottom: 8px;
    @media (min-width: 1024px) {
        font-size: 18px;
    }

`
const Topic = styled.p`
    font-family: 'light';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #828282;
    text-align: left;
    margin-top: 0px;
    margin-bottom: 4px;
    // margin-left: 14px;
        @media (min-width: 1024px) {
        font-size: 16px;
    }
`
const Content = styled.p`
    font-family: 'book';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #4F4F4F;
    text-align: left;
    margin-top: 0px;
    // margin-bottom: 20px;
    // margin-left: 18px;
        @media (min-width: 1024px) {
        font-size: 16px;
    }
`

function Skills() {
    return(
        <SkillsWrap>
            <SkillContainer>
                <SkillCategory>Software Engineering</SkillCategory>
                    <Topic>Languages</Topic>
                    <Content>JavaScript, SQL, HTML, CSS, GraphQL, Java, Python</Content>
                    <Topic>Libraries</Topic>
                    <Content>React.js, Node.js, Express</Content>
                    <Topic>State Management</Topic>
                    <Content>Redux, Apollo GraphQL</Content>
                    <Topic>Capabilities</Topic>
                    <Content>Web Applications</Content>
            </SkillContainer>

            <SkillContainer>
                <SkillCategory>Product Design</SkillCategory>
                    <Topic>Tools</Topic>
                    <Content>Figma, Sketch</Content>
                    <Topic>User Experience - UX</Topic>
                    <Content>Storyboarding, User Research Interviewing </Content>
                    <Topic>User Interaction - UI</Topic>
                    <Content>Short-Hand UI, Breadboarding, High Fidelity Wireframes</Content>
                    <Topic>Capabilities</Topic>
                    <Content>UI Design System, Prototype Interfaces</Content>
            </SkillContainer>

            <SkillContainer>
                <SkillCategory>Graphic Design / Illustration </SkillCategory>
                    <Topic>Tools</Topic>
                    <Content>Adobe Illustrator, Procreate</Content>
                    <Topic>Capabilities</Topic>
                    <Content>Illustrations, Logos, and Marketing Assets</Content>
            </SkillContainer>
        
            <SkillContainer>
                <SkillCategory>Bilingual</SkillCategory>
                    <Topic>Fluent Languages</Topic>
                    <Content>Spanish, English</Content>
                    <Topic>Capabilities</Topic>
                    <Content>Translation, Read/Write in both languages</Content>
            </SkillContainer>
        </SkillsWrap>
    )
}

export default Skills;
