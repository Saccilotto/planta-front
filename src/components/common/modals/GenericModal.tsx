import React from 'react';
import AcceptButton from '../../buttons/order/AcceptButton';
import CancelButton from '../../buttons/order/CancelButton';

interface ModalProps {
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
  onConfirm?: () => void;
}

export default function GenericModal({
  title,
  children,
  onClose,
  onConfirm
}: ModalProps) {
  const formattedTitle = title?.trim() ? title : '\u00A0';

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-lg w-1/2 max-h-[90vh] overflow-hidden">
        {' '}
        {/* Define max-height and prevent overflow */}
        {/* Cabeçalho fixo */}
        <div className="p-4 border-b">
          {title && (
            <h2 className="text-black text-2xl font-bold">{formattedTitle}</h2>
          )}
        </div>
        {/* Conteúdo rolável */}
        <div className="p-8 overflow-y-auto max-h-[70vh]">{children}</div>
        {/* Rodapé com botões */}
        <div className="flex justify-end space-x-4 p-4 border-t">
          {onConfirm && (
            <AcceptButton
              title="Finalizar"
              image="/check-icon.svg"
              onClick={onConfirm}
            />
          )}
          {onClose && (
            <CancelButton
              title="Cancelar"
              image="/trash-icon.svg"
              onClick={onClose}
            />
          )}
        </div>
      </div>
    </div>
  );
}
