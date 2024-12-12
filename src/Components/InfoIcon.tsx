import { useState, useRef, useEffect } from 'react';

interface InfoIconProps {
  modalId: string;
  title: string;
  description: string;
}

export const InfoIcon: React.FC<InfoIconProps> = ({
  modalId,
  title,
  description,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      modalRef.current?.focus();
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      triggerRef.current?.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(true)}
        type="button"
        aria-label="Más información"
        className="flex items-center justify-center w-5 h-5 mr-2 text-xs font-medium text-white bg-gray-700 rounded-full hover:bg-gray-600 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
        i
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20"
          onClick={() => setIsOpen(false)}
          role="presentation">
          <div
            ref={modalRef}
            role="dialog"
            aria-labelledby={`${modalId}-title`}
            aria-modal="true"
            className="relative bg-white rounded-lg border border-gray-200 shadow-lg max-w-md w-full mx-4 p-6 focus:outline-none"
            onClick={(e) => e.stopPropagation()}
            tabIndex={-1}>
            <h3
              id={`${modalId}-title`}
              className="text-xl font-bold text-gray-900 mb-2">
              {title}
            </h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      )}
    </>
  );
};
