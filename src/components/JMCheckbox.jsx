import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { JMLabel } from './JMTextField';

const JMCheckboxCheck = styled.input`

`

const JMCheckbox = forwardRef(({
  label = '',
  checked = false,
  ...rest
}, ref) => {
  return (
    <label>
      <input type="checkbox" ref={ref} {...rest}/>
      {label}
    </label>
  )
})

export default JMCheckbox;
