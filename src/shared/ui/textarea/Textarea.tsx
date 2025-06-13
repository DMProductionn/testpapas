
interface TextareaProps {
  label: string;
  id: string;
  register: any;
  errors: any;
  required?: boolean | string;
  placeholder: string;
  readOnly?: boolean;
  validation?: any;
  iconLeft?: React.ReactNode;
  rows?: number;
  className?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  id,
  register,
  errors,
  required,
  placeholder,
  readOnly = false,
  validation = {},
  iconLeft,
  rows = 4,
  className = '',
}) => (
  <div className={`mb-4 w-full ${className}`}>
    <label htmlFor={id} className="text-[14px] font-[500] text-black">
      {label} {required && <span className="text-[#00A3FF]">*</span>}
    </label>
    <div className="relative">
      {iconLeft && (
        <div className="absolute left-[25px] top-[28px]">
          {iconLeft}
        </div>
      )}
      <textarea
        placeholder={placeholder}
        id={id}
        rows={rows}
        {...register(id, {
          required: typeof required === 'string' 
            ? required 
            : required 
              ? `${label} is required` 
              : false,
          ...validation,
        })}
        className={`w-full rounded-[16px] bg-[#F7F8FC] mt-[4px] outline-none p-[25px] 
          placeholder:text-[#737F8F] placeholder:font-[500] text-[#737F8F] font-[500] min-h-[130px]
          ${errors[id] ? 'border-red-500 border' : 'border-none'}
          ${iconLeft ? 'pl-[60px]' : ''}
          resize-none
        `}
        readOnly={readOnly}
      />
    </div>
    {errors[id] && <p className="mt-1 text-sm text-red-600">{errors[id].message}</p>}
  </div>
);