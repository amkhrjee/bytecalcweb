import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Mode from "./Mode";
export default function Topbar() {
  return (
    <div className="flex justify-between p-2 items-center">
      <MenuRoundedIcon />
      <Mode />
    </div>
  );
}
