import React, { Component } from "react";
import styled from "styled-components";
import { capitalize } from "lodash";
import logo from "./logo.png";

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

const EmployeName = styled.h2`
  grid-area: employeName;
`;

const EmployeInfo = styled.div`
  grid-area: employeName;
  display: flex;
  flex-direction: column;
  place-self: baseline;
  align-self: flex-end;
`;
const CompanyName = styled.div`
  grid-area: companyTitle;
  width: 100%;
  font-size: 32px;
  margin-left: 50px;
  color: #e1e1e0;
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

const Card = ({ profile }) => {
  console.log(profile);
  const {
    company: { name: companyName },
    email,
    role,
    name: { fullName },
    seniority,
    title
  } = profile;
  return (
    <CardDiv>
      <LogoImage src={logo} />
      <EmployeInfo>
        <Name> {fullName}</Name>
        <JobTitle>{capitalize(title)}</JobTitle>
      </EmployeInfo>

      <ContactInfo>
        <div>
          <b>Phone:</b> {phoneNumber}
        </div>
        <div>
          <b>Fax:</b> {fax}
        </div>
        <div>
          <b>Email:</b> {email}
        </div>
      </ContactInfo>
    </CardDiv>
  );
};

export default Card;