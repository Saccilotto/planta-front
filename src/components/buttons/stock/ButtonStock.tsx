/* eslint-disable */
import Link from 'next/link';

type Props = {
  description: string;
  image: string;
  href: string;
};

export default function ButtonStock({ description, image, href }: Props) {
  return (
    <Link
      href={href}
      className="border-[#F56932] border-2 rounded-lg w-auto h-auto flex flex-col p-4 gap-y-3"
    >
      <img src={image} alt="" className="w-auto h-auto" />
      <h3 className="text-base text-[#1E1E1E] whitespace-nowrap">
        {description}
      </h3>
    </Link>
  );
}
