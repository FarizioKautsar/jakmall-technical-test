import React, { forwardRef, useRef } from 'react'
import styled from 'styled-components';
import jmColors from './jmColors';

export const JMTextFieldContainer = styled.div`
  margin-bottom: 16px;
  width: 100%;
  padding: 8px;
  border: 1px solid ${props => props.invalid ? jmColors.orange : null};
  cursor: text;
`

export const JMLabel = styled.label`
  color: ${props => props.invalid ? jmColors.orange : null};
  font-size: 16px;
  width: 100%;
  display: block;
  cursor: text;
  margin-bottom: 0;
`;

export const JMInput = styled.input`
  border: none;
  width: 100%;
  padding: 0;
  &:focus {
    border: none;
  }
  &:active {
    border: none;
  }
`;


const JMTextField = forwardRef(({
  label = '',
  name = '',
  type = 'text',
  placeholder: placeholderProp = '',
  ...rest
}, ref) => {
  const placeholder = placeholderProp || name ? `Enter ${label}` : '';
  return (
    <JMTextFieldContainer>
      <JMLabel htmlFor={name}>{label}</JMLabel>
      <JMInput type={type} id={name} name={name} placeholder={placeholder} ref={ref} {...rest}/>
    </JMTextFieldContainer>
  )
})

export default JMTextField;
