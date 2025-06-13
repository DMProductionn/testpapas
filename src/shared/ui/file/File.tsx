import { useRef, useState } from 'react';
import { PlusFileIcon, TrashIcon } from '../../icons';

interface FileInputProps {
  label: string;
  id: string;
  register: any;
  name: string;
  required?: boolean | string;
  errors?: any;
  multiple?: boolean;
  setValue?: any;
  unregister?: any;
  accept?: string;
  className?: string;
}

export const FileInput: React.FC<FileInputProps> = ({
  label,
  id,
  name,
  required,
  register,
  errors = {},
  multiple = false,
  accept = '*',
  className = '',
  setValue,
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Регистрируем поле в react-hook-form
  const { ref, onChange, ...rest } = register(name, {
    required: typeof required === 'string' ? required : required ? `${label} обязателен` : false,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      const updatedFiles = multiple ? [...files, ...newFiles] : newFiles;

      setFiles(updatedFiles);

      // Создаем DataTransfer для работы с файлами
      let dataTransfer: DataTransfer | null = null;

      if (multiple) {
        dataTransfer = new DataTransfer();
        updatedFiles.forEach((file) => dataTransfer!.items.add(file));
        e.target.files = dataTransfer.files;
      } else {
        e.target.files = newFiles[0] as any;
      }

      // Обновляем значение в форме
      onChange(e);
      setValue(name, multiple ? (dataTransfer ? dataTransfer.files : null) : newFiles[0], {
        shouldValidate: true,
      });
    }
  };

  const removeFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);

    // Обновляем файлы в input и значение формы
    if (inputRef.current) {
      const dataTransfer = new DataTransfer();
      newFiles.forEach((file) => dataTransfer.items.add(file));
      inputRef.current.files = dataTransfer.files;

      setValue(name, multiple ? (newFiles.length ? dataTransfer.files : null) : null, {
        shouldValidate: true,
      });
    }
  };

  return (
    <div className={`mb-4 w-full ${className}`}>
      <label htmlFor={id} className="text-[14px] font-[500] text-black">
        {label} {required && <span className="text-[#00A3FF]">*</span>}
      </label>

      {/* Скрытый input для выбора файлов */}
      <input
        id={id}
        type="file"
        name={name}
        multiple={multiple}
        accept={accept}
        className="hidden"
        onChange={handleFileChange}
        ref={(e) => {
          ref(e);
          inputRef.current = e;
        }}
        {...rest}
      />

      {/* Кастомная кнопка для вызова диалога выбора файлов */}
      <div className="relative">
        <div
          className={`w-full rounded-[16px] min-h-[130px] bg-[#F7F8FC] mt-[4px] outline-none p-[20px] text-left text-[#737F8F] font-[500] flex flex-col justify-center ${
            errors[name] ? 'border-red-500 border' : 'border-none'
          }`}>
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="flex justify-center items-center w-[80px] h-[82px] rounded-[12px] bg-white flex-col gap-2 text-[#737F8F]">
            <PlusFileIcon />
            <span className="text-start text-[8px] font-[500]">.csv .xls .doc </span>
          </button>
        </div>
      </div>

      {/* Список выбранных файлов */}
      {files.length > 0 && (
        <div className="mt-3 space-y-2">
          {files.map((file, index) => (
            <div key={index} className="flex items-center gap-[10px] bg-white rounded-[12px] p-3">
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="text-[#737F8F] hover:text-red-500">
                <TrashIcon />
              </button>
              <div className="flex items-center gap-2 truncate">
                <span className="text-[#737F8F] text-sm font-[500] truncate">{file.name}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Отображение ошибок валидации */}
      {errors?.[name] && <p className="mt-1 text-sm text-red-600">{errors[name].message}</p>}
    </div>
  );
};
