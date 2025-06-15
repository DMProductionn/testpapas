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
import { currencyOptions, desktopOsOptions, deviceOptions, mobileOsOptions } from './form.data';
import { Input, SelectComponent, Textarea, Toggle } from '../../../shared/ui';
import { countryOptions } from '../../../shared/constans/countryOptions';
import { FileInput } from '../../../shared/ui/file/File';
import { SubmitButtons } from '../../submit_buttons/SubmitButtons';
import { handleKeyPress, validateAmount } from './utils';

export const PaymentForm: React.FC<FormProps> = ({ isModalOpen, setIsModalOpen, onFormSubmit }) => {
  const [showOperatingSystem, setShowOperatingSystem] = useState(false);
  const client = localStorage.getItem('client');

  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  const testDevice: any = watch('testDevice');

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
    console.log(data);

    const formData = localStorage.getItem('Payment Testing');
    let formsArray = [];

    if (formData) {
      formsArray = JSON.parse(formData);
    }

    const transformedData = {
      ...data,
      testDevice: typeof data.testDevice === 'object' ? data.testDevice.label : data.testDevice,
      operatingSystem: typeof data.operatingSystem === 'object' ? data.operatingSystem.label : data.operatingSystem,
      currency: typeof data.currency === 'object' ? data.currency.label : data.currency,
      country: data.country
    };

    formsArray.push(transformedData);

    localStorage.setItem('Payment Testing', JSON.stringify(formsArray));

    setIsModalOpen(false);
    reset();
    onFormSubmit?.();
  };


  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white md:rounded-[40px] shadow-xl w-full h-full md:h-[95vh] md:max-w-2xl flex flex-col">
        <div className="p-[25px] flex-1 overflow-y-auto pb-[40px] md:pb-[25px] custom-scrollbar">
          <div className="flex gap-x-[10px] justify-between items-center mb-[16px]">
            <p className="font-[500] text-[32px] text-blueDark leading-[130%]">
              Submit Your Testing Request
            </p>
            <div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-[#F7F8FC] rounded-[32px] h-[72px] w-[72px] flex justify-center items-center">
                <XCloseIcon />
              </button>
            </div>
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

            <div className="flex flex-col lg:flex-row gap-[16px] items-center w-full">
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
                onKeyPress={handleKeyPress}
                validation={{
                  validate: validateAmount
                }}
              />
            </div>

            {/* Поле KYC */}
            <Toggle control={control} name="KYC" label="KYC" />

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

            <SubmitButtons />
          </form>
        </div>
      </div>
    </div>
  );
};
