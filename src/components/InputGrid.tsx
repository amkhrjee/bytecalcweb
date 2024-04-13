import { Button } from "@nextui-org/react";
import BackspaceOutlinedIcon from "@mui/icons-material/BackspaceOutlined";
import { Fragment } from "react/jsx-runtime";

export default function InputGrid() {
  const inputSymbols = [
    "AC",
    "(",
    ")",
    "/",
    "7",
    "8",
    "9",
    "×",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "",
    "=",
  ];

  const specialSymbols = ["AC", "(", ")", "/", "×", "-", "+", "="];

  return (
    <div className="grid grid-cols-4 gap-2 p-2 h-full flex-grow">
      {inputSymbols.map((inputSymbol) => (
        <Fragment key={inputSymbol}>
          {inputSymbol.length == 0 && (
            <Button className="h-full">
              <BackspaceOutlinedIcon />
            </Button>
          )}
          {inputSymbol.length != 0 && (
            <Button
              color={
                specialSymbols.includes(inputSymbol) ? "secondary" : "default"
              }
              className="text-3xl font-bold h-full"
            >
              {inputSymbol}
            </Button>
          )}
        </Fragment>
      ))}
    </div>
  );
}
