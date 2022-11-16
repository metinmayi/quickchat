import { MainPage } from "./pages/MainPage/MainPage";
import io from "socket.io-client";

const socket = io("http://localhost:4000");
console.log(socket);
function App() {
  return <MainPage />;
}

export default App;
