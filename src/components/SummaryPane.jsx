import React from 'react'
import styled from 'styled-components';
import { JMButton } from '.';
import { EXPEDITIONS, EXPEDITIONS_FEES, PAYMENTS, PAYMENTS_BALANCE, STEPS } from '../global/constants'
import { EXPEDITIONS_TEXTS } from '../global/enums';

const SummaryCostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`

export default function SummaryPane({
  shipmentExpedition = EXPEDITIONS.GO_SEND,
  paymentMethod = PAYMENTS.E_WALLET,
  items = [
    { id: "123", price: 5000, amount: 10 }
  ],
  isDropship = false,
  dropshipFee = 5900,
  step = STEPS.DELIVERY,
  setStep = () => {}
}) {
  const shipmentFee = EXPEDITIONS_FEES[shipmentExpedition];
  const totalCostOfGoods = items
    .reduce(
      (a, b) => (a.price || 0 * a.amount || 0) + (b.price * b.amount), 0
    );
  const totalCost = totalCostOfGoods + dropshipFee + shipmentFee;

  function handleButtonClick() {
    setStep(
      step === STEPS.DELIVERY 
        ? STEPS.PAYMENT : step === STEPS.PAYMENT 
        ? STEPS.FINISH : STEPS.FINISH
    )
  }

  return (
    <div style={{
      position: 'relative',
      minHeight: '400px',
      width: '100%'
    }}>
      <h2>
        Summary
      </h2>
      <p>
        10 items purchased
      </p>
      <div>
        <b>Delivery Estimation</b>
      </div>
      <div style={{
        position: 'absolute',
        bottom: 0,
        width: '100%'
      }}>
        <SummaryCostContainer>
          Cost of Goods
          <b>
            {totalCostOfGoods}
          </b>
        </SummaryCostContainer>
        <SummaryCostContainer>
          Dropshipping Fee
          <b>
            {dropshipFee}
          </b>
        </SummaryCostContainer>
        <SummaryCostContainer>
          <div>
            <b>{EXPEDITIONS_TEXTS[shipmentExpedition]}</b> shipment
          </div>
          <b>
            {EXPEDITIONS_FEES[shipmentExpedition]}
          </b>
        </SummaryCostContainer>
        <div style={{ marginTop: 16 }}>
          <SummaryCostContainer>
            <h2>Total</h2>
            <h2>{totalCost}</h2>
          </SummaryCostContainer>
        </div>
        <JMButton onClick={handleButtonClick}>
          Continue to Payment
        </JMButton>
      </div>
    </div>
  )
}
