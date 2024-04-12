import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";

export default function Display() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Card>
      <CardHeader className="flex justify-between">
        <p>Last Ans: 123.34</p>
        <Button isIconOnly aria-label="history" onPress={() => onOpen()}>
          <RestoreOutlinedIcon />
        </Button>
      </CardHeader>
      <CardBody>
        <input className="outline-none border-none text-9xl p-0 h-fit w-full bg-inherit text-right font-inherit" />
      </CardBody>
      <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">History</ModalHeader>
              <ModalBody>
                <h1>History goes here...</h1>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </Card>
  );
}
