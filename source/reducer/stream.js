import cst from '../constant/stream.json';

const initialState = {
  url: null,
  events: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case cst.UPDATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
