export const Radio: React.FC<{
  label: string;
  name: string;
  register: any;
  options: { value: string; label: string }[];
  defaultValue?: string;
}> = ({ label, name, register, options, defaultValue }) => (
  <div className="mb-4">
    <label className="text-[14px] font-[500] text-black mb-2 block">{label}</label>
    <div className="flex space-x-4">
      {options.map((option) => (
        <label key={option.value} className="inline-flex items-center">
          <input
            type="radio"
            value={option.value}
            {...register(name)}
            className="form-radio h-4 w-4 text-indigo-600"
            defaultChecked={option.value === defaultValue}
          />
          <span className="ml-2 text-[#737F8F] font-[500]">{option.label}</span>
        </label>
      ))}
    </div>
  </div>
);
