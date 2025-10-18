import InventorySection from '@/src/components/sections/inventory/InventorySection';
import ButtonOperation from '../../components/buttons/order/ButtonOperation';
import Header from '../../components/common/header';
import CardOperationSection from '@/src/components/sections/card/CardOperationSection';
import ButtonSettings from '@/src/components/buttons/settings/ButtonSettings';

export default function Home() {
  return (
    <main>
      <Header />
      <ButtonSettings href="/config/raw-material" />
      <div>
        <div className="flex gap-6 justify-center mx-9 my-[34px]">
          <ButtonOperation
            title="Criar Ordem"
            description="Selecione Etapas para a Produção"
            href="/order/create"
          />
          <ButtonOperation
            title="Cadastrar Lote"
            description="Cadastro de Matérias Primas para Operação"
            href="/batch/create"
          />
          <ButtonOperation
            title="Saída de Produto Final"
            description="Cadastro de Produtos Finais"
            href="/out-final-product"
          />
        </div>
        {/* Linha divisória */}
        <hr className="border-greenHortti border-1 mx-4 md:mx-9" />

        <div className="flex flex-col lg:flex-row justify-center gap-8 my-8 px-4">
          <InventorySection />
          <CardOperationSection />
        </div>
        {/* Seções de operações e estoque */}
      </div>
    </main>
  );
}
