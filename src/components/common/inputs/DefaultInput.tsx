import { UseFormRegisterReturn } from 'react-hook-form';

interface DefaultInputProps {
  label: string;
  placeholder: string;
  disable?: boolean;
  value?: string;
  error?: string | null;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  register?: UseFormRegisterReturn;
}

const DefaultInput: React.FC<DefaultInputProps> = ({
  label,
  placeholder,
  disable,
  value,
  error,
  onChange,
  register
}) => {
  return (
    <div className="mb-4">
      <label className="block text-black mb-1">{label}</label>
      <input
        placeholder={placeholder}
        className="w-full text-black mt-1 border border-greenHortti rounded-lg p-2"
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

export default DefaultInput;
