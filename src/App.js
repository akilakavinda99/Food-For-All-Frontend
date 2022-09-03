import "./App.css";
import { Offline, Online } from "react-detect-offline";
import OfflinePage from "./components/common/offline/offline";

function App() {
  return (
    <div>
      <Online>
        <h1>Onlineeee</h1>
      </Online>
      <Offline>
        <OfflinePage />
      </Offline>
    </div>
  );
}

export default App;
