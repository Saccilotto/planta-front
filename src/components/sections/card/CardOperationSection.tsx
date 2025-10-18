'use client'; // Marcar o componente como Client Component

import { useEffect, useState } from 'react';
import CardOperation from '../../cards/operation/CardOperation';
import { getOrders } from '@/src/services/order.service';

export default function OrdersPage() {
  const [orders, setOrders] = useState<
    { id: string; description: string; Production_Status: string }[]
  >([]);

  useEffect(() => {
    // Função para carregar as ordens
    const fetchOrders = async () => {
      const response = await getOrders();
      setOrders(response);
    };

    fetchOrders();
  }, []);

  return (
    <div className="space-y-8 lg:w-1/2">
      <h2 className="text-3xl text-black text-center lg:text-left">
        Ordens em Andamento
      </h2>
      {/* Colunas responsivas para operações */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {orders
          .filter(
            order =>
              order.Production_Status === 'IN_PROGRESS' ||
              order.Production_Status === 'FINISHED'
          )
          .map(order => (
            <div
              key={order.id}
              className={
                order.Production_Status === 'IN_PROGRESS'
                  ? 'order-last sm:order-first'
                  : 'order-first sm:order-last'
              }
            >
              <CardOperation
                title={order.description}
                type={
                  order.Production_Status === 'IN_PROGRESS'
                    ? 'inProgress'
                    : 'finished'
                }
                id={order.id}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
