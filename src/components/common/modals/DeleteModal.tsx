interface ModalProps {
  onClose?: () => void; // Função chamada para fechar o modal
  onConfirm?: () => void; // Função chamada ao confirmar a ação
  item?: string; // Item opcional para exibição ou manipulação
}

export default function DeleteModal({ onClose, onConfirm, item }: ModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/3 text-black text-center">
        <h2 className="text-xl font-bold mb-4">{'Deletar: ' + item}</h2>
        <p>
          Tem certeza de que deseja deletar o item: {item}? Esta ação não pode
          ser desfeita.
        </p>
        <div className="flex justify-center mt-4 space-x-4">
          <button
            onClick={onClose}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg hover:bg-opacity-90 bg-red-600 text-white hover:bg-red-700"
          >
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
}
