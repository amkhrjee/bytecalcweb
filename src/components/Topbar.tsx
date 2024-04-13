import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import BugReportOutlinedIcon from "@mui/icons-material/BugReportOutlined";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import CodeIcon from "@mui/icons-material/Code";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TableRowsOutlinedIcon from "@mui/icons-material/TableRowsOutlined";
import Mode from "./Mode";
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Listbox,
  ListboxItem,
  Chip,
  Link,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
import { useState } from "react";

export default function Topbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Mode />
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="dark text-foreground bg-background">
          <Listbox aria-label="Actions">
            <ListboxItem
              title="Truth Table Generator"
              key="truth"
              startContent={<TableRowsOutlinedIcon />}
              endContent={<Chip color="secondary">Coming Soon</Chip>}
            />
            {/* This opens up a modal to let the user choose from light, dark or system default themes */}
            <ListboxItem
              title="Change Theme"
              key="theme"
              startContent={<ColorLensOutlinedIcon />}
              onPress={() => {
                onOpen();
                setIsMenuOpen(false);
              }}
            />
            <ListboxItem
              title="Report Bug"
              key="bug"
              startContent={<BugReportOutlinedIcon />}
            />
            <ListboxItem
              title="Request Feature"
              key="feature"
              startContent={<AutoGraphIcon />}
            />
            <ListboxItem
              title="View Source"
              key="source"
              startContent={<CodeIcon />}
            />
            <ListboxItem
              title="Sponsor"
              key="sponsor"
              startContent={<FavoriteBorderIcon />}
            />
          </Listbox>
          <Chip>
            Made by <Link href="https://bento.me/amkhrjee">@amkhrjee</Link>
          </Chip>
        </NavbarMenu>
      </Navbar>
      <Modal
        isOpen={isOpen}
        placement="center"
        onOpenChange={onOpenChange}
        className="dark text-foreground bg-background "
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Change Theme
              </ModalHeader>
              <ModalBody>
                <RadioGroup
                // value={modalPlacement}
                // onValueChange={setModalPlacement}
                >
                  <Radio value="light">Light Mode</Radio>
                  <Radio value="dark">Dark Mode</Radio>
                  <Radio value="system">Follow System Theme</Radio>
                </RadioGroup>
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
    </>
  );
}
