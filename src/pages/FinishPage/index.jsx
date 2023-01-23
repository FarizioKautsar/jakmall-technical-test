import React from 'react'
import { MdArrowBack } from 'react-icons/md'
import styled from 'styled-components'
import jmColors from '../../components/jmColors'
import SummaryPane from '../../components/SummaryPane'
import { EXPEDITION_ESTIMATES, STEPS } from '../../global/constants'
import { EXPEDITIONS_TEXTS } from '../../global/enums'
import { generateRandomId } from '../../utils/utilsFunctions'

const BackToHomepageButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  gap: 16px;
  cursor: pointer;
`

export default function FinishPage({
  step,
  setStep,
  isDropship,
  paymentData,
  orderId,
  setOrderId,
}) {
  if (!orderId) {
    setOrderId(generateRandomId())
  }

  function handleBackToHomepage() {
    localStorage.clear()
    setStep(STEPS.DELIVERY)
  }

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '100%', display: 'grid', placeItems: 'center' }}>
        <div>
          <h1>Thank You</h1><br/>
          <p style={{ marginBottom: 16 }}>Order ID : {orderId}</p>
          <p style={{ color: jmColors.lightWhite2, marginBottom: 30 }}>Your order will be delivered {EXPEDITION_ESTIMATES[paymentData?.expedition]} with {EXPEDITIONS_TEXTS[paymentData?.expedition]}</p>
          <BackToHomepageButton onClick={handleBackToHomepage}>
            <MdArrowBack/>
            Go to Homepage
          </BackToHomepageButton>
        </div>
      </div>
      <div style={{ width: "50%" }}>
        <SummaryPane
          step={step}
          setStep={setStep}
          isDropship={isDropship}
          shipmentExpedition={paymentData?.expedition}
          paymentMethod={paymentData?.method}
        />
      </div>
    </div>
  )
}
