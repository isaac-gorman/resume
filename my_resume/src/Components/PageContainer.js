import React from 'react'
import styled from "styled-components";
import Intro from "./Intro"
import About from "./Credentials/About"
import Projects from "./Credentials/Projects"
import Test from "./Test"
import Accordion from "./Credentials/Accordion"

const PageWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    // background: #FFF6F6;
    display: flex;
    // justify-content: center;
    align-items: center;
`;

const InnerBounds = styled.div`
    margin: 0px auto;
    height: 94vh;
    width: 85vw;
    // background: #FFECEC;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }
`;

const IntroBounds = styled.div`
    margin: 0px auto;
    height: 32%;
    width: 100%;
    // background: red;

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

const LineBreak = styled.div`
    width: 100%;
    height: 0px;
    border: 0.5px solid #E2E2E2;
`;

const CredentialsBounds = styled.div`
    height: 74%;
    width: 100%;


    @media (min-width: 1024px) {
        // height: 100%;
        width: 100%;

        overflow: hidden;
        overflow-y: scroll;
      }
`;

const DesktopCredentialsBounds = styled.div`
    @media (min-width: 1024px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        // height: 600px;
        width: 80%;
        background: green;
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
                 {/* <DesktopCredentialsBounds> */}
                <LineBreak/>
                <Accordion title="About" content={<About/>} />
                <LineBreak/>
                <Accordion title="Projects" content={<Projects/>} />
                <LineBreak/>
                <Accordion title="Skills" content={<Intro/>} />
                <LineBreak/>
                <Accordion title="Experience" content={<Intro/>} />
                <LineBreak/>
                <Accordion title="Education" content={<Intro/>} />
                <LineBreak/>
                <Accordion title="Contact" content={<Test/>} />
                <LineBreak/>
                 {/* </DesktopCredentialsBounds> */}
             </CredentialsBounds>
            </InnerBounds>
        </PageWrapper>
    )
}

export default PageConatiner;