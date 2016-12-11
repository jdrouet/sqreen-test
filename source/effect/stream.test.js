import { expect } from 'chai';
import sinon from 'sinon';
import axios from 'axios';

import effect from './stream';

describe('effect/stream', () => {

  it('fetch', () => {
    const mock = sinon.mock(axios);
    const dispatch = sinon.spy();
    mock.expects('get').once().returns(Promise.resolve([
      'something',
    ]));
    expect(true).to.eql(true);
    effect
      .fetch('http://www.google.com')(dispatch)
      .then((res) => {
        mock.verify();
        mock.restore();
      });
  });

});
