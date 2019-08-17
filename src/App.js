import Card from "./Card";
import React, { Component } from "react";
import styled from "styled-components";
import { sample } from "lodash";
var clearbit = require("clearbit")("sk_01bfcfe5af53f2bb4436cafbf35341b9");

const AppDiv = styled.div`
  background: #e1e1e0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { profile: "", loading: true };
  }

  componentDidMount() {
    this.fetchProfiles();
  }

  fetchProfiles = () => {
    clearbit.Prospector.search({
      domain: "www.twitter.com",
      role: "marketing"
    })
      .then(people => {
        const profile = sample(people.results);
        this.setState({ loading: false, profile });
      })
      .catch(function(err) {
        console.error(err);
      });
  };

  render() {
    const { profile, loading } = this.state;
    console.log(profile);
    return (
      <AppDiv>
        {loading && "Loading"}
        {!loading && <Card profile={profile} />}
      </AppDiv>
    );
  }
}

export default App;
