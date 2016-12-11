import { expect } from 'chai';
import reducer from './filter';

describe('reducer/filter', () => {

  describe('update action', () => {

    it('should update the url', () => {
      const state = { url: '', fromDate: null, toDate: null };
      const action = { type: 'FILTER_UPDATE', payload: { url: 'http://google.com' } };
      expect(reducer(state, action)).to.eql({
        url: 'http://google.com',
        fromDate: null,
        toDate: null,
      });
    });

    it('should update the from date', () => {
      const state = { url: '', fromDate: null, toDate: null };
      const date = new Date();
      const action = { type: 'FILTER_UPDATE', payload: { fromDate: date  } };
      expect(reducer(state, action)).to.eql({
        url: '',
        fromDate: date,
        toDate: null,
      });
    });

    it('should update the to date', () => {
      const state = { url: '', fromDate: null, toDate: null };
      const date = new Date();
      const action = { type: 'FILTER_UPDATE', payload: { toDate: date  } };
      expect(reducer(state, action)).to.eql({
        url: '',
        fromDate: null,
        toDate: date,
      });
    });

  });

});
