import { Route, Routes } from 'react-router-dom';
import './styles/fonts.css';
import './styles/global.css';
import { Layout } from './Layout';
import { Home } from '../pages/home/Home';
import { UxTesting } from '../pages/ux_testing/UxTesting';
import { PaymentTesting } from '../pages/payment_testing/PaymentTesting';
import { CustomRequest } from '../pages/custom_request/CustomRequest';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        
        <Route index element={<Home />} />
        
        <Route path="/order-form" element={<Home />} />
        
        <Route path="/method/payment-testing" element={<PaymentTesting />} />
        <Route path="/method/custom-request" element={<CustomRequest />} />
        <Route path="/method/ux-testing" element={<UxTesting />} />
      </Route>
    </Routes>
  );
}
export default App;