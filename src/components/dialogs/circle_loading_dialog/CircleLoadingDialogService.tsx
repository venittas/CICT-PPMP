import { createRoot } from 'react-dom/client';
import CircleLoadingDialog, { type CircleLoadingDialogProps } from './CircleLoadingDialog';

const getDialogContainer = () => {
    let container = document.getElementById('global-dialog-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'global-dialog-container';
        container.className = 'fixed w-full inset-0 z-[9999] flex items-center justify-center pointer-events-none bg-transparent';
        document.body.appendChild(container);
    }
    return container;
};

type CircleLoadingDialogOptions = Omit<CircleLoadingDialogProps, 'isOpen' | 'onClose'>;

export const showCircleLoadingDialog = (options?: CircleLoadingDialogOptions) => {
    const container = getDialogContainer();
    const dialogWrapper = document.createElement('div');
    container.appendChild(dialogWrapper);

    const root = createRoot(dialogWrapper);
    let isMounted = true;

    const close = () => {
        if (!isMounted) return;
        isMounted = false;
        
        root.unmount();
        dialogWrapper.remove();
        
        if (container.childNodes.length === 0) {
            container.remove();
        }
    };

    root.render(
        <CircleLoadingDialog
            {...options}
            isOpen={true}
            onClose={close}
        />
    );

    return close; 
};