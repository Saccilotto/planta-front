/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import ConfigNavbarComponent from '@/src/components/common/configNavbar';
import GenericConfig from '@/src/components/common/GenericConfig';
import Header from '@/src/components/common/header';
import CategoryModal from '@/src/components/common/modals/CategoryModal';
import DeleteModal from '@/src/components/common/modals/DeleteModal';
import {
  deleteCategory,
  getAllCategories
} from '@/src/services/categoryService';
import { Category } from '@/src/types/Category';
import { useEffect, useState } from 'react';

export default function CreateCategory() {
  const getCategory = async (): Promise<Category[]> => {
    const response = await getAllCategories();
    if (response.data.data) {
      return response.data.data;
    }
    return [];
  };

  const deleteItem = async (id: string) => {
    const success = await deleteCategory(id);
  };

  useEffect(() => {
    getCategory();
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
          getItems={getCategory} // Função que busca os itens
          deleteItem={deleteItem} // Função que deleta o item
          AddModal={CategoryModal} // Abre modal de adicionar
          EditModal={CategoryModal} // Abre modal de editar
          DeleteModal={DeleteModal} // Abre modal de deletar
        />
      </ConfigNavbarComponent>
    </main>
  );
}
