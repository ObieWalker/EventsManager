import { createStore } from 'redux';
import { expect } from 'chai';
import rootReducer from '../../src/reducers/rootReducer';
import allCentersReducer from '../../src/reducers/allCentersReducer';

describe('root reducer', () => {
  it('creates a store', () => {
    const store = createStore(rootReducer);
    expect(store.getState()
      .allCenters).to.equal(allCentersReducer(undefined, {}));
  });
});
