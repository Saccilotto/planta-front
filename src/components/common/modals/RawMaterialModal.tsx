import { useEffect, useState } from 'react';
import GenericModal from './GenericModal';
import DefaultInput from '../inputs/DefaultInput';
import DynamicBox from '../DynamicBox';
import Image from 'next/image';
import SelectInput from '../inputs/SelectInput';
import {
  createRawMaterial,
  patchRawMaterial
} from '@/src/services/rawMaterialService';
import { getCategories } from '@/src/services/categoryService';

interface Props {
  onClose: () => void;
  onConfirm: () => void;
  item?: {
    id?: string;
    description: string;
    category_id: number;
    category?: string;
  };
}

export default function RawMaterialModal({ onClose, onConfirm, item }: Props) {
  const [description, setDescricao] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [categorySelectList, setCategorySelectList] = useState<
    { id: string; description: string }[]
  >([]);

  useEffect(() => {
    const loadItem = async () => {
      try {
        const data = await getCategories();
        setCategorySelectList(data); // Armazene as categorias no estado

        // Se houver um item, preencha os campos de descrição e categoria
        if (item != null) {
          setDescricao(item.description ?? '');
          setCategory(
            data.find(x => x.description == item?.category)?.id ?? ''
          );
        }
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
      }
    };

    loadItem();
  }, [item]);

  const validateFields = (): boolean => {
    if (description.trim() === '') {
      setError('O campo descrição é obrigatório.');
      return false;
    }

    setError(null);
    return true;
  };

  const handleSave = async () => {
    if (!validateFields()) {
      return;
    }
    if (item == null) {
      item = { description: description, category_id: Number(category) };
      await createRawMaterial(item);
    } else {
      item.description = description;
      item.category_id = Number(category);

      await patchRawMaterial(item);
    }
    onConfirm();
  };

  return (
    <GenericModal
      title={(item == null ? 'Cadastro' : 'Edição') + ' de Matéria prima'}
      onClose={onClose}
      onConfirm={handleSave}
    >
      <DynamicBox extraStyle="mb-5">
        <DefaultInput
          placeholder="Descrição"
          value={description}
          onChange={e => setDescricao(e.target.value)}
          label="Descrição"
          error={error}
        />
        <SelectInput
          label="Categoria"
          value={category}
          placeholder="Selecione a categoria"
          onChange={e => setCategory(e.target.value)}
          options={categorySelectList.map(cat => ({
            value: cat.id,
            label: cat.description
          }))}
        />
      </DynamicBox>
      <DynamicBox extraStyle="mb-5">
        <p className="text-black text-2xl font-bold">Adicionar Imagem</p>
        <p className="text-gray-400">Selecione uma Imagem de no máximo 20mb</p>
        <div className="h-40 w-full">
          <Image
            src="/fruits.svg"
            alt="Imagem do Produto"
            className="mt-2 w-full h-full object-cover rounded-xl"
            layout="fixed"
            width={500}
            height={500}
          />
        </div>
      </DynamicBox>
    </GenericModal>
  );
}
