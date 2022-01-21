import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from './NavBar'
import Movies from './Movies'
import MyForm from './Form';
import Myformik from './Formik';
import Mymovie from './Movie'
import FavMovies from './FavouriteMovies'
import { useState } from 'react';
import { langContext } from './Contextlang';

function App() {
  const [contextLang, setContextLang ] = useState("en")

  
  return (
  <>
  <div className={contextLang === "ar" ? "text-end" : "text-start"}
          >
  <langContext.Provider value= {{contextLang, setContextLang}}>
  <div style={{backgroundColor:"#000"}} >   
  <Router> 
      <Navbar /> 
      <Switch> 
        <Route path="/" component={Movies} exact/>
        <Route path="/register" component={MyForm} exact />
        <Route path="/login" component={Myformik} exact />
        <Route path="/movie/:id" component={Mymovie}/>
        <Route path="/favourite" component={FavMovies}/>

        

      </Switch>
    </Router>
    
  </div>
  </langContext.Provider>
  </div>
  </>
  );
}

export default App;
