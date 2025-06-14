import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import type { FormData } from './type';
import type { FormProps } from '../../../shared/types/form_props.type';
import {
  CountryIcon,
  CreditCardIcon,
  CurrencyIcon,
  DeviceIcon,
  Globe,
  WalletIcon,
  XCloseIcon,
} from '../../../shared/icons';
import {
  currencyOptions,
  desktopOsOptions,
  deviceOptions,
  mobileOsOptions,
  testTargetOptions,
} from './form.data';
import { Input, Radio, SelectComponent, Textarea, Toggle } from '../../../shared/ui';
import { countryOptions } from '../../../shared/constans/countryOptions';
import { FileInput } from '../../../shared/ui/file/File';
import { SubmitButtons } from '../../submit_buttons/SubmitButtons';

export const UxForm: React.FC<FormProps> = ({ isModalOpen, setIsModalOpen, onFormSubmit }) => {
  const [showOperatingSystem, setShowOperatingSystem] = useState(false);
  const client = localStorage.getItem('client');

  const {
    register,
    reset,
    handleSubmit,
    control,
    watch,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  const testDevice: any = watch('testDevice');
  const withdrawalEnabled = watch('withdrawalToggle');

  useEffect(() => {
    setValue('withdrawalToggle', true);
  }, [setValue]);

  useEffect(() => {
    if (client) {
      setValue('clientName', client);
    }
  }, [client, setValue]);

  useEffect(() => {
    const shouldShowOS = testDevice?.value === 'mobile' || testDevice?.value === 'desktop';
    setShowOperatingSystem(shouldShowOS);

    if (shouldShowOS) {
      setValue('operatingSystem', '');
    } else {
      setValue('operatingSystem', '');
    }
  }, [testDevice, setValue]);

  const onSubmit = (data: FormData) => {
    const formData = localStorage.getItem('UX Testing');
    let formsArray = [];

    if (formData) {
      formsArray = JSON.parse(formData);
    }

    formsArray.push(data);

    localStorage.setItem('UX Testing', JSON.stringify(formsArray));

    setIsModalOpen(false);
    reset();
    onFormSubmit?.();
  };

  const validateDecimal = (value: string) => {
    if (!value) return true;
    return /^\d*\.?\d*$/.test(value) || 'Only numbers with decimal point are allowed';
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-[40px] shadow-xl max-w-2xl w-full max-h-[95vh] overflow-y-auto custom-scrollbar">
        <div className="p-[25px]">
          <div className="flex justify-between items-center">
            <p className="font-[500] text-[32px] text-blueDark leading-[130%]">
              Submit Your Testing Request
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-[#F7F8FC] rounded-[32px] h-[72px] w-[72px] flex justify-center items-center">
              <XCloseIcon />
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Поле Client Name */}
            <Input
              isClientName
              label="Client Name"
              id="clientName"
              register={register}
              errors={errors}
              placeholder="Client Name"
              readOnly
            />

            {/* Поле Currency */}
            <Radio
              register={register}
              required
              label="Select test target"
              name="currency"
              options={testTargetOptions}
            />

            {/* Поле Country */}
            <SelectComponent
              leftIcon={<CountryIcon />}
              label="Country"
              name="country"
              control={control}
              errors={errors}
              options={countryOptions}
              isCountrySelect={true}
              placeholder="Country"
            />

            {/* Поле Payment method */}
            <Input
              label="Payment method"
              id="paymentMethod"
              iconLeft={<CreditCardIcon />}
              register={register}
              errors={errors}
              placeholder="e.g., Visa, PayPal, Crypto"
              type="text"
              validation={{ validate: validateDecimal }}
            />

            {/* Поле Test Device */}
            <SelectComponent
              isDeviceSelect
              leftIcon={<DeviceIcon />}
              label="Test Device"
              name="testDevice"
              control={control}
              errors={errors}
              required={false}
              options={deviceOptions}
              placeholder="Test Device"
            />

            {/* Поле Operating System  */}
            {showOperatingSystem && (
              <SelectComponent
                label="Operating System"
                name="operatingSystem"
                control={control}
                errors={errors}
                options={testDevice?.value === 'mobile' ? mobileOsOptions : desktopOsOptions}
                placeholder="OS"
              />
            )}

            <div className="flex gap-[16px] items-center w-full">
              {/* Поле Currency */}
              <SelectComponent
                leftIcon={<CurrencyIcon />}
                label="Currency"
                name="currency"
                control={control}
                errors={errors}
                options={currencyOptions}
                placeholder="Currency"
              />

              {/* Поле Deposit Amount */}
              <Input
                label="Deposit Amount"
                id="depositAmount"
                iconLeft={<WalletIcon />}
                register={register}
                errors={errors}
                required
                placeholder="0.00"
                type="text"
                validation={{ validate: validateDecimal }}
              />
            </div>

            <div className="flex flex-col bg-[#F7F8FC] mb-4 rounded-[16px] p-[25px] gap-[16px]">
              <Toggle uxTesting control={control} name="KYC" label="KYC" />
              <Toggle uxTesting control={control} name="Wagering" label="Wagering" />
              <Toggle uxTesting control={control} name="withdrawalToggle" label="Withdrawal" />
              {withdrawalEnabled && (
                <Input
                  uxTesting
                  label="Withdrawal Amount"
                  id="withdrawalAmount"
                  iconLeft={<WalletIcon />}
                  register={register}
                  errors={errors}
                  placeholder="0.00"
                  type="text"
                  validation={{ validate: validateDecimal }}
                />
              )}
            </div>

            <Input
              label="Link"
              id="link"
              iconLeft={<Globe />}
              register={register}
              errors={errors}
              placeholder="URL"
              type="text"
            />

            <Textarea
              label="Additional Information"
              id="description"
              register={register}
              errors={errors}
              placeholder="Additional Information"
              rows={5}
              validation={{
                minLength: {
                  value: 10,
                  message: 'Минимум 10 символов',
                },
              }}
            />

            <FileInput
              register={register}
              name="file"
              label="Upload file"
              id="uploadFile"
              errors={errors}
            />

            {/* Поле Withdrawal Amount (условное) */}
            {/* {showWithdrawalAmount && (
              <Input
                label="Withdrawal Amount"
                id="withdrawalAmount"
                register={register}
                errors={errors}
                required={showWithdrawalAmount}
                placeholder="0.00"
                type="text"
                validation={{ validate: validateDecimal }}
              />
            )} */}

            <SubmitButtons />
          </form>
        </div>
      </div>
    </div>
  );
};
