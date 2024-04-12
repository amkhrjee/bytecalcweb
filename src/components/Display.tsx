import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";

export default function Display() {
  return (
    <Card>
      <CardHeader className="flex justify-between">
        <p>Last Ans: 123.34</p>
        <Button isIconOnly aria-label="history">
          <RestoreOutlinedIcon />
        </Button>
      </CardHeader>
      <CardBody>
        <input className="outline-none border-none text-9xl p-0 h-fit w-full bg-inherit text-right font-inherit" />
      </CardBody>
    </Card>
  );
}
