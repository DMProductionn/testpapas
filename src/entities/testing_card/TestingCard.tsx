import ReactCountryFlag from 'react-country-flag';
import { XCloseIcon } from '../../shared/icons';

type TestingCardProps = {
  id: string;
  title: string;
  country: {
    value: string;
    label: string;
  };
  currency: string;
  paymentMethod: string;
  link: string;
  onDelete?: (id: string) => void;
};

export const TestingCard: React.FC<TestingCardProps> = ({
  id,
  title,
  country,
  currency,
  paymentMethod,
  link,
  onDelete,
}) => {


  return (
    <div className="h-[105px] h-auto w-full gap-x-[10px] bg-gradient-to-r from-[#110033] to-[#33254E] rounded-[16px] p-[16px] flex justify-between items-start">
      <div className="flex flex-col gap-[12px]">
        <div className="flex flex-wrap gap-[12px] items-center">
          <p className="text-[22px] leading-[130%]">{title}</p>
          {country && (
            <div className="w-auto h-[32px] bg-[#220066] rounded-[8px] px-[6px] flex items-center justify-center">
              <ReactCountryFlag
                countryCode={country.value}
                svg
                style={{ width: '28px', height: '20px', marginRight: '8px' }}
              />
              <p className="font-[500]">{country.label}</p>
            </div>
          )}
        </div>
        <div className="flex gap-[12px] items-center">
          {currency && (
            <div className="w-auto min-w-[32px] h-[32px] bg-[#220066] rounded-[8px] px-[6px] flex items-center justify-center">
              {currency.match(/\((.*?)\)/)?.[1] || currency}
            </div>
          )}
          {paymentMethod && (
            <div className="w-auto min-w-[32px] h-[32px] bg-[#220066] rounded-[8px] px-[6px] flex items-center justify-center">
              {paymentMethod}
            </div>
          )}
          {link && (
            <div className="w-auto min-w-[32px] h-[32px] bg-[#220066] rounded-[8px] px-[6px] flex items-center justify-center">
              {link}
            </div>
          )}
        </div>
      </div>

      <div>
        <button
          onClick={() => onDelete?.(id)}
          className="bg-[#F7F8FC] opacity-[50%] rounded-full w-[40px] h-[40px] flex justify-center items-center">
          <XCloseIcon color="#09001A" />
        </button>
      </div>
    </div>
  );
};
