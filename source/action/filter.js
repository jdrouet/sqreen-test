import cst from '../constant/filter.json';

export default {
  update: payload => ({ type: cst.UPDATE, payload }),
};
