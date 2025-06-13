import { useState } from 'react';
import { PaymentForm } from '../../components/forms';
import type { MethodTestingType } from '../../shared/types/method_testing.type';
import { Button } from '../../shared/ui';
import { RequestForm } from '../../components/forms/RequestForm/RequestForm';
import { UxForm } from '../../components/forms/UxForm/UxForm';

export const MethodTesting: React.FC<MethodTestingType> = ({ img, title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClickOpenModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="flex flex-col items-center mt-[40px]">
      {title === 'Payment Testing' ? (
        <PaymentForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      ) : title === 'UX Testing' ? (
        <UxForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      ) : (
        <RequestForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}
      <img className={`max-w-[460px] w-full h-auto`} src={img} alt="image" />
      <p className="text-[32px] mt-[30px] mb-[115px]">{title}</p>
      <Button onClick={onClickOpenModal} />
      <p className="text-[18px] mt-[50px] text-center">
        Currently no tests added. Click the "+" icon to add <br /> your first test.
      </p>
    </div>
  );
};
