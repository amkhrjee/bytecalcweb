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
    <ButtonGroup className="w-full p-2">
      <Button className="w-full">log₂</Button>
      <Button className="w-full">mod</Button>
      <Button className="w-full">2^</Button>
      {/* <Button className="w-full" isIconOnly>
        <KeyboardArrowDownOutlinedIcon />
      </Button> */}
      <Dropdown backdrop="blur">
        <DropdownTrigger>
          <Button className="w-full" isIconOnly>
            <KeyboardArrowDownOutlinedIcon />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          // itemClasses={{
          //   base: ["grid", "grid-cols-4", "gap-4"],
          // }}
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
            <DropdownItem key="ln">ln</DropdownItem>
            <DropdownItem key="log10">log_10</DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </ButtonGroup>
  );
}
