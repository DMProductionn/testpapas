import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import type { FormProps } from '../../../shared/types/form_props.type';
import { XCloseIcon } from '../../../shared/icons';
import { Input, Textarea } from '../../../shared/ui';
import { FileInput } from '../../../shared/ui/file/File';
import { SubmitButtons } from '../../submit_buttons/SubmitButtons';
import type { FormData } from './type';

export const RequestForm: React.FC<FormProps> = ({ isModalOpen, setIsModalOpen, onFormSubmit }) => {
  const client = localStorage.getItem('client');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  useEffect(() => {
    if (client) {
      setValue('clientName', client);
    }
  }, [client, setValue]);

  const onSubmit = (data: FormData) => {
    const formData = localStorage.getItem('Custom Request');
    let formsArray = [];

    if (formData) {
      formsArray = JSON.parse(formData);
    }

    formsArray.push(data);

    localStorage.setItem('Custom Request', JSON.stringify(formsArray));

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
              name="file"
              register={register}
              label="Upload file"
              id="file"
              errors={errors}
            />

            <SubmitButtons />
          </form>
        </div>
      </div>
    </div>
  );
};
