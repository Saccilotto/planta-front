import { UseFormRegisterReturn } from 'react-hook-form';

interface Option {
  id: string | number;
  description: string;
}

interface SelectInputProps {
  label: string;
  placeholder: string;
  options: Option[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string | number;
  error?: string;
  register?: UseFormRegisterReturn;
}

const selectInput: React.FC<SelectInputProps> = ({
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
        {options.map((option, index) => (
          <option
            className="text-[#1e1e1e] w-full"
            key={index}
            value={option.id}
          >
            {option.description}
          </option>
        ))}
      </select>
      {/* Exibe o erro se houver */}
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default selectInput;
