import Image from 'next/image';
import Logo from '@/public/logo.svg';

export default function Header() {
  return (
    <header className="bg-[url('../../public/header-background.svg')] h-[100px] flex px-[70px] w-full">
      <Image src={Logo.src} alt="Logo" width={192} height={28} />
    </header>
  );
}
