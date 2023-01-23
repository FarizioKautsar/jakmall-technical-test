import React, { forwardRef, useRef } from 'react'
import styled from 'styled-components';
import jmColors from './jmColors';
import { MdErrorOutline } from 'react-icons/md';
export const JMTextFieldContainer = styled.div`
  padding: 8px;
  border: 1px solid ${props => props.invalid ? jmColors.orange : null};
  cursor: text;
  display: flex;
  align-items: center;
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
    outline-width: 0;
  }
`;

export const JMErrorMessage = styled.span`
  color: ${jmColors.orange};
  font-size: 12px;
`;

const JMTextField = forwardRef(({
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
          <JMInput type={type} id={name} name={name} placeholder={placeholder} ref={ref} {...rest}/>
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

export default JMTextField;
