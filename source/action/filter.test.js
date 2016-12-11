import { expect } from 'chai';

import action from './filter';

describe('action/filter', () => {

  it('should return the action', () => {
    const payload = { id: 1 };
    const result = action.update(payload);
    expect(result).to.property('type');
    expect(result.type).to.equal('FILTER_UPDATE');
    expect(result).to.property('payload');
    expect(result.payload).to.equal(payload);
  });
});
