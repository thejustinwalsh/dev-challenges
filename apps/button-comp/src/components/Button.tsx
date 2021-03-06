import React from 'react';
import styled, { css } from "styled-components";
import Icon from '@material-ui/core/Icon';

type ButtonProps = {
  label?: string
  variant?: 'none' | 'outline' | 'text',
  startIcon?: string,
  endIcon?: string,
  size?: 'sm' | 'md' | 'lg',
  disableShadow?: boolean,
  disabled?: boolean,
  color?: 'default' | 'primary' | 'secondary' | 'danger',
}

const colors = {
  normal: {
    default: (a: number = 1) => `rgba(224, 224, 224, ${a})`,
    primary: (a: number = 1) => `rgba(41, 98, 255, ${a})`,
    secondary: (a: number = 1) => `rgba(69, 90, 100, ${a})`,
    danger: (a: number = 1) => `rgba(211, 47, 47, ${a})`,
  },
  hover: {
    default: (a: number = 1) => `rgba(174, 174, 174, ${a})`,
    primary: (a: number = 1) => `rgba(0, 57, 203, ${a})`,
    secondary: (a: number = 1) => `rgba(28, 49, 58, ${a})`,
    danger: (a: number = 1) => `rgba(154, 0, 7, ${a})`,
  }
}

const StyledButton = styled.button<ButtonProps>`
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 500;
  font-size: 14px;
  min-width: 81px;
  min-height: 36px;
  border-radius: 6px;
  border-style: solid;
  font-size: 18px;
  padding: 8px 16px;
  box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
  border-width: 0px;
  border-color: ${props => colors.normal[props.color || 'default']()};
  color: ${props => props.color === 'default' ? 'black' : ['outline', 'text'].includes(props.variant) ? colors.normal[props.color || 'default']() : 'white'};
  background-color: ${props => colors.normal[props.color || 'default']()};
  &:hover, &:focus {
    &:not([disabled]) {
      outline: none;
      cursor: pointer;
      background-color: ${props => colors.hover[props.color || 'default'](['outline', 'text'].includes(props.variant) ? 0.1 : 1)};
    }
  }
  &:active {
    &:not([disabled]) {
      outline: none;
      background-color: ${props => colors.hover[props.color || 'default'](.5)};
    }
  }
  &:disabled {
    box-shadow: none;
    background-color: #e0e0e0;
    border-color: #e0e0e0;
    color: #9e9e9e;
  }
  .left-icon {
      font-size: 14px;
      line-height: 16px;
      padding-right: 8px;
  }
  .right-icon {
      font-size: 14px;
      line-height: 16px;
      padding-left: 8px;
  }

  ${props => props.size === 'sm' && css`
    padding: 6px 12px;
  `};

  ${props => props.size === 'lg' && css`
    padding: 11px 22px;
  `};
  
  ${props => props.variant === 'outline' && css`
    background-color: transparent;
    border-width: 1px;
    &:disabled {
      background-color: transparent;
    }
  `}

  ${props => props.variant === 'text' && css`
    box-shadow: none;
    border-width: 0px;
    background-color: transparent;
    &:disabled {
      background-color: transparent;
    }
  `}

  ${props => props.disableShadow === true && css`
    box-shadow: none;
  `}
`;

export const Button = ({label, ...props}: ButtonProps) => {
  const startIcon = props.startIcon ? <Icon className="left-icon">{props.startIcon}</Icon> : null;
  const endIcon = props.endIcon ? <Icon className="right-icon">{props.endIcon}</Icon> : null;

  return (
    <StyledButton type="button" {...props}>
      {startIcon}{label}{endIcon}
    </StyledButton>
  );
};
