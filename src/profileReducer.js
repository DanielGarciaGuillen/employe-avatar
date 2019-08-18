import { createAction } from "redux-actions";
import { sample } from "lodash";

const REQ_PROFILES = "threehouse/PROFILES/req";
const REC_PROFILES = "threehouse/PROFILES/receive";

export const reqProfiles = createAction(REQ_PROFILES);
export const recProfiles = createAction(REC_PROFILES);

const INITIAL_STATE = {
  loading: false,
  profiles: [],
  profile: {}
};

export default function jobListingsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQ_PROFILES: {
      return {
        ...state,
        loading: true
      };
    }
    case REC_PROFILES: {
      const { profiles } = action.payload;
      const selectedProfile = sample(profiles);
      console.log(selectedProfile);
      debugger;
      return {
        ...state,
        profiles,
        profile: selectedProfile,
        loading: false
      };
    }
    default:
      return state;
  }
}
