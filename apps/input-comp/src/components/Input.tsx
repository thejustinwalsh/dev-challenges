import React, { useState, useEffect, useCallback } from 'react'
import styled, { css } from "styled-components";
import Icon from '@material-ui/core/Icon';

type InputProps = Partial<{
  label: string,
  placeholder: string,
  helperText: string,
  value: string,
  error: boolean,
  disabled: boolean,
  size: 'sm' | 'md',
  startIcon: string,
  endIcon: string,
  fullWidth: boolean,
  multiline: boolean,
  row: number,
  onChange(value: string): void,
  onButtonClick(): void,
}>;

type StyleProps = {
  error: boolean,
  height: 'sm' | 'md',
  fullWidth: boolean,
  startIcon?: string,
  endIcon?: string,
  row?: number,
}

const colors = {
  default: '#828282',
  focus: '#2962ff',
  error: '#D32f2f'
}

const Label = styled.label<StyleProps>`
  color: ${props => props.error ? colors.error : '#333333'};
  &:focus-within {
    color: ${props => props.error ? colors.error : colors.focus};
  }
  position: relative;
  .start-icon {
    position: absolute;
    bottom: -4px;
    left: 12px;
    color: #828282;
  }
  .end-icon {
    position: absolute;
    bottom: -4px;
    right: 12px;
    color: #828282;
  }
`;

const LabelText = styled.p`
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12px;
  font-weight: 400;
  margin-bottom: .2rem;
`;

const Info = styled.p<StyleProps>`
  ${Label};
  font-size: 10px;
  margin-top: .1rem;
  color: ${props => props.error ? colors.error : '#828282'};
`;

const StyledInput = styled.input<StyleProps>`
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: ${props => props.height === 'sm' ? '40px' : '56px'};
  height: ${props => props.height === 'sm' ? '40px' : '56px'};
  min-width: 200px;
  width: ${props => props.fullWidth ? '100%' : 'inherit'};
  box-sizing: border-box;
  border: 1px solid ${props => props.error ? colors.error : colors.default};
  border-radius: 8px;
  padding: 0px 12px;
  outline: none;
  &:disabled {
    background-color: #F2F2F2;
  };
  &:hover {
    border-color: #333333;
  };
  &:focus {
    border-color: ${props => props.error ? colors.error : colors.focus};
  };

  ${props => props.startIcon && css`
    padding-left: 45px;
  `};

  ${props => props.endIcon && css`
    padding-right: 45px;
  `};
`;

const StyledTextArea = styled.textarea<StyleProps>`
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  height: ${props => (props.row ? props.row : 1) * 37 + 'px'};
  min-width: 200px;
  min-height: 56px;
  width: ${props => props.fullWidth ? '100%' : 'inherit'};
  box-sizing: border-box;
  border: 1px solid ${props => props.error ? colors.error : colors.default};
  border-radius: 8px;
  padding: 17px 12px;
  outline: none;
  &:disabled {
    background-color: #F2F2F2;
  };
  &:hover {
    border-color: #333333;
  };
  &:focus {
    border-color: ${props => props.error ? colors.error : colors.focus};
  };
`;

export const Input = ({ label, placeholder, helperText, value, multiline, onChange, onButtonClick, ...props}: InputProps) => {
  const [inputVal, setInputVal] = useState<string>(value);
  
  const onChangeCallback = useCallback((value) => onChange?.(value), [onChange]);
  const onButtonClickCallback = useCallback(() => onButtonClick?.(), [onButtonClick]);
  useEffect(() => onChangeCallback(inputVal), [onChangeCallback, inputVal]);

  const { error, size, fullWidth, startIcon, endIcon, row } = props;
  const style:StyleProps = { error, height: size, fullWidth, startIcon, endIcon, row: row || 1};

  const StartIcon = startIcon ? <Icon className="start-icon" onClick={onButtonClickCallback}>{startIcon}</Icon> : null;
  const EndIcon = endIcon ? <Icon className="end-icon" onClick={onButtonClickCallback}>{endIcon}</Icon> : null;
  const StyledTextInput = multiline ?
    <StyledTextArea id="input" value={inputVal} placeholder={placeholder} onChange={(e) => setInputVal(e.target.value)} disabled={props.disabled} {...style} /> :
    <StyledInput id="input" type="text" value={inputVal} placeholder={placeholder} onChange={(e) => setInputVal(e.target.value)} disabled={props.disabled} {...style} />;

  return (
    <>
      <Label htmlFor="input" {...style}>
        <LabelText>{label}</LabelText>
          {StyledTextInput}
          {StartIcon}
          {EndIcon}
      </Label>
      <Info {...style}>{helperText}</Info>     
    </>
  );
}
