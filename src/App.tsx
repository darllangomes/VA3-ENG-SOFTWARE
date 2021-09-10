import {BrowserRouter, Route} from 'react-router-dom';
import {NewRoom} from '../src/Pages/NewRoom';
import {Home} from '../src/Pages/Home';
import {DateRange} from './Pages/DateRangePicker';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact={true} component={Home}>
          <Home/>
        </Route>
        <Route path="/rooms/new" component={NewRoom}>
          <NewRoom/>
        </Route>
      </BrowserRouter>      
    </div>
  );
}

export default App;
