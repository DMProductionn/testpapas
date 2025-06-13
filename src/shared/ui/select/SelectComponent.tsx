import { Controller } from 'react-hook-form';
import Select from 'react-select';
import ReactCountryFlag from 'react-country-flag';
import { countryOptions } from '../../constans/countryOptions';
import { Globe } from '../../icons';

export const SelectComponent: React.FC<{
  label: string;
  name: string;
  control: any;
  errors: any;
  options?: any[];
  placeholder: string;
  required?: boolean | string;
  isCountrySelect?: boolean;
  leftIcon?: React.ReactNode;
  isDeviceSelect?: boolean;
}> = ({
  label,
  name,
  control,
  errors,
  options,
  placeholder,
  required = true,
  isCountrySelect = false,
  leftIcon,
  isDeviceSelect
}) => {
  const selectOptions = isCountrySelect ? countryOptions : options;

  return (
    <div className="mb-4 w-full">
      <label className="text-[14px] font-[500] text-black">
        {label} {required && <span className="text-[#00A3FF]">*</span>}
      </label>
      <Controller
        name={name}
        control={control}
        rules={{
          required:
            typeof required === 'string' ? required : required ? `${label} is required` : false,
        }}
        render={({ field }) => (
          <Select
            {...field}
            options={selectOptions}
            className={`mt-[4px] ${errors[name] ? 'border-red-500' : ''}`}
            classNamePrefix="select"
            placeholder={
              <div className="flex items-center">
                {leftIcon && (
                  <div className="h-[20px] w-[28px] flex justify-center items-center mr-2">
                    {leftIcon}
                  </div>
                )}
                <span>{placeholder}</span>
              </div>
            }
            formatOptionLabel={(option) => (
              <div className="flex items-center">
                {isCountrySelect && option.label === 'Any' ? (
                  <div className="h-[20px] w-[28px] flex justify-center items-center mr-2">
                    <Globe />
                  </div>
                ) : isCountrySelect ? (
                  <ReactCountryFlag
                    countryCode={option.flag}
                    svg
                    style={{ width: '28px', height: '20px', marginRight: '8px' }}
                  />
                ) : null}
                <span>{option.label}</span>
              </div>
            )}
            styles={{
              control: (base) => ({
                ...base,
                height: '70px',
                borderRadius: '16px',
                paddingLeft: isDeviceSelect ? '10px' : '17px',
                backgroundColor: '#F7F8FC',
                border: errors[name] ? '1px solid #EF4444' : 'none',
                boxShadow: 'none',
              }),
              indicatorSeparator: () => ({
                display: 'none',
              }),
              menu: (base) => ({
                ...base,
                backgroundColor: '#F7F8FC',
                borderRadius: '16px',
                marginTop: '4px',
                boxShadow: 'none',
              }),
              option: (base, { isSelected }) => ({
                ...base,
                backgroundColor: isSelected ? 'transparent' : '',
                color: '#737F8F',
                fontWeight: 500,
                '&:hover': {
                  color: '#3B00B0',
                },
              }),
              placeholder: (base) => ({
                ...base,
                color: '#737F8F',
                fontWeight: 500,
              }),
              singleValue: (base) => ({
                ...base,
                color: '#737F8F',
                fontWeight: 500,
              }),
              input: (base) => ({
                ...base,
                color: '#737F8F',
                fontWeight: 500,
                caretColor: 'transparent',
              }),
            }}
          />
        )}
      />
      {errors[name] && <p className="mt-1 text-sm text-red-600">{errors[name].message}</p>}
    </div>
  );
};
