import { MethodTesting } from "../../widgets/method_testing/MethodTesting";
import { UX_DATA } from "./ux.data";

export const UxTesting: React.FC = () => {  

  return (
    <MethodTesting {...UX_DATA} />
  );
};
