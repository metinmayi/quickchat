import { MainPage } from "./pages/MainPage/MainPage";
import io from "socket.io-client";
export const socket = io("http://localhost:4000");

function App() {
  return <MainPage />;
}

export default App;
