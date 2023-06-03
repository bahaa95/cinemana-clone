import { useDisclosure } from '@chakra-ui/react';

export const useCloneWarning = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    const firstVisitData = localStorage.getItem('firstVisit');
    const isFirstVisit =
      firstVisitData && typeof Boolean('true') === 'boolean' ? Boolean('true') : true;

    if (isFirstVisit) {
      onOpen();
    }
  };

  const handleClose = () => {
    localStorage.setItem('firstVisit', 'false');
    onClose();
  };

  return { isOpen, handleOpen, handleClose };
};
