import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { JMVerticalDivider } from '../../components';
import jmColors from '../../components/jmColors';
import { JMLabel } from '../../components/JMTextField';
import SummaryPane from '../../components/SummaryPane';
import { EXPEDITIONS, EXPEDITIONS_FEES, PAYMENTS, PAYMENTS_BALANCE, STEPS } from '../../global/constants'
import { EXPEDITIONS_TEXTS, PAYMENTS_TEXTS } from '../../global/enums';

const JMShipmentPaymentCardContainer = styled.div`
  background-color: ${jmColors.green}${props => props.selected ? "20" : "00"};
  border: 2px solid ${props => props.selected ? jmColors.green : jmColors.lightWhite3};
  padding: 12px;
  min-width: 180px;
  cursor: pointer !important;
  transition: 150ms;
`;

function ShipmentPaymentCard({
  selected = false,
  label = "",
  nominal = null,
  onClick = () => {}
}) {
  return (
    <JMShipmentPaymentCardContainer 
      selected={selected}
      onClick={onClick}
    >
      <span>{label}</span><br/>
      {
        nominal && (
          <span>
            <b>
              {nominal}
            </b>
          </span>
        )
      }
    </JMShipmentPaymentCardContainer>
  )
}

export default function PaymentPage({
  setStep = () => {},
  step,
  isDropship,
  setPaymentData,
  paymentData
}) {
  const [selectedExpedition, setSelectedExpedition] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);

  useEffect(() => {
    if (paymentData) {
      setSelectedExpedition(paymentData.expedition);
      setSelectedPayment(paymentData.method);
    }
  }, [paymentData])

  function handleExpeditionChange(exp) {
    setSelectedExpedition(exp);
  }

  function handlePaymentChange(payment) {
    setSelectedPayment(payment);
  }

  function handleNextButton() {
    setPaymentData({
      expedition: selectedExpedition,
      method: selectedPayment
    });
    setStep(STEPS.FINISH);
  }

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '100%' }}>
        <h1>Shipment</h1>
        <div style={{
          display: 'flex',
          gap: 10,
          marginBottom: 60
        }}>
          {
            Object.values(EXPEDITIONS).map((exp) => (
              <ShipmentPaymentCard
                selected={selectedExpedition === exp}
                onClick={() => handleExpeditionChange(exp)}
                label={EXPEDITIONS_TEXTS[exp]}
                nominal={EXPEDITIONS_FEES[exp]}
              />
            ))
          }
        </div>
        <h1>Payment</h1>
        <div style={{
          display: 'flex',
          gap: 10,
          marginBottom: 24
        }}>
          {
            Object.values(PAYMENTS).map((payment) => (
              <ShipmentPaymentCard
                selected={selectedPayment === payment}
                onClick={() => handlePaymentChange(payment)}
                label={PAYMENTS_TEXTS[payment]}
                nominal={PAYMENTS_BALANCE[payment]}
              />
            ))
          }
        </div>
      </div>
      <JMVerticalDivider/>
      <div style={{ width: "50%" }}>
        <SummaryPane
          step={step}
          setStep={setStep}
          isDropship={isDropship}
          paymentMethod={selectedPayment}
          shipmentExpedition={selectedExpedition}
          disableNextButton={!selectedExpedition && !selectedPayment}
          onNextButtonClick={handleNextButton}
        />
      </div>
    </div>
  )
}
