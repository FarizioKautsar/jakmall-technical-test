import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { STEPS } from './global/constants';
import DeliveryPage from './pages/DeliveryPage';
import PaymentPage from './pages/PaymentPage';
import FinishPage from './pages/FinishPage';
import JMStepper from './components/JMStepper';

function App() {
  const [step, setStep] = useState(STEPS.DELIVERY);
  
  return (
    <>
      <JMStepper
        step={step}
      />
      {
        step === STEPS.DELIVERY ? (
          <DeliveryPage setStep={setStep}/>
        ) : step === STEPS.PAYMENT ? (
          <PaymentPage setStep={setStep}/>
        ) : <FinishPage setStep={setStep}/>
      }
    </>
  );
}

export default App;
