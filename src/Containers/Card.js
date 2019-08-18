import { connect } from "react-redux";
import Card from "../Components/Card";
import { recProfiles, reqProfiles } from "../profileReducer";
import { bindActionCreators } from "redux";

function mapStateToProps({ profiles: { profile } }) {
  return { profile };
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

export default connect(mapStateToProps, mapDispatchToProps)(Card);
