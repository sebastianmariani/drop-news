import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Style
import './app.scss';

// Components
import Homepage from './Homepage';
import Newspage from './Newspage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/newspage" component={Newspage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
