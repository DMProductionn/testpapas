import { useSearchParams } from 'react-router-dom';
import { MainCard } from '../../entities/main_card/MainCard';
import { CARD_DATA } from './card.data';
import { useEffect } from 'react';
import { useClientStore } from '../../app/store/client.store';

export const Home: React.FC = () => {
  const [searchParams] = useSearchParams();
  const client = searchParams.get('client');

  const { setClient } = useClientStore();
  
  useEffect(() => {
    setClient(client);
  }, [client])

  return (
    <div className="flex flex-col items-center">
      <p className="mt-[190px] text-[32px] font-[500]">
        Select the type of test you want to perform
      </p>
      <div className="mt-[140px] flex gap-[8px] w-full justify-center">
        {CARD_DATA.map((card) => (
          <MainCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};
