import cst from '../constant/filter.json';

const initialState = {
  url: '',
  fromDate: null,
  toDate: null,
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
