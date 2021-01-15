import React from 'react';
import styled from "styled-components";

const EducationWrap = styled.div`
    width: 90%;
    // margin-left: 14px;
    @media (min-width: 1024px) {
        // margin-left: 24px;
    }
`
const EducationContainer = styled.div`
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
function Education() {
    return(
        <EducationWrap>
            <EducationContainer>
            <Duration>2021 - Now</Duration>
                <Title>Alamo Colleges - San Antonio, Texas</Title>
                    <Impact>Associates of Science anticipated double majors in Computer Science and Engineering</Impact>
            </EducationContainer>

            <EducationContainer>
            <Duration>2019 - 2020</Duration>
                <Title>Lambda School - Remote </Title>
                    <Impact>Completed Program for UX Design and Full Stack Web Development</Impact>
            </EducationContainer>

            <EducationContainer>
            <Duration>2016 - 2018</Duration>
                <Title>University of Texas at Austin - Austin, Texas</Title>
                    <Impact>Pursued degree in Communication and Leadership. Withdrew to pursue work experience</Impact>
            </EducationContainer>
        </EducationWrap>
    )
}

export default Education;
