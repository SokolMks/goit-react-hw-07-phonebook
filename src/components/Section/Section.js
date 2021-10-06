import React from "react";
import PropTypes from "prop-types";
import style from "./Section.module.css";

const Section = ({ children }) => <div className={style.section}>{children}</div>;

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;