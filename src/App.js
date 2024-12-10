import FileExplorerContextWrapper from "./context/FileExplorerContext";
import FileExplorer from "./components/FileExplorer";
import "./styles.css";

export default function App() {
  return (
    <FileExplorerContextWrapper>
      <FileExplorer />
    </FileExplorerContextWrapper>
  );
}
