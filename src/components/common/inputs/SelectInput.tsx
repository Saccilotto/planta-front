import { UseFormRegisterReturn } from 'react-hook-form';

interface SelectInputProps {
  label: string;
  placeholder: string;
  options: string[] | { value: string; label: string }[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string | number;
  error?: string;
  register?: UseFormRegisterReturn;
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  placeholder,
  options,
  onChange,
  error,
  value,
  register
}) => {
  return (
    <div className="mb-4">
      <label className="block text-black mb-1">{label}</label>
      <select
        className="w-full text-black mt-1 border border-greenHortti rounded-lg p-2 box"
        onChange={onChange}
        value={value}
        {...register}
      >
        {placeholder && (
          <option className="text-[#1e1e1e] w-full" value="">
            {placeholder}
          </option>
        )}
        {Array.isArray(options) &&
          options.map((option, index) => {
            // Verifica se o option é um objeto ou uma string simples
            if (typeof option === 'string') {
              return (
                <option
                  className="text-[#1e1e1e] w-full"
                  key={index}
                  value={option}
                >
                  {option}
                </option>
              );
            } else {
              return (
                <option
                  className="text-[#1e1e1e] w-full"
                  key={index}
                  value={option.value}
                >
                  {option.label}
                </option>
              );
            }
          })}
      </select>
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default SelectInput;
