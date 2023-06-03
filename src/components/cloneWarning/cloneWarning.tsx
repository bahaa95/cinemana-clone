import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@chakra-ui/react';
import { Text } from 'src/components';
import { CloneWarningProps } from './types';

export const CloneWarning: React.FC<CloneWarningProps> = ({ isOpen, handleClose }) => {
  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={handleClose}
        isCentered
        size={'2xl'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Warning!</ModalHeader>
          <ModalBody>
            <Text className="text-lg">
              This is not real app it is just clone for my favorite app to watch movies cinemana. I
              built this clone to test my skills in web development. Thanks for visited it :)
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleClose}>Ok</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
