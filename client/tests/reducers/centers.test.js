/*eslint-disable */
import expect from 'expect';
import getCentersReducer from '../../src/reducers/allCentersReducer';
import createCenterReducer from '../../src/reducers/createCenterReducer';
import deleteCenterReducer from '../../src/reducers/deleteCenterReducer';
import updateCenterReducer from '../../src/reducers/updateCenterReducer';
import getACenterReducer from '../../src/reducers/getACenterReducer';
import * as types from '../../src/actions/actionTypes';
import { centers } from '../__mocks__/centerData';

describe('Get Centers', () => {
  const initialState = {
    isCentersFetching: false,
    fetchedCenters: [],
    allCentersError: '',
    moreCenters: true
  };
  const state = {
    fetchedCenters: [],
    moreCenters: true
  };
  it('should return the initial state', () => {
    expect(getCentersReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle IS_CENTERS_FETCHING', () => {
    const gettingCenters = {
      type: types.IS_CENTERS_FETCHING,
      bool: true
    };
    expect(getCentersReducer({}, gettingCenters)).toEqual({
      isCentersFetching: true
    });
  });

  it('should handle FETCH_CENTERS_SUCCESS', () => {
    const getCentersSuccess = {
      type: types.FETCH_CENTERS_SUCCESS,
      centers
    };
    expect(getCentersReducer(state, getCentersSuccess)).toEqual({
      fetchedCenters: [centers],
      moreCenters: true
    });
  });

  it('should handle FETCH_CENTERS_FAILURE', () => {
    const getCentersError = {
      type: types.FETCH_CENTERS_FAILURE,
      error: true
    };
    expect(getCentersReducer({}, getCentersError)).toEqual({
      allCentersError: true,
      moreCenters: false
    });
  });

  it('should handle CLEAR_CENTER_STATE', () => {
    const clearCenterState = {
      type: types.CLEAR_CENTER_STATE,
      empty: {}
    };
    expect(getCentersReducer({}, clearCenterState)).toEqual({
      fetchedCenters: {},
      moreCenters: true
    });
  });
});

describe('Create Center', () => {
  const initialState = {
    isCenterCreating: false,
    createCenterError: '',
    createCenterSuccess: ''
  };
  it('should return the initial state', () => {
    expect(createCenterReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle IS_CENTER_CREATING', () => {
    const creatingCenter = {
      type: types.IS_CENTER_CREATING,
      bool: true
    };
    expect(createCenterReducer({}, creatingCenter)).toEqual({
      isCenterCreating: true
    });
  });

  it('should handle CREATE_CENTER_SUCCESS', () => {
    const createCenterSuccess = {
      type: types.CREATE_CENTER_SUCCESS,
      message: 'success'
    };
    expect(createCenterReducer({}, createCenterSuccess)).toEqual({
      createCenterSuccess: 'success'
    });
  });

  it('should handle CREATE_CENTER_FAILURE', () => {
    const createCenterFailure = {
      type: types.CREATE_CENTER_FAILURE,
      error: 'failure'
    };
    expect(createCenterReducer({}, createCenterFailure)).toEqual({
      createCenterError: 'failure'
    });
  });
});

describe('Update Center', () => {
  const initialState = {
    isCenterUpdating: false,
    updateCenterError: '',
    updateCenterSuccess: ''
  };
  it('should return the initial state', () => {
    expect(updateCenterReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle IS_CENTER_UPDATING', () => {
    const updatingCenter = {
      type: types.IS_CENTER_UPDATING,
      bool: true
    };
    expect(updateCenterReducer({}, updatingCenter)).toEqual({
      isCenterUpdating: true
    });
  });

  it('should handle UPDATE_CENTER_SUCCESS', () => {
    const updateCenterSuccess = {
      type: types.UPDATE_CENTER_SUCCESS,
      message: 'success'
    };
    expect(updateCenterReducer({}, updateCenterSuccess)).toEqual({
      updateCenterSuccess: 'success'
    });
  });

  it('should handle UPDATE_CENTER_FAILURE', () => {
    const updateCenterFailure = {
      type: types.UPDATE_CENTER_FAILURE,
      error: 'failure'
    };
    expect(updateCenterReducer({}, updateCenterFailure)).toEqual({
      updateCenterError: 'failure'
    });
  });
});

describe('Delete Center', () => {
  const initialState = {
    isCenterDeleting: false,
    deleteCenterSuccess: '',
    deleteCenterError: ''
  };
  it('should return the initial state', () => {
    expect(deleteCenterReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle IS_CENTER_DELETING', () => {
    const deletingCenter = {
      type: types.IS_CENTER_DELETING,
      bool: true
    };
    expect(deleteCenterReducer({}, deletingCenter)).toEqual({
      isCenterDeleting: true
    });
  });
  it('should handle DELETE_CENTER_SUCCESS', () => {
    const deleteCenterSuccess = {
      type: types.DELETE_CENTER_SUCCESS,
      message: 'success'
    };
    expect(deleteCenterReducer({}, deleteCenterSuccess)).toEqual({
      deleteCenterSuccess: 'success'
    });
  });
});

describe('Get A Center', () => {
  const initialState = {
    isCenterFetching: false,
    center: {},
    centerError: ''
  };
  const center = centers.center1;
  it('should return the initial state', () => {
    expect(getACenterReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle IS_CENTER_FETCHING', () => {
    const gettingACenter = {
      type: types.IS_CENTER_FETCHING,
      bool: true
    };
    expect(getACenterReducer({}, gettingACenter)).toEqual({
      isCenterFetching: true
    });
  });

  it('should handle FETCH_CENTER_SUCCESS', () => {
    const getACenterSuccess = {
      type: types.FETCH_CENTER_SUCCESS,
      center
    };
    expect(getACenterReducer({}, getACenterSuccess)).toEqual({
      center: centers.center1
    });
  });

  it('should handle FETCH_CENTER_FAILURE', () => {
    const getACenterError = {
      type: types.FETCH_CENTER_FAILURE,
      error: true
    };
    expect(getACenterReducer({}, getACenterError)).toEqual({
      centerError: true
    });
  });
});
