import React from 'react'
import styled from "styled-components";
import Intro from "./Intro"
import Accordion from "./Credentials/Accordion"

const PageWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background: #FFF6F6;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const InnerBounds = styled.div`
    margin: 0px auto;
    height: 85vh;
    width: 85vw;
    background: #FFECEC;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 1024px) {
        flex-direction: row;
      }
`;

const IntroBounds = styled.div`
    margin: 0px auto;
    height: 35%;
    width: 100%;
    background: #FFD6D6;

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
    height: 60%;
    width: 100%;
    background: #56CCF2;

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
             </CredentialsBounds>
            </InnerBounds>
        </PageWrapper>
    )
}

export default PageConatiner;