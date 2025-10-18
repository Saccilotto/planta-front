import Link from 'next/link';
import Image from 'next/image';
import AddIcon from '../../icons/add-icon.svg';

type Props = {
  title: string;
  description: string;
  href: string;
};

export default function ButtonOperation({ title, description, href }: Props) {
  return (
    <Link
      href={href}
      className="border-[#006F48] border-2 rounded-lg w-full h-auto flex items-start p-6 gap-x-6 "
    >
      <div className="flex gap-5">
        <Image src={AddIcon.src} alt="Add Icon" width={24} height={24} />
        <div className="flex flex-col text-start gap-y-1">
          <h3 className="text-[#1c4060] text-2xl font-bold">{title}</h3>
          <p className="text-[#757575] text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
}
