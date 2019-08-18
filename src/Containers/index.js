import { connect } from "react-redux";
import App from "../Components";
import { recProfiles, reqProfiles } from "../profileReducer";
import { bindActionCreators } from "redux";

function mapStateToProps({ profiles: { profile, loading } }) {
  console.log(profile);
  debugger;
  return { profile, loading };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      recProfiles,
      reqProfiles
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
