import { UseFormRegisterReturn } from 'react-hook-form';

interface NumericInputProps {
  label: string;
  placeholder: string;
  disable?: boolean;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  register?: UseFormRegisterReturn;
}

const numericInput: React.FC<NumericInputProps> = ({
  label,
  placeholder,
  disable,
  error,
  onChange,
  register
}) => {
  return (
    <div className="mb-4">
      <label className="block text-black mb-1">{label}</label>
      <input
        type="date"
        placeholder={placeholder}
        className="w-full text-[#1e1e1e] mt-1 border border-greenHortti rounded-lg p-2"
        disabled={disable === undefined ? false : disable}
        onChange={onChange}
        {...register}
      />
      {/* Exibe o erro se houver */}
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default numericInput;
