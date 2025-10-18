/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import ConfigNavbarComponent from '@/src/components/common/configNavbar';
import GenericConfig from '@/src/components/common/GenericConfig';
import Header from '@/src/components/common/header';
import StockModal from '@/src/components/common/modals/StockModal';
import DeleteModal from '@/src/components/common/modals/DeleteModal';
import { deleteStock, getAllStocks } from '@/src/services/stockService';
import { Stock } from '@/src/types/Stock';
import { useEffect, useState } from 'react';

export default function CreateStock() {
  const getStock = async (): Promise<Stock[]> => {
    const response = await getAllStocks();
    if (response.data.data) {
      return response.data.data;
    }
    return [];
  };

  const deleteItem = async (id: string) => {
    const success = await deleteStock(id);
  };

  useEffect(() => {
    getStock();
  }, []);

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
              width: 'w-1/3'
            }
          ]}
          getItems={getStock} // Função que busca os itens
          deleteItem={deleteItem} // Função que deleta o item
          AddModal={StockModal} // Abre modal de adicionar
          EditModal={StockModal} // Abre modal de editar
          DeleteModal={DeleteModal} // Abre modal de deletar
        />
      </ConfigNavbarComponent>
    </main>
  );
}
