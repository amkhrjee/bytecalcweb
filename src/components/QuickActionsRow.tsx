import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
export default function QuickActionsRow() {
  return (
    <ButtonGroup variant="shadow" className="w-full p-2">
      <Button className="w-full text-xl">log₂</Button>
      <Button className="w-full text-xl">mod</Button>
      <Button className="w-full text-xl">2^</Button>
      {/* <Button className="w-full" isIconOnly>
        <KeyboardArrowDownOutlinedIcon />
      </Button> */}
      <Dropdown className="dark text-foreground bg-background" backdrop="blur">
        <DropdownTrigger>
          <Button className="w-full" isIconOnly>
            <KeyboardArrowDownOutlinedIcon />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          // className="grid grid-cols-2"
          variant="faded"
          aria-label="Static Actions"
        >
          {/* <h1>Hello</h1> */}
          <DropdownSection
            aria-label="Bitwise Operators"
            title="Bitwise Operators"
            showDivider
          >
            <DropdownItem key="left shiftw">&lt;&lt;</DropdownItem>
            <DropdownItem key="right shift">&gt;&gt;</DropdownItem>
            <DropdownItem key="and">AND</DropdownItem>
            <DropdownItem key="or">OR</DropdownItem>
            <DropdownItem key="xor">XOR</DropdownItem>
            <DropdownItem key="xnor">XNOR</DropdownItem>
            <DropdownItem key="nor">NOR</DropdownItem>
            <DropdownItem key="not">NOT</DropdownItem>
          </DropdownSection>
          <DropdownSection aria-label="miscellaneous" title="Miscellaneous">
            <DropdownItem key="percentage">%</DropdownItem>
            <DropdownItem key="ln">
              log<sub>e</sub>
            </DropdownItem>
            <DropdownItem key="log10">
              log<sub>10</sub>
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </ButtonGroup>
  );
}
