import Display from "./components/Display";
import InputGrid from "./components/InputGrid";
import QuickActionsRow from "./components/QuickActionsRow";
import Topbar from "./components/Topbar";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Topbar />
      <Display />
      <QuickActionsRow />
      <InputGrid />
    </div>
  );
}
