/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import ConfigNavbarComponent from '@/src/components/common/configNavbar';
import GenericConfig from '@/src/components/common/GenericConfig';
import Header from '@/src/components/common/header';
import StepModal from '@/src/components/common/modals/StepModal';
import DeleteModal from '@/src/components/common/modals/DeleteModal';
import { deleteStep, getAllSteps } from '@/src/services/stepService';
import { Step } from '@/src/types/Step';
import { useEffect, useState } from 'react';

export default function CreateStep() {
  const getStep = async (): Promise<Step[]> => {
    const response = await getAllSteps();
    if (response.data.data) {
      return response.data.data;
    }
    return [];
  };

  const deleteItem = async (id: string) => {
    const success = await deleteStep(id);
  };

  useEffect(() => {
    getStep();
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
          getItems={getStep} // Função que busca os itens
          deleteItem={deleteItem} // Função que deleta o item
          AddModal={StepModal} // Abre modal de adicionar
          EditModal={StepModal} // Abre modal de editar
          DeleteModal={DeleteModal} // Abre modal de deletar
        />
      </ConfigNavbarComponent>
    </main>
  );
}
