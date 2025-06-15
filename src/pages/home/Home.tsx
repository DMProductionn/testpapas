import { useSearchParams } from 'react-router-dom';
import { MainCard } from '../../entities/main_card/MainCard';
import { CARD_DATA } from './card.data';
import { useEffect } from 'react';

export const Home: React.FC = () => {
  const [searchParams] = useSearchParams();
  const client = searchParams.get('client');

  useEffect(() => {
    if (client) {
      localStorage.setItem('client', client);
    } else {
      const savedClient = localStorage.getItem('client');
      if (savedClient && !client) {
      }
    }
  }, [client]);

  return (
    <div className="flex flex-col items-center">
      <p className="mt-[190px] text-[32px] text-center font-[500] max-w-[440px] lg:max-w-full">
        Select the type of test you want to perform
      </p>
      <div className="xl:mt-[140px] md:mt-[65px] lg:px-[100px] 2xl:px-0 mt-[40px] flex flex-col 2xl:flex-row gap-x-[8px] gap-y-[28px] w-full justify-center ">
        {CARD_DATA.map((card) => (
          <MainCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};
