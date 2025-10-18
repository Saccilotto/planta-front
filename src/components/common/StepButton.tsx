type Props = {
  step: string;
  onClick: () => void;
};

export default function StepButton({ step, onClick }: Props) {
  return (
    <button
      className={
        'w-full h-1/3 items-center p-2 bg-greenHorttiBg border-greenHortti border-2 text-black rounded-lg m-4 hover:bg-green-100 hover:border-green-400'
      }
      onClick={onClick}
    >
      <span>{step}</span>
    </button>
  );
}
