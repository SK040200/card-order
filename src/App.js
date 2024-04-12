import Navpage from "./Components";
import { Route,Routes } from 'react-router-dom'
import OrderDetail from "./Components/order-detail";
import Cardpage from "./Components/Card-page";

function App() {
  return (
    <div>
      <Navpage/>
      <Routes>
          <Route path="/order-details" element={<OrderDetail />}/>
          <Route path="/card-page"      element={<Cardpage/>} />
      </Routes>
      

 </div>
  );
}

export default App;
