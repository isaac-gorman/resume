import React from 'react';
import styled from "styled-components";

const ContactWrap = styled.div`
    width: 90%;
    margin-left: 14px;
    @media (min-width: 1024px) {
        margin-left: 24px;
    }
`
const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0px;
    margin-bottom: 30px;
    @media (min-width: 1024px) {
        margin-bottom: 43px;
    }

`
const ContactMethod = styled.p`
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


const Link = styled.p`
    text-decoration: underline;
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

function Contact() {
    return(
        <ContactWrap>
            <ContactContainer>
                <ContactMethod>Email</ContactMethod>
                <Link>emailme@isaacg.net</Link>
            </ContactContainer>
            <ContactContainer>
                <ContactMethod>Website</ContactMethod>
                <Link>isaacg.net</Link>
            </ContactContainer>

        </ContactWrap>
    )
}

export default Contact;
