import { FunctionComponent } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { addProduct } from './data/actionCreators';
import { dataStore } from './data/dataStore';
import { Order } from './data/entities';
import { HttpHandler } from './data/httpHandler';
import { ConnectedProductList } from './data/productLitConnector';
import { OrderDetails } from './pages/orderDetails';
import { Summary } from './pages/summary';

interface Props { }

let httpHandler = new HttpHandler();
httpHandler.loadProducts(data => dataStore.dispatch(addProduct(...data)));

export const App: FunctionComponent<Props> = (props) => {
  const navigate = useNavigate();
  let submitCallback = () => {
    httpHandler.storeOrder(dataStore.getState().order, 
      id => navigate(`/summary/${id}`, { replace: true}));
    dataStore.getState().order = new Order();
  };

  return <div className='App'>
    <Routes>
      <Route index element={<ConnectedProductList/>}/>
      <Route path="/products" element={<ConnectedProductList/>}/>
      <Route path="/order" element={<OrderDetails 
        submitCallback={() => 
          submitCallback()}/>} />
      <Route path="/summary/:id" element={<Summary />} />
    </Routes>
  </div>
}

export default App;
