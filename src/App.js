import { Route, Switch } from 'react-router';
import './App.css';
import HomePage from './pages/homepage/homepage.components';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div>
      
      <Switch> 
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
