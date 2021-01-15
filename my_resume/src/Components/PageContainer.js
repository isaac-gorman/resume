import React from 'react'
import styled from "styled-components";
import Intro from "./Intro"
import About from "./Credentials/About"
import Projects from "./Credentials/Projects"
import Skills from "./Credentials/Skills"
import Experience from "./Credentials/Experience"
import Education from "./Credentials/Education"
import Contact from "./Credentials/Contact"
import Accordion from "./Credentials/Accordion"

const PageWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    // background: #FFF6F6;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 1024px) {
        // flex-direction: column;
      }
`;

const InnerBounds = styled.div`
    margin: 0px auto;
    height: 94vh;
    width: 85vw;
    // background: #FFECEC;
    display: flex;
    flex-direction: column;
    // justify-content: space-around;
    align-items: center;

    @media (min-width: 1024px) {
        flex-direction: row;
        // justify-content: center;
        // align-items: center;
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
    // align-items: center;
    @media (min-width: 1024px) {
        flex-direction: row;

        height: 80%;
        width: 50%;
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
        height: 70%;
        width: 50%;
        margin-top: 0px;
        margin-bottom: 0px;
        // background: blue;
      }
`;

const DesktopCredentialsBounds = styled.div`
    @media (min-width: 1024px) {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
`;


function PageConatiner() {
    return(
        <PageWrapper>
            <InnerBounds>
             <IntroBounds>
                <Intro/>
             </IntroBounds>
             {/* <DesktopCredentialsBounds> */}
                {/* <CredentialsHeader/> */}
                <CredentialsBounds>
                    <LineBreak/>
                    <Accordion title="About" content={<About/>} />
                    <LineBreak/>
                    <Accordion title="Projects" content={<Projects/>} />
                    <LineBreak/>
                    <Accordion title="Skills" content={<Skills/>} />
                    <LineBreak/>
                    <Accordion title="Experience" content={<Experience/>} />
                    <LineBreak/>
                    <Accordion title="Education" content={<Education/>} />
                    <LineBreak/>
                    <Accordion title="Contact" content={<Contact/>} />
                    <LineBreak/>
             </CredentialsBounds>
            </InnerBounds>
        </PageWrapper>
    )
}

export default PageConatiner;