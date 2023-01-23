import React from 'react'
import styled from 'styled-components';
import { JMButton } from '.';
import { DROPSHIPPING_FEE, EXPEDITIONS, EXPEDITIONS_FEES, PAYMENTS, PAYMENTS_BALANCE, STEPS } from '../global/constants'
import { EXPEDITIONS_TEXTS, PAYMENTS_TEXTS } from '../global/enums';
import jmColors from './jmColors';

const SummaryCostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`

const SummaryDeliveryPaymentText = styled.p`
  font-size: 16px;
  color: ${jmColors.green};
  margin: 0;
`

export default function SummaryPane({
  shipmentExpedition,
  paymentMethod,
  items = [
    { id: "123", price: 5000, amount: 10 }
  ],
  isDropship = false,
  step = STEPS.DELIVERY,
  disableNextButton = false,
  onNextButtonClick = () => {}
}) {
  const shipmentFee = EXPEDITIONS_FEES[shipmentExpedition] || 0;
  const totalCostOfGoods = items
    .reduce(
      (a, b) => (a.price || 0 * a.amount || 0) + (b.price * b.amount), 0
    );
  const totalCost = totalCostOfGoods + (isDropship ? DROPSHIPPING_FEE : 0) + shipmentFee;

  return (
    <div style={{
      position: 'relative',
      minHeight: '520px',
      width: '100%'
    }}>
      <h2>
        Summary
      </h2>
      <p>
        10 items purchased
      </p>
      {
        shipmentExpedition && (
          <div style={{ marginBottom: 30 }}>
            <b>Delivery Estimation</b>
            <SummaryDeliveryPaymentText>
              today by {EXPEDITIONS_TEXTS[shipmentExpedition]}
            </SummaryDeliveryPaymentText>
          </div>
        )
      }
      {
        paymentMethod && (
          <div>
            <b>Payment Method</b>
            <SummaryDeliveryPaymentText>
              {PAYMENTS_TEXTS[paymentMethod]}
            </SummaryDeliveryPaymentText>
          </div>
        )
      }
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
        {
          isDropship && (
            <SummaryCostContainer>
              Dropshipping Fee
              <b>
                {DROPSHIPPING_FEE}
              </b>
            </SummaryCostContainer>
          )
        }
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
        {
          step !== STEPS.FINISH && (
            <JMButton 
              onClick={onNextButtonClick}
              disabled={disableNextButton}
            >
              {
                step === STEPS.PAYMENT ? "Continue to Payment" : `Pay with ${PAYMENTS_TEXTS[paymentMethod]}`
              }
            </JMButton>
          )
        }
      </div>
    </div>
  )
}
