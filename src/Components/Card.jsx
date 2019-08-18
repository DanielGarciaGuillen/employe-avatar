import React from "react";
import styled from "styled-components";
import { capitalize } from "lodash";
import logo from "../logo.png";

const phoneNumber = "613-299-2323";
const fax = "9591-23123";

const CardDiv = styled.div`
  background: white;
  width: 490px;
  height: 220px;
  border-radius: 3px;
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "companyLogo employeName"
    "companyLogo personalInfo";
  place-items: center;
  grid-column-gap: 10px;
  grid-row-gap: 15px;
`;

const LogoImage = styled.img`
  border-radius: 3px;
  grid-area: companyLogo;
  height: 75%;
`;

const EmployeInfo = styled.div`
  grid-area: employeName;
  display: flex;
  flex-direction: column;
  place-self: baseline;
  align-self: flex-end;
`;

const Name = styled.h2`
  font-size: 32px;
`;

const JobTitle = styled.p`
  margin-top: -32px;
  font-weight: 500;
  margin-left: 19px;
`;

const ContactInfo = styled.div`
  grid-area: personalInfo;
  justify-self: flex-start;
  margin: 12px 0px 0px 0px;
  align-self: baseline;
  font-size: 17px;
`;

const ContactItem = styled.div`
  display: flex;
  font-weight: 500;
`;

const InfoKey = styled.div`
  width: 65px;
`;

const Card = ({ profile }) => {
  const { email, name: { fullName }, title } = profile;
  return (
    <CardDiv id="signature">
      <LogoImage src={logo} />
      <EmployeInfo>
        <Name> {fullName}</Name>
        <JobTitle>{capitalize(title)}</JobTitle>
      </EmployeInfo>

      <ContactInfo>
        <ContactItem>
          <InfoKey>
            <b>Phone:</b>
          </InfoKey>
          <div>{phoneNumber}</div>
        </ContactItem>
        <ContactItem>
          <InfoKey>
            <b>Fax:</b>
          </InfoKey>
          {fax}
        </ContactItem>
        <ContactItem>
          <InfoKey>
            <b>Email:</b>
          </InfoKey>{" "}
          <a href={`mailto:${email}`}>{email}</a>
        </ContactItem>
      </ContactInfo>
    </CardDiv>
  );
};

export default Card;
