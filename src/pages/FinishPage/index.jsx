import React from 'react'
import SummaryPane from '../../components/SummaryPane'
import { generateRandomId } from '../../utils/utilsFunctions'

export default function FinishPage({
  step,
  setStep,
  isDropship,
  paymentData,
  orderId,
  setOrderId,
}) {
  const randomId = generateRandomId(5);
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '100%', display: 'grid', placeItems: 'center' }}>
        <div>
          <h1>Thank You</h1><br/>
          <span>Order ID : {randomId}</span>
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
