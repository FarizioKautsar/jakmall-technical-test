import React, { forwardRef } from 'react'
import styled from 'styled-components';
import { JMLabel, JMTextFieldContainer } from './JMTextField';

export const JMTextAreaInput = styled.textarea`
  border: none;
  padding: 0;
  width: 100%;
  background: none;
  &:focus {
    border: none;
  }
  &:active {
    border: none;
  }
`;

const JMTextArea = forwardRef(({
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
      <JMTextAreaInput type={type} id={name} name={name} placeholder={placeholder} ref={ref} {...rest}/>
    </JMTextFieldContainer>
  )
})

export default JMTextArea;
