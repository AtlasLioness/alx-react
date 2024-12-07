import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from "./uiActionTypes";

import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
  loginSuccess,
  loginFailure,
} from "./uiActionCreators";

import fetchMock from "fetch-mock";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("action creators tests", function () {
  it("returns correct action for login", function () {
    const user = { email: "larry@gmail.com", password: 123456789 };

    const expectedReturn = { type: LOGIN, user };

