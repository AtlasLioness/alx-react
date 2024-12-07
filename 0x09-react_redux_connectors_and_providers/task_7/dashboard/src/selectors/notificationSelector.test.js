import { Map, fromJS } from "immutable";

import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from "./notificationSelector";

import notificationReducer, {
  initialNotificationState,
} from "../reducers/notificationReducer";

import notificationsNormalizer from "../schema/notifications";

describe("Selectors tests", function () {
  it("test that filterTypeSelected works as expected", function () {
    const state = notificationReducer(undefined, {});

    const selected = filterTypeSelected(state);

    expect(selected).toEqual(initialNotificationState.filter);
  });

  it("test that getNotifications returns a list of the message entities within the reducer", function () {
    const initialState = {
      filter: "DEFAULT",

