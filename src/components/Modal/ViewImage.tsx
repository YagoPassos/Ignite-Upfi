import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
  Flex,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} >

      <ModalOverlay />

      <ModalContent bgColor="pGray.800" w="max" >

        <ModalBody p="0">
          <Image src={imgUrl} sizes="full"
            maxW={['300px', '500px', '900px']}
            maxH={['350px', '450px', '600px']}
          />
        </ModalBody>

        <ModalFooter p="0">
          <Flex w="full" justify="left" align="left" py={2} px={2.5}>
            <Link href={imgUrl} isExternal >
              Abrir original
            </Link>
          </Flex>

        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
