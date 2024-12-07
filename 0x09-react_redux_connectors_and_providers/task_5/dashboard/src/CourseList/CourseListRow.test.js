import { shallow } from "enzyme";
import React from "react";
import CourseListRow from "./CourseListRow";
import { StyleSheetTestUtils } from "aphrodite";

describe("<CourseListRow />", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it("CourseListRow renders without crashing", () => {
    const wrapper = shallow(<CourseListRow textFirstCell="test" />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("When isHeader is true renders one cell with colspan = 2 when textSecondCell does not exist", () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="test" />
    );
    wrapper.update();
    const item = wrapper.find("th");

