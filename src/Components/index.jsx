import Card from "../Containers/Card";
import React, { Component } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import styled from "styled-components";
import { isEmpty } from "lodash";
var clearbit = require("clearbit")("sk_01bfcfe5af53f2bb4436cafbf35341b9");

const AppDiv = styled.div`
  background: #e1e1e0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DownloadDiv = styled.div`
  margin-top: 20px;
`;

const DownloadButton = styled.button`
  border: 2px solid #1a1d26;
  border-radius: 6px;
  padding: 5px;
  font-size: 18px;
  text-transform: uppercase;
  :hover {
    background: #1a1d26;
    color: white;
  }
`;

class App extends Component {
  componentDidMount() {
    const { reqProfiles } = this.props;
    reqProfiles();
    this.fetchProfiles();
  }

  fetchProfiles = () => {
    const { recProfiles } = this.props;
    clearbit.Prospector.search({
      domain: "www.twitter.com",
      role: "marketing"
    })
      .then(people => {
        recProfiles({ profiles: people.results });
      })
      .catch(function(err) {
        console.error(err);
      });
  };

  exportPDFWithComponent = () => {
    this.pdfExportComponent.save();
  };

  render() {
    const { loading, profile } = this.props;
    return (
      <AppDiv>
        {loading && "Loading"}
        {!loading &&
          !isEmpty(profile) && (
            <React.Fragment>
              <PDFExport
                fileName="Signature"
                ref={component => (this.pdfExportComponent = component)}
              >
                <Card id="signature" />
              </PDFExport>
              <DownloadDiv>
                <DownloadButton onClick={this.exportPDFWithComponent}>
                  Download Signature
                </DownloadButton>
              </DownloadDiv>
            </React.Fragment>
          )}
      </AppDiv>
    );
  }
}

export default App;
