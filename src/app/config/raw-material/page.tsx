'use client';
import ConfigNavbarComponent from '@/src/components/common/configNavbar';
import Header from '@/src/components/common/header';
import GenericConfig from '@/src/components/common/GenericConfig';
import DeleteModal from '@/src/components/common/modals/DeleteModal';
import RawMaterialModal from '@/src/components/common/modals/RawMaterialModal';
import {
  deleteRawMaterial,
  getListRawMaterial
} from '@/src/services/rawMaterialService';

export default function RawMaterialConfig() {
  // Função que retorna os itens da lista
  const getList = async () => {
    try {
      return await getListRawMaterial();
    } catch (error) {
      return [];
    }
  };
  const deleteItem = async (_id: string) => {
    await deleteRawMaterial(_id);
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
          AddModal={RawMaterialModal} // Abre modal de adicionar
          EditModal={RawMaterialModal} // Abre modal de editar
          DeleteModal={DeleteModal} // Abre modal de deletar
        />
      </ConfigNavbarComponent>
    </main>
  );
}
