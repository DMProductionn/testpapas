import { MethodTesting } from "../../widgets/method_testing/MethodTesting";
import { PAYMENT_DATA } from "./payment.data";

export const PaymentTesting: React.FC = () => {
  return (
    <MethodTesting {...PAYMENT_DATA} />
  );
};
