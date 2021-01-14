import React from 'react'
import styled from "styled-components";
import Intro from "./Intro"
import Test from "./Test"
import Accordion from "./Credentials/Accordion"

const PageWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background: #FFF6F6;
    display: flex;
    // justify-content: center;
    align-items: center;
`;

const InnerBounds = styled.div`
    margin: 0px auto;
    height: 94vh;
    width: 85vw;
    background: #FFECEC;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media (min-width: 1024px) {
        flex-direction: row;
      }
`;

const IntroBounds = styled.div`
    margin: 0px auto;
    height: 32%;
    width: 100%;
    background: red;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 1024px) {
        flex-direction: row;

        height: 100%;
        width: 100%;
      }
`;

const CredentialsBounds = styled.div`
    height: 74%;
    width: 100%;
    background: green;

    overflow: hidden;
    overflow-y: scroll;

    @media (min-width: 1024px) {
        flex-direction: row;

        height: 100%;
        width: 100%;
        background: #56CCF2;
      }
`;

function PageConatiner() {
    return(
        <PageWrapper>
            <InnerBounds>
             <IntroBounds>
                <Intro/>
             </IntroBounds>
             <CredentialsBounds>
                <Accordion title="About" content={<Intro/>} />
                <Accordion title="About" content={<Intro/>} />
                <Accordion title="Test" content={<Test/>} />
                <Accordion title="About" content={<Intro/>} />
                <Accordion title="About" content={<Intro/>} />
                <Accordion title="About" content={<Intro/>} />
             </CredentialsBounds>
            </InnerBounds>
        </PageWrapper>
    )
}

export default PageConatiner;