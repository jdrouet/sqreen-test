import cst from '../constant/stream.json';

export default {
  update: payload => ({ type: cst.UPDATE, payload }),
};
