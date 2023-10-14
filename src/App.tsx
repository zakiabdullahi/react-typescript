import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="max-w-4xl mx-auto  mb-10">
      {/* <Header/>
       <Footer/> */}
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
