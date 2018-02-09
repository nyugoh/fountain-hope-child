import {KID_ADDED} from "../types";
import api from '../store/api';

const kidAdded = (kid) => ({
  type: KID_ADDED,
  payload: kid
});

export const addKid = (kid) => (dispatch) => {
  console.log(kid);
  kid.fullName = `${kid.sirName} ${kid.firstName} ${kid.middleName}`;
  console.log(kid);
  api.kids.add(kid).then( (kid) => {
    (kid === undefined) ? kid={}: '';
    dispatch(kidAdded(kid))
  });
};
