import React from 'react';
import styled from "styled-components";

const ProjectsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 14px;
    @media (min-width: 1024px) {
        margin-left: 24px;
    }
`;

const ProjectsContainer = styled.div`
    display: flex;
    // height: 400px;
    margin-bottom: 30px;
    @media (min-width: 1024px) {
        margin-bottom: 43px;
    } 
`;

// ----- Year ---------------------
const YearColumn = styled.div`
    height: 100%;
    width: 20%;
    // background-color: lightgreen;
    // display: flex;
    // justify-content: start;
    // align-items: start;
`;

const Year = styled.p`
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: 'light';
    font-weight: normal;
    color: #828282;
    font-size: 14px;
    text-align: left;

    @media (min-width: 1024px) {
        font-size: 18px;
    }
`;
// ----- Year ---------------------

const ProjectInfo = styled.div`
    height: 100%;
    width: 80%;
    // background-color: lightblue;
    display: flex;
    flex-direction: column;
    
`;

const ProjectNameLink = styled.a`
    text-decoration: underline;
    font-family: 'medium';
    font-weight: normal;
    color: #4F4F4F;
    font-size: 14px;
    text-align: left;

    &:hover {
        color: #9ab8e9;
      }
      &:active {
        color: #144ba6;
      }

    @media (min-width: 1024px) {
        font-size: 20px;
    }
`;

const ProjectDescription = styled.p`
    font-family: 'book';
    font-weight: normal;
    color: #4F4F4F;
    font-size: 14px;
    text-align: left;

    margin-top: 0px;
    margin-bottom: 0px;

    @media (min-width: 1024px) {
        font-size: 18px;
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
                        <ProjectNameLink href={"https://github.com/isaac-gorman/kin-cook"} target="_blank" >kin cook ></ProjectNameLink>
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