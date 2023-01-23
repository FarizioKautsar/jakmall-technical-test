import './App.css';
import { useEffect, useState } from 'react';
import { STEPS } from './global/constants';
import DeliveryPage from './pages/DeliveryPage';
import PaymentPage from './pages/PaymentPage';
import FinishPage from './pages/FinishPage';
import JMStepper from './components/JMStepper';
import { JMCard } from './components';

function App() {
  const [step, setStep] = useState(STEPS.DELIVERY);
  const [deliveryData, setDeliveryData] = useState(null);
  const [paymentData, setPaymentData] = useState(null);
  const [orderId, setOrderId] = useState(null);

  // STORING STATES TO LOCAL STORAGE
  useEffect(() => {
    if (step && step !== STEPS.DELIVERY) localStorage.setItem('step', JSON.stringify(step));
  }, [step]);

  useEffect(() => {
    if (deliveryData) localStorage.setItem('deliveryData', JSON.stringify(deliveryData));
  }, [deliveryData]);

  useEffect(() => {
    if (paymentData) localStorage.setItem('paymentData', JSON.stringify(paymentData));
  }, [paymentData]);

  useEffect(() => {
    if (orderId) localStorage.setItem('orderId', JSON.stringify(orderId));
  }, [orderId]);

  // GETTING DATA FROM LOCAL STORAGE INTO STATE
  useEffect(() => {
    const lsStep = JSON.parse(localStorage.getItem('step'));
    const lsDeliveryData = JSON.parse(localStorage.getItem('deliveryData'));
    const lsPaymentData = JSON.parse(localStorage.getItem('paymentData'));
    const lsOrderId = JSON.parse(localStorage.getItem('orderId'));

    
    if (lsStep) setStep(lsStep);
    if (lsDeliveryData) setDeliveryData(lsDeliveryData);
    if (lsPaymentData) setPaymentData(lsPaymentData);
    if (lsOrderId) setOrderId(lsOrderId);
  }, [])
  
  console.log(step);
  return (
    <JMCard>
      <JMStepper
        step={step}
      />
      <div style={{ marginTop: 24, width: "100%" }}>
        {
          step === STEPS.DELIVERY ? (
            <DeliveryPage setStep={setStep} deliveryData={deliveryData} setDeliveryData={setDeliveryData}/>
          ) : step === STEPS.PAYMENT ? (
            <PaymentPage setStep={setStep} isDropship={deliveryData?.sendAsDropshipper} setPaymentData={setPaymentData}/>
          ) : <FinishPage paymentData={paymentData} setStep={setStep} orderId={orderId} setOrderId={setOrderId}/>
        }
      </div>
    </JMCard>
  );
}

export default App;
