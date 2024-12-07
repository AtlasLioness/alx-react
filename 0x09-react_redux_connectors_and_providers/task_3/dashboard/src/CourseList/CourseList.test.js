import { shallow } from "enzyme";
import React from "react";
import CourseList from "./CourseList";
import { StyleSheetTestUtils } from "aphrodite";

describe("<CourseList />", () => {
  let listCourses;

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("CourseList renders without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toEqual(true);
  });

