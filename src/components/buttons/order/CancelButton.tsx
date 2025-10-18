import Link from 'next/link';
import Image from 'next/image';

interface CancelButtonProps {
  title: string;
  image: string;
  href?: string;
  onClick?: () => void;
}

const cancelButton: React.FC<CancelButtonProps> = ({
  title,
  image,
  href,
  onClick
}) => {
  return (
    <div
      className="w-full h-auto bg-grayHortti text-white py-2 px-4 rounded-lg hover:bg-gray-500"
      onClick={onClick}
    >
      <Link className="flex p-1 gap-1 justify-center" href={href ?? ''}>
        <Image className="w-6" width={30} height={0} src={image} alt="Cancel" />
        <div className="flex-col text-black text-start gap-y-1">
          <h3 className="text-white ">{title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default cancelButton;
