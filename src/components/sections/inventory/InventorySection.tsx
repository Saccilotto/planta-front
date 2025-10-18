import ButtonStock from '../../buttons/stock/ButtonStock';

export default function InventorySection() {
  return (
    <div className="lg:w-auto flex flex-col gap-y-6">
      <h2 className="text-3xl text-[#000000] text-center lg:text-left">
        Estoques
      </h2>
      {/* Ajuste para garantir responsividade em pequenos dispositivos */}
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-x-8">
        <ButtonStock
          description="Estoque de Matéria Prima"
          image="/fruits.svg"
          href="/raw-material/stock"
        />
        <ButtonStock
          description="Estoque de Produtos Finais"
          image="/honey-comb.svg"
          href="/final-product/stock"
        />
      </div>
    </div>
  );
}
