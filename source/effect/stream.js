import axios from 'axios';
import action from '../action/stream';

const fetch = url => (dispatch) => {
  dispatch(action.update({ url }));
  return axios
    .get(url)
    .then(res => dispatch(action.update({ events: res.data })));
};

export default {
  fetch,
};
