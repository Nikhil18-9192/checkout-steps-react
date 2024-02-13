import './App.css'
import CheckoutStepper from './components/CheckoutStepper';

function App() {

  const CHECKOUT_STEPS = [
    {
      name: "Customer Info",
      Component: () => <div>Provide your contact details</div>,
    },
    {
      name: "Shipping Info",
      Component: () => <div>Enter your delivery address</div>,
    },
    {
      name: "Payment",
      Component: () => <div>Enter your payment details</div>,
    },
    {
      name: "Delevered",
      Component: () => <div>Your order has been delivered</div>,
    },
  ];

  return (
    <div className='App'>
      <CheckoutStepper steps={CHECKOUT_STEPS} />
    </div>
  )
}

export default App
