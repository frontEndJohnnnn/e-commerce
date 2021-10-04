import { Route } from 'react-router';
import './App.css';
import HomePage from './pages/homepage/homepage.components';


function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
    </div>
  );
}

export default App;
