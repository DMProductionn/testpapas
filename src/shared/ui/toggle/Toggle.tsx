import React from 'react';
import { useController } from 'react-hook-form';
import type { UseControllerProps } from 'react-hook-form';

type ToggleProps = {
  label?: string;
  disabled?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  uxTesting?: boolean;
} & Partial<UseControllerProps<any>>;

export const Toggle: React.FC<ToggleProps> = ({
  label,
  disabled = false,
  className = '',
  size = 'md',
  control,
  checked = true,
  name,
  uxTesting,
  ...props
}) => {
  let isChecked;
  let handleChange;

  if (control && name) {
    const {
      field: { value, onChange },
    } = useController({
      control,
      name,
      defaultValue: true,
    });
    isChecked = value;
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.checked);
  } else {
    isChecked = checked;
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      props.onChange?.(e.target.checked);
    };
  }

  return (
    <label className={`flex justify-between items-center ${uxTesting ? 'mb-0 rounded-[0px] pl-0 h-[40px]' : 'mb-4 rounded-[16px] h-[70px]'} bg-[#F7F8FC] gap-3 px-[25px] ${className}`}>
      {label && <span className="text-black font-[600] text-[22px] leading-[130%]">{label}</span>}

      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        className="sr-only"
      />
      <div
        className={`relative w-[56px] h-[32px] rounded-full cursor-pointer transition-colors duration-300
          ${isChecked ? 'bg-blue' : 'bg-gray-300'}
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        `}>
        <div
          className={`absolute top-[4px] left-0.5 w-[24px] h-[24px] bg-white rounded-full shadow-md 
            transform transition-transform duration-300 ease-in-out flex justify-center items-center
            ${isChecked ? 'translate-x-[25px]' : 'translate-x-[2px]'}
          `}>
          <div
            className={`rounded-full w-[8px] h-[8px] ${
              isChecked ? 'bg-blue' : 'bg-gray-300'
            }`}></div>
        </div>
      </div>
    </label>
  );
};
