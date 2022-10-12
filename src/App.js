import "./App.css";
import { Offline, Online } from "react-detect-offline";
import OfflinePage from "./components/common/offline/offline";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <Online>
        <HomePage />
      </Online>
      <Offline>
        <OfflinePage />
      </Offline>
    </div>
  );
}

export default App;
