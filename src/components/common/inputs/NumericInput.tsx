import { UseFormRegisterReturn } from 'react-hook-form';

interface NumericInputProps {
  label: string;
  placeholder: string;
  disable?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: number;
  error?: string;
  register?: UseFormRegisterReturn;
}

const numericInput: React.FC<NumericInputProps> = ({
  label,
  placeholder,
  disable,
  onChange,
  error,
  value,
  register
}) => {
  return (
    <div className="mb-4">
      <label className="block text-black mb-1">{label}</label>
      <input
        type="number"
        placeholder={placeholder}
        className="w-full text-[#1e1e1e] mt-1 border border-greenHortti rounded-lg p-2"
        disabled={disable === undefined ? false : disable}
        value={value}
        onChange={onChange}
        {...register}
      />
      {/* Exibe o erro se houver */}
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default numericInput;
