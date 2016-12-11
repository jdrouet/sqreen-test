import { expect } from 'chai';

import action from './stream';

describe('action/stream', () => {

  it('should return the action', () => {
    const payload = { id: 1 };
    const result = action.update(payload);
    expect(result).to.property('type');
    expect(result.type).to.equal('STREAM_UPDATE');
    expect(result).to.property('payload');
    expect(result.payload).to.equal(payload);
  });
});
