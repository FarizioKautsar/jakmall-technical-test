import React, { forwardRef } from 'react'
import { MdErrorOutline } from 'react-icons/md';
import styled from 'styled-components';
import jmColors from './jmColors';
import { JMErrorMessage, JMLabel, JMTextFieldContainer } from './JMTextField';

export const JMTextAreaInput = styled.textarea`
  border: none;
  padding: 0;
  width: 100%;
  background: none;
  font-family: 'Inter';
  &:focus {
    outline-width: 0;
  }
`;

const JMTextArea = forwardRef(({
  label = '',
  name = '',
  type = 'text',
  placeholder: placeholderProp = '',
  error = null,
  errors = {},
  ...rest
}, ref) => {
  const placeholder = placeholderProp || name ? `Enter ${label}` : '';
  const errorMessage = errors?.[name]?.message || error?.message;

  return (
    <div style={{ marginBottom: 16 }}>
      <JMTextFieldContainer invalid={Boolean(errorMessage)}>
        <div style={{ width: '100%' }}>
          <JMLabel invalid={Boolean(errorMessage)} htmlFor={name}>{label}</JMLabel>
          <JMTextAreaInput type={type} id={name} name={name} placeholder={placeholder} ref={ref} {...rest}/>
        </div>
        {
          errorMessage && <MdErrorOutline color={jmColors.orange} size={24}/>
        }
      </JMTextFieldContainer>
      {
        errorMessage ? (
          <JMErrorMessage>{errorMessage}</JMErrorMessage>
        ) : null
      }
    </div>
  )
})

export default JMTextArea;
