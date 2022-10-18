import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/**
 * Component for displaying when there is no data provided
 */
const Empty = ({ text }) => <Container>{text}</Container>;

Empty.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Empty;
