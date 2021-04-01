import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { DataProvider } from './Context/ContextData';

// Style
import './app.scss';

// Components
import Homepage from './Pages/Homepage';
import Newspage from './Pages/Newspage';
import Navbar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <DataProvider>
          <Route exact path="/" component={Homepage}></Route>
          <Route path="/newspage">
            <Navbar/>
            <Newspage/>
          </Route>
        </DataProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
