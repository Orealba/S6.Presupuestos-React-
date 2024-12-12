import { useEffect } from 'react';
import { Modal } from 'flowbite';

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
  useEffect(() => {
    // Inicializar el modal
    const $targetEl = document.getElementById(modalId);
    const $triggerEl = document.querySelector(
      `[data-modal-target="${modalId}"]`,
    );
    const $closeEl = document.querySelector(`[data-modal-hide="${modalId}"]`);

    if ($targetEl) {
      const modal = new Modal($targetEl, {
        backdrop: 'dynamic',
        closable: true,
      });

      // Abrir modal al hacer clic en el trigger
      $triggerEl?.addEventListener('click', () => modal.show());

      // Cerrar modal al hacer clic en el botón de cerrar
      $closeEl?.addEventListener('click', () => modal.hide());
    }
  }, [modalId]);

  return (
    <>
      <button
        data-modal-target={modalId}
        type="button"
        className="flex items-center justify-center w-5 h-5 mr-2 text-xs font-medium text-white bg-gray-700 rounded-full hover:bg-gray-600 dark:hover:bg-gray-500 focus:outline-none">
        i
      </button>

      <div
        id={modalId}
        tabIndex={-1}
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {title}
              </h3>
              <button
                type="button"
                data-modal-hide={modalId}
                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4 md:p-5">
              <p className="text-gray-500 dark:text-gray-400">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
