import Image from 'next/image';
import React, { useState } from 'react';

type Props = {
  title?: string;
  children: React.ReactNode;
  extraStyle?: string;
  collapsible?: boolean;
};

export default function DynamicBox({
  title,
  children,
  extraStyle,
  collapsible
}: Props) {
  // If we use only spaces, the title will be render with the same height as if it had content
  const formattedTitle = title?.trim() ? title : '\u00A0';
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    const arrowImage = document.getElementById('arrow');
    if (arrowImage) {
      arrowImage.style.transform = isVisible
        ? 'rotate(-90deg)'
        : 'rotate(0deg)';
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {title && (
        <div className="flex justify-start items-center">
          {collapsible && (
            <button
              onClick={toggleVisibility}
              className="ml-4 text-greenHortti mr-3"
            >
              <Image
                className="transform transition-transform"
                id="arrow"
                src="/arrow-down.svg"
                alt="Seta para baixo"
                width={24}
                height={24}
              />
            </button>
          )}
          <h2 className="text-black text-2xl font-bold">{formattedTitle}</h2>
        </div>
      )}
      {(isVisible || !collapsible) && (
        <div
          className={`w-auto h-auto border-2 rounded-lg border-greenHortti ${extraStyle?.includes('ip-') ? extraStyle.replace('i', '') : extraStyle + ' p-5'}`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
