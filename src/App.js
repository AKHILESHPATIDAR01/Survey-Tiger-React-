import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './components/Menu';
import CreateSurvey from './components/CreateSurvey';
import Published from './components/Published';
import { useState } from 'react';

import { Link } from 'react-router-dom';


function App() {

  const [squestions,setSquestions] = useState([]);

  return (
    <>
    <div className="col-md-10 offset-md-1 col-12 text-center">
        
        
        <Router>
          <Link to="/">
            <h1 className="col-md-12">Survey Tiger</h1>
          </Link>

          <Switch>
            <Route path="/" component={Menu} exact/>
            {/* <Route path="/create" component={CreateSurvey} exact/> */}
            <Route path="/create" exact >
              <CreateSurvey squestions={squestions} setSquestions={setSquestions} />
            </Route>

            <Route path="/published" exact>
              <Published squestions={squestions} />
            </Route>
          </Switch>


        </Router>

    </div>
    </>
  );
}

export default App;
