import { MethodTesting } from "../../widgets/method_testing/MethodTesting"
import { REQUEST_DATA } from "./request.data";

export const CustomRequest: React.FC = () => {
  return (
    <MethodTesting {...REQUEST_DATA} />
  );
};
