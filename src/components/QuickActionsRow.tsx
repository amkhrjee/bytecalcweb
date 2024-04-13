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
  const bitwiseOperators = [
    "<<",
    ">>",
    "AND",
    "OR",
    "XOR",
    "XNOR",
    "NOT",
    "NAND",
    "NOR",
  ];

  // const unaryOperators = []

  return (
    <ButtonGroup className="w-full p-2">
      <Button className="w-full text-xl">log₂</Button>
      <Button className="w-full text-xl">mod</Button>
      <Button className="w-full text-xl">2^</Button>
      <Dropdown className="dark text-foreground bg-background" backdrop="blur">
        <DropdownTrigger>
          <Button className="w-full" isIconOnly>
            <KeyboardArrowDownOutlinedIcon />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          title="Bitwise Operators"
          variant="faded"
          aria-label="Static Actions"
        >
          <DropdownSection
            aria-label="Bitwise Operators"
            title="Bitwise Operators"
            // showDivider
            classNames={{ group: "grid grid-cols-3 " }} // slots
            itemClasses={{
              base: "gap-4",
            }}
            as="div"
          >
            {bitwiseOperators.map((operator) => (
              <DropdownItem as="div" key={operator}>
                {operator}
              </DropdownItem>
            ))}
          </DropdownSection>
          {/* <DropdownSection
            as="div"
            aria-label="miscellaneous"
            title="Miscellaneous"
          >
            <DropdownItem key="percentage">%</DropdownItem>
            <DropdownItem key="ln">
              log<sub>e</sub>
            </DropdownItem>
            <DropdownItem key="log10">
              log<sub>10</sub>
            </DropdownItem>
          </DropdownSection> */}
        </DropdownMenu>
      </Dropdown>
    </ButtonGroup>
  );
}
