type Props = {
  selected: boolean;
  text: string;
};

export default function SelectedStep({ selected, text }: Props) {
  return (
    <div className="justify-items-center">
      <div
        className={`flex items-center justify-center border ${selected ? 'bg-greenHorttiBg border-greenHortti' : 'border-black bg-gray-200'} rounded-full w-28 h-28`}
      />
      <p className="text-black text-xl mt-1 font-medium">{text}</p>
    </div>
  );
}
