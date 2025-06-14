export const Radio: React.FC<{
  label: string;
  name: string;
  register: any;
  options: { value: string; label: string }[];
  defaultValue?: string;
  required?: boolean | string;
}> = ({ label, name, register, options, defaultValue, required }) => (
  <div className="mb-4">
    <label className="text-[14px] font-[500] text-black mb-2 block">
      {label} {required && <span className="text-[#00A3FF]">*</span>}
    </label>
    <div className="flex space-x-[8px] flex-col gap-[8px]">
      {options.map((option, index) => (
        <label key={option.value} className="inline-flex items-center">
          <input
            type="radio"
            value={option.value}
            {...register(name)}
            className="h-[23px] w-[23px] cursor-pointer appearance-none rounded-full border-2 border-gray-300 checked:border-blue checked:bg-blue relative transition-all"
            defaultChecked={defaultValue ? option.value === defaultValue : index === 0}
          />
          <span className="ml-[8px] text-[#737F8F] font-[500]">{option.label}</span>
        </label>
      ))}
    </div>
  </div>
);
