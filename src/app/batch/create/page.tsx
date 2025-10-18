'use client';
import Header from '@/src/components/common/header';
import CancelButton from '@/src/components/buttons/order/CancelButton';
import NumericInput from '@/src/components/common/inputs/NumericInput';
import DateInput from '@/src/components/common/inputs/DateInput';
import DynamicBox from '@/src/components/common/DynamicBox';
import DefaultInput from '@/src/components/common/inputs/DefaultInput';
import OnClickButton from '@/src/components/buttons/OnClickButton/DefaultOnClick';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import DefaultListItems from '@/src/components/common/lists/DefaultListItems';
import Image from 'next/image';
import ReturnIcon from '@/src/components/icons/return-icon.svg';
import { useForm } from 'react-hook-form';
import SelectInputCreateBatch from '@/src/components/batch-create/SelectInputCreateBatch';
import axiosInstance from '@/src/services/axiosInstance';

interface SelectInputProps {
  id: number;
  description: string;
}

interface BatchMaterial {
  sku: string;
  raw_material_description: string;
  quantity: number;
}

interface PostData {
  stock_moviment: string;
  stock_items: {
    product_id: number;
    quantity: number;
    unit_price: number;
    batch: string;
    sku: string;
    batch_expiration: string;
    supplier: number;
    stock_location_id: number;
  };
}

export default function CreateBatch() {
  const router = useRouter();
  const [typesMaterials, setTypesMaterials] = useState<SelectInputProps[]>([]);
  const [storageLocations, setStorageLocations] = useState<SelectInputProps[]>(
    []
  );
  const [batchId, setBatchId] = useState<string>('');
  const [batchMaterial, setBatchMaterial] = useState<BatchMaterial[]>([]);
  const { register, handleSubmit } = useForm<PostData>();

  const fetchStorageLocations = async () => {
    try {
      // Consuming the API
      const stocks: SelectInputProps[] = (
        await axiosInstance.get('/stock-locations')
      ).data.data;

      // Iterating over the response data
      setStorageLocations(stocks);
    } catch (error) {
      return null;
    }
  };

  const fetchTypesMaterials = async () => {
    try {
      // Consuming the API
      const typesMaterials: SelectInputProps[] = (
        await axiosInstance.get('/products/raw-material-short')
      ).data.data;

      // Iterating over the response data
      setTypesMaterials(typesMaterials);
    } catch (error) {
      return null;
    }
  };

  const fetchBatchMaterials = async () => {
    try {
      // Consumindo a API
      const batchs: BatchMaterial[] = (
        await axiosInstance.get('/stock/batchs-raw')
      ).data.data;

      // Criar um objeto para rastrear o último lote de cada item
      const latestBatchByDescription: { [key: string]: BatchMaterial } = {};

      // Iterar sobre os lotes e armazenar o mais recente de cada descrição
      batchs.forEach(batch => {
        const description = batch.raw_material_description;
        latestBatchByDescription[description] = batch;
      });

      // Extrair os valores do objeto para obter a lista de lotes mais recentes
      const uniqueLatestBatches = Object.values(latestBatchByDescription);

      // Ajustar o batchId e pegar os primeiros 5 itens, se necessário
      const batchLength = batchs.length + 1;
      setBatchId(`L01/${batchLength}`);
      setBatchMaterial(uniqueLatestBatches.slice(0, 5));
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    fetchStorageLocations();
    fetchTypesMaterials();
    fetchBatchMaterials();
  }, []);

  async function handleFormBatch(data: PostData) {
    try {
      data.stock_moviment = 'INPUT';
      data.stock_items.sku = batchId;
      // Mocking the data to be sent
      data.stock_items.batch = batchId;
      data.stock_items.supplier = 1;

      const request = prepareRequest(data);
      await axiosInstance.post('/stock', request);

      const newBatchMaterial: BatchMaterial = {
        sku: data.stock_items.sku,
        raw_material_description:
          (await typesMaterials.find(
            material => material.id == data.stock_items.product_id
          )?.description) ?? 'não achei',
        quantity: data.stock_items.quantity
      };
      setBatchMaterial(oldItems => [...oldItems, newBatchMaterial]);

      window.location.reload();
    } catch (error) {
      console.error('Error posting data:', error);
      return null;
    }
  }

  function prepareRequest(data: PostData) {
    return {
      stock_moviment: data.stock_moviment,
      stock_items: [
        {
          product_id: Number(data.stock_items.product_id),
          quantity: Number(data.stock_items.quantity),
          unit_price: Number(data.stock_items.unit_price),
          batch: data.stock_items.batch,
          sku: data.stock_items.sku,
          batch_expiration: new Date(data.stock_items.batch_expiration),
          supplier: Number(data.stock_items.supplier),
          stock_location_id: Number(data.stock_items.stock_location_id)
        }
      ]
    };
  }

  return (
    <main className="">
      <Header />
      <form
        className="w-full flex gap-14 py-7 px-14 justify-center"
        onSubmit={handleSubmit(handleFormBatch)}
      >
        <div className="flex flex-col w-full max-w-[603px] gap-y-11 start">
          <button
            className=" text-greenHortti return-button "
            onClick={() => router.push('/home')}
          >
            <Image src={ReturnIcon} alt="Retornar" width={14} height={14} />
          </button>
          <DynamicBox title="Cadastro de Lote">
            <SelectInputCreateBatch
              label="Matéria Prima"
              placeholder="Selecione o tipo"
              options={typesMaterials}
              register={register('stock_items.product_id')}
            />
            <DefaultInput
              label="Fornecedor"
              placeholder="Digite o nome do fornecedor"
              register={register('stock_items.supplier')}
            />
            <NumericInput
              label="Preço custo"
              placeholder="R$ 0,00"
              register={register('stock_items.unit_price')}
            />
          </DynamicBox>
          <DynamicBox title="Últimos Lotes Cadastrados" extraStyle="ip-2">
            <DefaultListItems
              items={batchMaterial}
              columns={[
                // { key: 'sku', type: 'text' },
                {
                  label: 'Materia Prima',
                  key: 'raw_material_description',
                  type: 'text'
                },
                { label: 'Quantidade', key: 'quantity', type: 'text' }
              ]}
            />
          </DynamicBox>
        </div>
        <div className="w-[1px] h-auto border border-greenHortti " />
        <div className="flex flex-col gap-y-16 w-full max-w-[603px]">
          <DynamicBox title=" ">
            <NumericInput
              label="Quantidade"
              placeholder="Digite a quantidade"
              register={register('stock_items.quantity')}
            />
            <DateInput
              label="Data de entrada"
              placeholder="Selecione a data"
              register={register('stock_items.batch_expiration')}
            />
            <SelectInputCreateBatch
              label="Local de armazenamento"
              placeholder="Selecione o local"
              options={storageLocations}
              register={register('stock_items.stock_location_id')}
            />
          </DynamicBox>
          <DynamicBox extraStyle="text-center flex flex-col gap-y-6">
            <p className="text-graySubtitleHortti text-sm">
              Identificador gerado automaticamente
            </p>
            <h3 className="text-black text-2xl font-bold">{batchId}</h3>
          </DynamicBox>
          <div className="flex w-auto justify-between gap-4">
            <div className="w-full h-auto flex space-x-2">
              <OnClickButton
                className={
                  'w-full h-auto py-2 px-4 rounded-lg flex items-center justify-items-center bg-greenHortti text-white  hover:bg-green-700'
                }
                title="Finalizar"
                image="/check-icon.svg"
                type="submit"
                onClick={() => alert('Lote cadastrado com sucesso!')}
              />
              <CancelButton
                title="Cancelar"
                image="/trash-icon.svg"
                href="/home"
              />
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
