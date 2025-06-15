import { useState } from 'react';
import { PaymentForm } from '../../components/forms';
import type { MethodTestingType } from '../../shared/types/method_testing.type';
import { Button } from '../../shared/ui';
import { RequestForm } from '../../components/forms/RequestForm/RequestForm';
import { UxForm } from '../../components/forms/UxForm/UxForm';
import { TestingCard } from '../../entities/testing_card/TestingCard';
import { useLocalStorage } from '../../shared/hooks/useLocalStorage';

export const MethodTesting: React.FC<MethodTestingType> = ({ img, title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [forms, setForms] = useLocalStorage<any[]>(title, []);

  console.log(forms);

  const onClickOpenModal = () => setIsModalOpen(!isModalOpen);

  const handleDeleteCard = (id: string) => {
    const updatedForms = forms.filter((_, index) => index.toString() !== id);
    setForms(updatedForms);
  };

  const handleFormSubmit = () => {
    const data = localStorage.getItem(title);
    const updatedForms = data ? JSON.parse(data) : [];
    setForms(updatedForms);
  };

  return (
    <div className="flex flex-col items-center mt-[40px]">
      {title === 'Payment Testing' ? (
        <PaymentForm
          onFormSubmit={handleFormSubmit}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      ) : title === 'UX Testing' ? (
        <UxForm
          onFormSubmit={handleFormSubmit}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      ) : (
        <RequestForm
          onFormSubmit={handleFormSubmit}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      <img className={`max-w-[460px] w-full h-auto`} src={img} alt="image" />
      <p className="text-[32px] mt-[30px]">{title}</p>
      <Button full={forms.length > 0} onClick={onClickOpenModal} />
      <div className="w-full space-y-4 mt-6">
        {forms.length > 0 ? (
          forms.map((form: any, index: number) => (
            <TestingCard
              key={index}
              id={index.toString()}
              title={title}
              country={form.country}
              currency={form.currency}
              paymentMethod={form.paymentMethod}
              link={form.link || ''}
              onDelete={handleDeleteCard}
            />
          ))
        ) : (
          <p className="text-[18px] mt-[50px] text-center">
            Currently no tests added. Click the "+" icon to add <br /> your first test.
          </p>
        )}
      </div>
    </div>
  );
};
