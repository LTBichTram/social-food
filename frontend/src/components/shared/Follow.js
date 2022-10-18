import React, { useState } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const Button = styled.button`
  height: 27px;
  cursor: pointer;
  outline: none;
  font-size: ${(p) => p.theme.font.size.xxs};
  font-weight: ${(p) => p.theme.font.weight.bold};
  transition: background-color 0.2s, border-color 0.1s;
  border-radius: ${(p) => p.theme.radius.sm};
  color: ${(p) => !p.isFollowing && p.theme.colors.white};
  padding: ${(p) => p.theme.spacing.xxs} ${(p) => p.theme.spacing.xs};
  border: ${(p) =>
    p.isFollowing ? `1px solid ${p.theme.colors.border.main}` : "0"};
  background-color: ${(p) =>
    p.isFollowing ? "transparent" : p.theme.colors.primary.main};

  &:hover {
    border-color: ${(p) => p.theme.colors.border.dark};
  }
`;
/**
 * Component for rendering follow button
 */
const Follow = ({ user }) => {
  const isFollowing = false;
  return (
    <Button disabled={false} isFollowing={isFollowing}>
      {isFollowing ? "Following" : "Follow"}
    </Button>
  );
};

Follow.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Follow;
