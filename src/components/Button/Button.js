import React, { Component } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: ${props => (props.primary ? '#fff' : '#4a4a4a')};
  background-color: ${props => (props.primary ? '#4a90e2' : 'transparent')};
  border: ${props => (props.primary ? 'none' : '2px solid #4a90e2')};
  border-radius: 8px;
  font-family: Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.45px;
  text-align: center;
  min-width: 200px;
  padding: 13.5px 30px;
  transition: 0.15s ease-in-out;

  &:hover {
    background-color: #3f7ec7;
  }

  &:active {
    transform: scale(0.9);
  }

  &:disabled {
    background-color: #9b9b9b;
    border: 2px solid #979797;
  }
`;

class Button extends Component {
  render() {
    return (
      <StyledButton
        onMouseDown={this.props.onClick}
        disabled={this.props.disabled}
        primary={this.props.primary}
      >
        {this.props.children}
      </StyledButton>
    );
  }
}

export default Button;
