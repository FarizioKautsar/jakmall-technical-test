import React from 'react'
import styled from 'styled-components'
import { STEPS } from '../global/constants'
import { STEPS_TEXTS } from '../global/enums';
import jmColors from './jmColors'

const JMStepperBackground = styled.div`
  background-color: ${jmColors.lightYellow};
  padding: 20px 38px;
  border-radius: 500px;
  display: flex;
  justify-content: space-between;
`;

const JMStepperStepContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const JMStepperNumberContainer = styled.div`
  background: ${jmColors.orange};
  opacity: ${props => props.acitve? '1' : '0.2'};
  width: 30px;
  height: 30px;
  border-radius: 15px;
  display: grid;
  place-items: center;
`;

const JMStepperNumber = styled.span`
  color: white;
`;

const JMStepperText = styled.span`
  color: ${jmColors.orange};
`;

export default function JMStepper({
  steps = Object.values(STEPS),
  step: stepProp = STEPS.DELIVERY
}) {
  return (
    <JMStepperBackground>
      {
        steps.map((step, stepIdx) => (
          <JMStepperStepContainer>
            <JMStepperNumberContainer
              acitve={step === stepProp}
            >
              <JMStepperNumber>
                {stepIdx + 1}
              </JMStepperNumber>
            </JMStepperNumberContainer>
            <JMStepperText>
              {STEPS_TEXTS[step]}
            </JMStepperText>
          </JMStepperStepContainer>
        ))
      }
    </JMStepperBackground>
  )
}
