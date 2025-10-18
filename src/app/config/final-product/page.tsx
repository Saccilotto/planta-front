'use client';
import ConfigNavbarComponent from '@/src/components/common/configNavbar';
import GenericConfig from '@/src/components/common/GenericConfig';
import Header from '@/src/components/common/header';
import DeleteModal from '@/src/components/common/modals/DeleteModal';
import FinalProductModal from '@/src/components/common/modals/FinalProductModal';
import {
  deleteFinalProduct,
  getListFinalProduct
} from '@/src/services/finalProductService';

export default function createFinalProduct() {
  // Função que retorna os itens da lista
  const getList = async () => {
    try {
      return await getListFinalProduct();
    } catch (error) {
      return [];
    }
  };
  const deleteItem = async (_id: string) => {
    await deleteFinalProduct(_id);
  };

  return (
    <main>
      <Header />
      <ConfigNavbarComponent>
        <GenericConfig
          columns={[
            {
              label: 'Descrição',
              key: 'description',
              type: 'text',
              width: 'w-1/4'
            },
            {
              label: 'Categoria',
              key: 'category',
              type: 'text',
              width: 'w-1/4'
            },
            {
              label: 'Qnt. lotes',
              key: 'batch_quantity',
              type: 'text',
              width: 'w-1/4'
            }
          ]}
          getItems={getList} // Função que busca os itens
          deleteItem={deleteItem} // Função que deleta o item
          AddModal={FinalProductModal} // Abre modal de adicionar
          EditModal={FinalProductModal} // Abre modal de editar
          DeleteModal={DeleteModal} // Abre modal de deletar
        />
      </ConfigNavbarComponent>
    </main>
  );
}
