import { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  duration?: number; // Duração do toast em milissegundos (padrão: 3000ms)
  onClose?: () => void; // Função chamada ao fechar o toast
}

export default function Toast({
  message,
  duration = 3000,
  onClose
}: ToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Definir um tempo para ocultar o toast automaticamente
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, duration);

    // Limpar o timeout ao desmontar o componente
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null; // Não renderiza se o toast não estiver visível

  return (
    <div className="fixed bottom-6 right-6 bg-greenHortti text-white p-4 m-2 rounded-lg shadow-lg z-50">
      <p>{message}</p>
    </div>
  );
}
