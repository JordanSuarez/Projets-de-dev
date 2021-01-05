import { should } from 'chai';

import { submitLoginSuccess, submitLogoutSuccess } from 'src/common/redux/actions/auth';
import authReducer from 'src/common/redux/reducers/auth';
import '../mock-localstorage';

should();

const initialState = {
  isLogged: !!localStorage.getItem('token'),
  userId: parseInt(localStorage.getItem('userId'), 10) || null,
  hasError: false,
};

describe('auth reducer', () => {
  it('should be a function', () => {
    authReducer.should.be.a('function');
  });
  it('should return initial state', () => {
    authReducer().should.deep.equal(initialState);
  });
  it('handle action SUBMIT_LOGIN_SUCCESS', () => {
    const userId = 1;
    const action = submitLoginSuccess(userId);

    const expectedState = {
      isLogged: true,
      userId,
      hasError: false,
    };

    authReducer(initialState, action).should.deep.equal(expectedState);
  });
  it('handle action SUBMIT_LOGOUT_SUCCESS', () => {
    const action = submitLogoutSuccess();
    const expectedState = {
      ...initialState,
      isLogged: false,
    };

    authReducer(initialState, action).should.deep.equal(expectedState);
  });
});
