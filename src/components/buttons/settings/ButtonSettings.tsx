import Link from 'next/link';
import Image from 'next/image';
import GearIcon from '../../icons/gear-icon.svg';

type Props = {
  href: string;
};

export default function ButtonSettings({ href }: Props) {
  return (
    <Link href={href}>
      <Image
        src={GearIcon}
        alt="Configurações"
        width={45.31}
        height={45}
        className="absolute right-[30px] top-[34px]"
      />
    </Link>
  );
}
