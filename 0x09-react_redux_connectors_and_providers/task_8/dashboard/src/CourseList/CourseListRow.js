import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const rowStyles = { backgroundColor: "#f5f5f5ab" };
const headerRowStyles = { backgroundColor: "#deb5b545" };

function CourseListRow({
  id,
  isHeader,
  textFirstCell,
  textSecondCell,
  isChecked,
  onChangeRow,
}) {
  const handleCheckbox = () => {
    onChangeRow(id, !isChecked);
  };

  let element;

  const tableItemStyle = css(
    isHeader ? styles.CourseListTh : styles.CourseListTd,
    isChecked && styles.rowChecked

