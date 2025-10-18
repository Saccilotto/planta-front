import Link from 'next/link';

interface NavbarButtonProps {
  href: string;
  title: string;
  selected?: boolean;
}

const NavbarButtonComponent: React.FC<NavbarButtonProps> = ({
  href,
  title,
  selected
}) => {
  return (
    <div>
      <Link
        className={`text-xl hover:text-greenHortti hover:border-greenHortti w-full h-auto font-semibold ${selected ? 'text-greenHortti border-greenHortti border-b-2' : 'text-black'}`}
        href={href}
      >
        {title}
      </Link>
    </div>
  );
};

export default NavbarButtonComponent;
