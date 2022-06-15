export interface ModalProps {
  title?: string;
  onOkClick?: () => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  showButtons?: boolean;
  className?: string;
  okLabel?: string;
  cancelLabel?: string;
}
