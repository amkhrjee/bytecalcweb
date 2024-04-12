import { Tabs, Tab } from "@nextui-org/react";

export default function App() {
  return (
    <Tabs aria-label="Options">
      <Tab key="decimal" title="DEC"></Tab>
      <Tab key="hexadecimal" title="HEX"></Tab>
      <Tab key="binary" title="BIN"></Tab>
      <Tab key="octal" title="OCT"></Tab>
    </Tabs>
  );
}
