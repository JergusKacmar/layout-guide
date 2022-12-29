import "./App.css";
import { FlexComponent } from "./components/flex/flex";

function App() {
  return (
    <div className="bg-white dark:bg-black min-h-screen flex items-center">
      <div className="max-w-2xl flex-1 mx-auto p-4">
        <FlexComponent />
      </div>
    </div>
  );
}

export default App;
