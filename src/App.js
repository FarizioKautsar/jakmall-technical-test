import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
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
  
  return (
    <JMCard>
      <JMStepper
        step={step}
      />
      <div style={{ marginTop: 24, width: "100%" }}>
        {
          step === STEPS.DELIVERY ? (
            <DeliveryPage setStep={setStep}/>
          ) : step === STEPS.PAYMENT ? (
            <PaymentPage setStep={setStep}/>
          ) : <FinishPage setStep={setStep}/>
        }
      </div>
    </JMCard>
  );
}

export default App;
