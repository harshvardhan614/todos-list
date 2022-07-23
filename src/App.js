// import logo from './logo.svg';
import "./App.css";
import Header from "./Mycomponents/Header";
import { Todos } from "./Mycomponents/Todos";
import { AddTodos } from "./Mycomponents/AddTodos";
import { Footer } from "./Mycomponents/Footer";
import { About } from "./Mycomponents/About";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  
  let initTodo;
  if (localStorage.getItem("Todoms") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("Todoms"));
  }

  const [Todoms, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("Todoms", JSON.stringify(Todoms));
  }, [Todoms]);

  let onDelete = (todo) => {
    console.log("Delete this Todos Item", todo);
    // Deleting thsis way in react does not work.
    // let index = Todoms.indexOf(todo);
    // Todoms.splice(index, 1);

    setTodos(
      Todoms.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("Todoms", JSON.stringify(Todoms));
  };

  let addTodom = (title, desc) => {
    console.log("Add this Todos Item", title, desc);
    let sno;
    if (Todoms.length === 0) {
      sno = 0;
    } else {
      sno = Todoms[Todoms.length - 1].sno + 1;
    }
    let myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...Todoms, myTodo]);
    console.log(myTodo);
  };

  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={true} />

        <Switch>
          <Route exact path="/" render= {()=>{
            return (
              <>
               <AddTodos addTodom={addTodom} />
               <Todos Todoms={Todoms} onDelete={onDelete} />
              </>
            )
          }}>            
          </Route>

          <Route exact path="/about">
            <About />
          </Route>          
        </Switch>      

        <Footer />
      </Router>
    </>
  );
}

export default App;
