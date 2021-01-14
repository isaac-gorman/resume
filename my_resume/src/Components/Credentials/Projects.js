import React from 'react';
import styled from "styled-components";

const ProjectsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    // height: 400px;
`;

const ProjectsContainer = styled.div`
    display: flex;
    // height: 400px;
    margin-bottom: 20px;
`;

// ----- Year ---------------------
const YearColumn = styled.div`
    height: 100%;
    width: 20%;
    background-color: lightgreen;
    // display: flex;
    // justify-content: start;
    // align-items: start;
`;

const Year = styled.p`
    margin-top: 0px;
    font-family: 'light';
    font-weight: normal;
    color: #828282;
    font-size: 14px;
    text-align: left;

    @media (min-width: 1024px) {
        font-size: 16px;
    }
`;
// ----- Year ---------------------

const ProjectInfo = styled.div`
    height: 100%;
    width: 80%;
    background-color: lightblue;
    display: flex;
    flex-direction: column;
`;

const ProjectNameLink = styled.a`
    text-decoration: none;
    font-family: 'light';
    font-weight: normal;
    color: #828282;
    font-size: 14px;
    text-align: left;
    @media (min-width: 1024px) {
        font-size: 16px;
    }
`;

const ProjectDescription = styled.p`
    font-family: 'light';
    font-weight: normal;
    color: #828282;
    font-size: 14px;
    text-align: left;

    @media (min-width: 1024px) {
        font-size: 16px;
    }
`;
function Projects() {
    return(
        <ProjectsWrapper>
            <ProjectsContainer>
                <YearColumn>
                    <Year>2020</Year>
                </YearColumn>
                <ProjectInfo>
                        <ProjectNameLink href={"https://www.google.com"} target="_blank" >kin cook</ProjectNameLink>
                        <ProjectDescription>Easiest way to maintain tradition through the dishes you love.</ProjectDescription>
                </ProjectInfo>
            </ProjectsContainer>

            <ProjectsContainer>
                <YearColumn>
                    <Year>2020</Year>
                </YearColumn>
                <ProjectInfo>
                        <ProjectNameLink>kin cook</ProjectNameLink>
                        <ProjectDescription>Easiest way to maintain tradition through the dishes you love.</ProjectDescription>
                </ProjectInfo>
            </ProjectsContainer>

            <ProjectsContainer>
                <YearColumn>
                    <Year>2020</Year>
                </YearColumn>
                <ProjectInfo>
                        <ProjectNameLink>kin cook</ProjectNameLink>
                        <ProjectDescription>Easiest way to maintain tradition through the dishes you love.</ProjectDescription>
                </ProjectInfo>
            </ProjectsContainer>

        </ProjectsWrapper>
    )
}
export default Projects;