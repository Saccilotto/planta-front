import React from 'react';

interface DefaultModalProps {
  isVisible: boolean;
  onClose?: () => void;
  title?: string;
  children: React.ReactNode;
}

const DefaultModal: React.FC<DefaultModalProps> = ({
  isVisible,
  onClose,
  title,
  children
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className=" bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-4">
        {/* Título do Modal */}
        {<h2 className="text-2xl text-black font-semibold mb-4">{title}</h2>}

        {/* Conteúdo do Modal */}
        <div className="mb-4 max-h-72 overflow-y-auto">{children}</div>

        {/* Botão de Fechar Modal */}
        <div className="flex justify-center">
          <button
            className="bg-greenHortti text-white px-4 py-2 rounded-lg"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DefaultModal;
