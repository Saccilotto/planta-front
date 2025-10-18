import React from 'react';

import Image from 'next/image';

type Column<T> = {
  label?: string; // Rótulo para o cabeçalho da coluna
  key: keyof T; // Propriedade do item a ser exibida
  type?: 'text' | 'image'; // Tipo da coluna
};

type Props<T> = {
  items: T[]; // Array de itens do tipo genérico
  columns: Column<T>[]; // Definição das colunas
  onRemove?: (index: number) => void; // Função para remover um item
  scrollable?: boolean; // Se a lista é rolável
  extraStyle?: string; // Estilo adicional para o container da lista
};

export default function DefaultListItems<T>({
  items,
  columns,
  onRemove,
  scrollable = false,
  extraStyle = ''
}: Props<T>) {
  const isEditable = Boolean(onRemove);
  const hasHeader = columns.some(col => col.label);

  return (
    <div>
      {hasHeader && (
        <div className={'flex my-4 gap-4'}>
          {columns.map((col, idx) => (
            <span
              key={idx}
              className={`text-black font-bold ${columns.length > 1 ? 'w-1/' + columns.length : 'w-full'} text-center truncate`}
            >
              {col.label || ''}
            </span>
          ))}

          {isEditable && (
            <div className="flex justify-center invisible">
              <button className="text-red-600 font-semibold border border-red-600 rounded-full px-1.5 hover:bg-red-600 hover:text-white transition-colors">
                ✕
              </button>
            </div>
          )}
        </div>
      )}

      <div
        className={`h-auto ${scrollable ? 'overflow-auto max-h-64' : 'overflow-hidden'} ${extraStyle}`}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={'flex gap-4 items-center mb-4 pb-2 w-full'}
          >
            {columns.map((col, idx) => (
              <div
                key={idx}
                className={`text-black font-semibold ${columns.length > 1 ? 'text-center w-1/' + columns.length : 'text-left w-full'}  truncate`}
              >
                {col.type === 'image' ? (
                  <Image
                    src={String(item[col.key])}
                    alt={String(col.label || col.key)}
                    className="w-8 h-8 object-cover"
                  />
                ) : (
                  <span>{String(item[col.key])}</span>
                )}
              </div>
            ))}

            {isEditable && (
              <div className="flex justify-center">
                <button
                  className="text-red-600 font-semibold border border-red-600 rounded-full px-1.5 hover:bg-red-600 hover:text-white transition-colors"
                  onClick={() => onRemove && onRemove(index)}
                >
                  ✕
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
