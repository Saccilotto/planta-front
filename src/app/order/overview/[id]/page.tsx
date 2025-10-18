/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import DynamicBox from '@/src/components/common/DynamicBox';
import StepButton from '@/src/components/common/StepButton';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from '@/src/components/common/header';
import { stepsByProductId } from '@/src/services/stepService';
import { getOrderById } from '@/src/services/order.service';
import ReturnIcon from '@/src/components/icons/return-icon.svg';
import Image from 'next/image';
import { FullOrder } from '@/src/types/Order';

export default function OrderOverview() {
  const router = useRouter();
  const { id } = useParams();
  const idString = Array.isArray(id) ? id[0] : id;
  const [productId, setProductId] = useState<number>();
  const [orderName, setOrderName] = useState('');
  const [order, setOrder] = useState<FullOrder>();
  const [steps, setSteps] = useState<string[]>([]);

  const orderById = async (id: string) => {
    const resp = await getOrderById(id);
    setOrder(resp!);
  };

  const getStepsByProductId = async (id: number) => {
    // Converte o objeto em um array de Steps
    const idToString = id.toString();
    const resp = await stepsByProductId(idToString);
    const stepsArray: string[] = Object.entries(
      resp.data.data.production_steps
    ).map(
      ([_, value]) => (value as { description: string }).description // Extrai apenas a descrição
    );
    setSteps(stepsArray);
  };

  useEffect(() => {
    if (order) {
      setProductId(order.final_product_id);
      setOrderName(order.description);
    }
  }, [order]);

  useEffect(() => {
    if (productId) {
      getStepsByProductId(productId);
    }
  }, [productId]);

  useEffect(() => {
    orderById(idString);
  }, []);

  return (
    <main>
      <Header />
      <button
        className=" text-greenHortti  pr-2 mt-2.5 ml-2.5"
        onClick={() => router.push('/home')}
      >
        <Image src={ReturnIcon} alt="Retornar" width={14} height={14} />
      </button>
      <div className="w-full h-full p-2.5">
        <DynamicBox
          title={`Ordem selecionada: ${orderName}`}
          extraStyle="w-full"
        >
          <p className="text-gray-400">Selecione a etapa</p>
          <div className="flex gap-4 h-96 max-sm:flex-col">
            {steps.map(step => (
              <StepButton
                key={step}
                step={step} // Passa o Step como string
                onClick={() =>
                  router.push(
                    `/order/overview/${id}/${encodeURIComponent(step)}?order=${encodeURIComponent(
                      JSON.stringify(order)
                    )}`
                  )
                }
              />
            ))}
          </div>
        </DynamicBox>
      </div>
    </main>
  );
}
