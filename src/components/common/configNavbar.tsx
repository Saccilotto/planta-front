'use client';
import { usePathname, useRouter } from 'next/navigation';
import NavbarButtonComponent from '../buttons/config/navbarButton';
import ReturnIcon from '@/src/components/icons/return-icon.svg';
import Image from 'next/image';

interface navbarProps {
  children: React.ReactNode;
}

const ConfigNavbar: React.FC<navbarProps> = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();

  const isSelected = (href: string) => pathname === href; //Verifica se o caminho atual é igual ao href, se sim deixa selecionado

  return (
    <div>
      <nav className="my-8">
        <h1 className="text-black w-full self-start text-2xl font-bold px-5 my-3 mb-3 ml-3">
          <button
            className=" text-greenHortti  pr-2 "
            onClick={() => router.push('/home')}
          >
            <Image src={ReturnIcon} alt="Retornar" width={14} height={14} />
          </button>{' '}
          Painel de Configuração
        </h1>
        <div className="flex flex-row w-full justify-between space-x-4 px-16 my-6">
          <NavbarButtonComponent
            href="/config/raw-material"
            title="Matéria-Prima"
            selected={isSelected('/config/raw-material')}
          />
          <NavbarButtonComponent
            href="/config/final-product"
            title="Produto Final"
            selected={isSelected('/config/final-product')}
          />
          <NavbarButtonComponent
            href="/config/category"
            title="Categoria"
            selected={isSelected('/config/category')}
          />
          <NavbarButtonComponent
            href="/config/step"
            title="Etapa"
            selected={isSelected('/config/step')}
          />
          <NavbarButtonComponent
            href="/config/stock"
            title="Estoque"
            selected={isSelected('/config/stock')}
          />
        </div>
        <div className="w-auto h-px bg-greenHortti mx-16"></div>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default ConfigNavbar;
