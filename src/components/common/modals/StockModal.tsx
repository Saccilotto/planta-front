import { useEffect, useState } from 'react';
import GenericModal from './GenericModal';
import DefaultInput from '../inputs/DefaultInput';
import DynamicBox from '../DynamicBox';
import { createStock, patchStock } from '@/src/services/stockService';

interface ModalProps {
  onClose: () => void;
  onConfirm: () => void;
  item?: { id?: string; description: string };
}

export default function StockModal({ onConfirm, onClose, item }: ModalProps) {
  const [description, setDescription] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (item) {
      setDescription(item.description);
    }
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
      item = { description: description };
      await createStock(item);
    } else {
      item.description = description;

      await patchStock(item);
    }
    onConfirm();
  };

  return (
    <GenericModal
      title={(item == null ? 'Cadastro' : 'Edição') + ' de Categoria'}
      onClose={onClose}
      onConfirm={handleSave}
    >
      <DynamicBox extraStyle="mb-5">
        <form className="flex flex-col gap-4">
          <DefaultInput
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
            label="Descrição"
            error={error}
          />
        </form>
      </DynamicBox>
    </GenericModal>
  );
}
