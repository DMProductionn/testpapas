import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import type { FormProps } from '../../../shared/types/form_props.type';
import {
  XCloseIcon,
} from '../../../shared/icons';
import { useClientStore } from '../../../app/store/client.store';
import { Input, Textarea } from '../../../shared/ui';
import { FileInput } from '../../../shared/ui/file/File';
import { SubmitButtons } from '../../submit_buttons/SubmitButtons';
import type { FormData } from './type';

export const RequestForm: React.FC<FormProps> = ({ isModalOpen, setIsModalOpen }) => {
  const { client } = useClientStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();


  useEffect(() => {
    if (client) {
      setValue('clientName', client);
    }
  }, [client, setValue]);


  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    setIsModalOpen(false);
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-[40px] shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-[25px] pt-[40px]">
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

            <FileInput name="uploadFile" register={register} label="Upload file" id="uploadFile" errors={errors} />


            <SubmitButtons />
          </form>
        </div>
      </div>
    </div>
  );
};
