import { useEffect, useState } from 'react';
import GenericModal from './GenericModal';
import DefaultInput from '../inputs/DefaultInput';
import { Button } from '@headlessui/react';
import DynamicBox from '../DynamicBox';
import SelectInput from '../inputs/SelectInput';
import DefaultListItems from '../lists/DefaultListItems';
import Image from 'next/image';
import { getCategories } from '@/src/services/categoryService';
import { getSelectRawMaterial } from '@/src/services/rawMaterialService';
import { getSteps } from '@/src/services/stepService';
import {
  createFinalProduct,
  patchFinalProduct
} from '@/src/services/finalProductService';

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

export default function FinalProductModal({ onClose, onConfirm, item }: Props) {
  const [description, setDescription] = useState('');
  const [rawMaterialSelected, setRawMaterialSelected] = useState('');
  const [category, setCategory] = useState('');
  const [stepSelected, setStepSelected] = useState('');
  const [stepSelectList, setStepSelectList] = useState<
    { id: string; description: string }[]
  >([]);
  const [categorySelectList, setCategorySelectList] = useState<
    { id: string; description: string }[]
  >([]);
  const [rawMaterials, setRawMaterials] = useState<
    { id: string; description: string }[]
  >([]);
  const [rawMaterialSelectList, setRawMaterialSelectList] = useState<
    { id: string; description: string }[]
  >([]);
  const [steps, setSteps] = useState<{ id: string; description: string }[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadItem = async () => {
      try {
        const data = await getCategories();
        setCategorySelectList(data); // Armazene as categorias no estado

        const raw = await getSelectRawMaterial();
        setRawMaterialSelectList(raw); // Armazene as categorias no estado

        const step = await getSteps();
        setStepSelectList(step); // Armazene as categorias no estado

        // Se houver um item, preencha os campos de descrição e categoria
        if (item != null) {
          setDescription(item.description ?? '');
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
      await createFinalProduct(item);
    } else {
      item.description = description;
      item.category_id = Number(category);

      await patchFinalProduct(item);
    }
    onConfirm();
  };
  const isFormValidAddType = rawMaterialSelected != '';
  const isFormValidAddSteps = stepSelected != '';

  const handleAddRawMaterial = (id: string) => {
    setRawMaterials([
      ...rawMaterials,
      {
        id: id,
        description:
          rawMaterialSelectList.find(x => x.id == id)?.description ?? ''
      }
    ]);
    setRawMaterialSelectList(rawMaterialSelectList.filter(x => x.id != id));
    setRawMaterialSelected('');
  };

  const handleAddSteps = (id: string) => {
    setSteps([
      ...steps,
      {
        id: id,
        description: stepSelectList.find(x => x.id == id)?.description ?? ''
      }
    ]);
    setStepSelectList(stepSelectList.filter(x => x.id != id));
    setStepSelected('');
  };

  const handleRemoveRawMaterial = (indexToRemove: number) => {
    setRawMaterialSelectList([
      ...rawMaterialSelectList,
      rawMaterials.find((_, index) => index == indexToRemove) ?? {
        id: '',
        description: ''
      }
    ]);
    setRawMaterials(rawMaterials.filter((_, index) => index !== indexToRemove));
  };

  const handleRemoveSteps = (indexToRemove: number) => {
    setStepSelectList([
      ...stepSelectList,
      steps.find((_, index) => index == indexToRemove) ?? {
        id: '',
        description: ''
      }
    ]);
    setSteps(steps.filter((_, index) => index !== indexToRemove));
  };
  return (
    <GenericModal
      title={(item == null ? 'Cadastro' : 'Edição') + ' de Produto Final'}
      onClose={onClose}
      onConfirm={handleSave}
    >
      <DynamicBox extraStyle="mb-5">
        <DefaultInput
          placeholder="Descrição"
          value={description}
          onChange={e => setDescription(e.target.value)}
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
      <DynamicBox title="Composição" extraStyle="mb-5">
        <SelectInput
          label="Materia Prima"
          value={rawMaterialSelected}
          onChange={e => setRawMaterialSelected(e.target.value)}
          placeholder="Selecione o tipo"
          options={rawMaterialSelectList.map(cat => ({
            value: cat.id,
            label: cat.description
          }))}
        />
        <Button
          className={`border rounded-lg w-full p-2 mt-2 mb-4 ${
            isFormValidAddType
              ? 'bg-greenHortti text-white'
              : 'bg-gray-100 text-black cursor-not-allowed border-x-gray-300'
          }`}
          disabled={!isFormValidAddType}
          onClick={() => handleAddRawMaterial(rawMaterialSelected)}
        >
          Adicionar
        </Button>
        <DefaultListItems
          items={rawMaterials}
          columns={[{ key: 'description', type: 'text' }]}
          scrollable
          onRemove={handleRemoveRawMaterial}
        />
      </DynamicBox>
      <DynamicBox title="Processo de produção" extraStyle="mb-5">
        <SelectInput
          label="Etapa"
          value={stepSelected}
          onChange={e => setStepSelected(e.target.value)}
          placeholder="Selecione a etapa"
          options={stepSelectList.map(cat => ({
            value: cat.id,
            label: cat.description
          }))}
        />
        <Button
          className={`border rounded-lg w-full p-2 mt-2 mb-4 ${
            isFormValidAddSteps
              ? 'bg-greenHortti text-white'
              : 'bg-gray-100 text-black cursor-not-allowed border-x-gray-300'
          }`}
          disabled={!isFormValidAddSteps}
          onClick={() => handleAddSteps(stepSelected)}
        >
          Adicionar
        </Button>
        <DefaultListItems
          items={steps}
          columns={[{ key: 'description', type: 'text' }]}
          scrollable
          onRemove={handleRemoveSteps}
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
