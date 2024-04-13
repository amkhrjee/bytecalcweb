import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import BugReportOutlinedIcon from "@mui/icons-material/BugReportOutlined";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import CodeIcon from "@mui/icons-material/Code";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TableRowsOutlinedIcon from "@mui/icons-material/TableRowsOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
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
              endContent={<OpenInNewOutlinedIcon />}
              target="_blank"
              href="mailto:aniruddha.mukherji@outlook.com?subject=ByteCalcWeb%20Bug%20Report&body=Describe%20the%20bug%20or%20attach%20a%20screenshot.%20I'll%20try%20to%20fix%20it%20asap."
            />
            <ListboxItem
              title="Request Feature"
              key="feature"
              startContent={<AutoGraphIcon />}
              endContent={<OpenInNewOutlinedIcon />}
              target="_blank"
              href="mailto:aniruddha.mukherji@outlook.com?subject=ByteCal%20Feature%20Request&body=What%20feature%20do%20you%20want?"
            />
            <ListboxItem
              title="View Source Code"
              key="source"
              startContent={<CodeIcon />}
              endContent={<OpenInNewOutlinedIcon />}
              target="_blank"
              href="https://github.com/amkhrjee/bytecalcweb"
            />
            <ListboxItem
              title="Support Developer"
              key="support"
              startContent={<FavoriteBorderIcon />}
              endContent={<OpenInNewOutlinedIcon />}
              target="_blank"
              href="https://linktr.ee/amkhrjee"
            />
          </Listbox>
          <Chip>
            Made by <Link href="https://bento.me/amkhrjee">@amkhrjee</Link>
          </Chip>
        </NavbarMenu>
      </Navbar>
      <Modal
        isOpen={isOpen}
        // placement="center"
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
