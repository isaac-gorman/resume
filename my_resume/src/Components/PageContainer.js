import React from 'react'
import styled from "styled-components";
import Intro from "./Intro"

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
`;

const CredentialsBounds = styled.div`
    height: 60%;
    width: 100%;
    background: #FFD6D6;
`;

function PageConatiner() {
    return(
        <PageWrapper>
            <InnerBounds>
             <IntroBounds>
                <Intro/>
             </IntroBounds>
        {/* Credentials */}
             <CredentialsBounds>

             </CredentialsBounds>
            </InnerBounds>
        </PageWrapper>
    )
}

export default PageConatiner;