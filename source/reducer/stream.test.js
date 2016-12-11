import { expect } from 'chai';
import reducer from './stream';

describe('reducer/stream', () => {

  describe('update action', () => {

    it('should update the url', () => {
      const state = { url: '', events: [] };
      const action = { type: 'STREAM_UPDATE', payload: { url: 'http://google.com' } };
      expect(reducer(state, action)).to.eql({
        url: 'http://google.com',
        events: [],
      });
    });

    it('should update the events', () => {
      const state = { url: '', events: [] };
      const action = { type: 'STREAM_UPDATE', payload: { events: [1, 2] } };
      expect(reducer(state, action)).to.eql({
        url: '',
        events: [1, 2],
      });
    });

  });

});
