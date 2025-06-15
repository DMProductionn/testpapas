export const Input: React.FC<{
  label: string;
  id: string;
  register: any;
  errors: any;
  required?: boolean | string;
  placeholder: string;
  type?: string;
  readOnly?: boolean;
  validation?: any;
  iconLeft?: React.ReactNode;
  isClientName?: boolean
  uxTesting?: boolean
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}> = ({
  label,
  id,
  register,
  errors,
  required,
  placeholder,
  type = 'text',
  readOnly = false,
  validation = {},
  iconLeft,
  isClientName = false,
  uxTesting,
  onKeyPress
}) => (
    <div className={`${uxTesting ? 'mb-0' : 'mb-4'} w-full`}>
      <label htmlFor={id} className="text-[14px] font-[500] text-black">
        {label} {required && <span className="text-[#00A3FF]">*</span>}
      </label>
      <div className="relative">
        {iconLeft && (
          <div className={`absolute left-[25px] top-[52%] transform -translate-y-1/2 ${errors[id] ? '[&>svg>path]:fill-red' : ''}`}>
            {iconLeft}
          </div>
        )}
        <input
          placeholder={placeholder}
          id={id}
          type={type}
          onKeyPress={onKeyPress}
          {...register(id, {
            required:
              typeof required === 'string' ? required : required ? `${label} is required` : false,
            ...validation,
          })}
          className={`w-full rounded-[16px] h-[70px] ${isClientName ? 'bg-[#F6F6F6]' : 'bg-[#F7F8FC]'} ${uxTesting && 'bg-white'} font-[500] mt-[4px] outline-none px-[25px] placeholder:text-[#737F8F] placeholder:font-[500] text-[#737F8F] font-[500] ${'border border-transparent'
            } ${iconLeft ? 'pl-[60px]' : ''} focus:border-blue transition-colors placeholder:font-[500] duration-200 ${errors[id] && 'placeholder:text-red text-red'}`}
          readOnly={readOnly}
        />
      </div>
      <div className={`${errors[id] && 'h-[20px]'}`}>
        {errors[id] && <p className="text-[14px] font-[500] text-red">{errors[id].message}</p>}
      </div>
    </div>
  );