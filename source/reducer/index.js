import { combineReducers } from 'redux';

import filter from './filter';
import stream from './stream';

export default combineReducers({
  filter,
  stream,
});
