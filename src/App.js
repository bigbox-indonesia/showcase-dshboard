import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import routes from './routes';
import './styles/reset.css';

function App() {
  return (
    <HashRouter>
      <Switch>
        {routes.map((route) => <Route key={route.name} {...route} /> )}
      </Switch>
    </HashRouter>
  );
}

export default App;
