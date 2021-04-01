import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { Switch, Route, Link, Router } from "react-router-dom";
import styled from "styled-components";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import EditTodo from "./components/EditTodo";

const Nabvar = styled.nav`
  background: #dbfffe;
  minheight: 8vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Logo = styled.div`
  font-wight: bold;
  font-size: 23px;
  letter-spacing: 3px;
`;

const NavItems = styled.ul`
  display: flex;
  width: 400px;
  max-width: 40%;
  justify-content: space-around;
  list-style: none;
`;

const NavItem = styled.li`
  font-size: 19px;
  font-weight: bold;
  opacity: 0.7;
  $:hover {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  width: 700px;
  max-width: 85%;
  margin: 20px auto;
`;

// function App() {
//   return (
//     <>
//       <Nabvar>
//         <Logo>TODO</Logo>
//         <NavItems>
//           <Router>
//             <NavItem>
//               <Link to="/lists/index">Todos</Link>
//             </NavItem>
//             <NavItem>
//               <Link to="/lists/create">Add New Todo</Link>
//             </NavItem>
//           </Router>
//         </NavItems>
//       </Nabvar>
//       <Wrapper>
//         <Router>
//           <Switch>
//             <Route exact path="/lists/index">
//               <TodoList />
//             </Route>
//             <Route exact path="/lists/create">
//               <AddTodo />
//             </Route>
//             <Route exact path="/lists/edit">
//               <EditTodo />
//             </Route>
//           </Switch>
//         </Router>
//       </Wrapper>
//     </>
//   );
// }

// export const App = () => {
//   return (
//     <>
//       <Nabvar>
//         <Logo>TODO</Logo>
//         <NavItems>
//           <Router>
//             <NavItem>
//               <Link to="/lists">Todos</Link>
//             </NavItem>
//             <NavItem>
//               <Link to="/lists/create">Add New Todo</Link>
//             </NavItem>
//           </Router>
//         </NavItems>
//       </Nabvar>
//       <Wrapper>
//         <Router>
//           <Switch>
//             <Route exact path="/lists" component={TodoList} />
//             <Route exact path="/lists/create" component={AddTodo} />
//             <Route path="/lists/:id/edit" component={EditTodo} />
//           </Switch>
//         </Router>
//       </Wrapper>
//     </>
//   );
// };

// export default App;

function App() {
  return (
    <>
      {/* RouterでLink, Route を囲むことで一連が連動してページが遷移する */}
      <Router>
        <Nabvar>
          <Logo>TODO</Logo>
          <NavItems>
            <NavItem>
              <Link to="/lists">Todos</Link>
            </NavItem>
            <NavItem>
              <Link to="/lists/create">Add New Todo</Link>
            </NavItem>
          </NavItems>
        </Nabvar>
        <Wrapper>
          <Switch>
            <Route exact path="/lists" component={TodoList} />
            <Route exact path="/lists/create" component={AddTodo} />
            <Route path="/lists/:id/edit" component={EditTodo} />
          </Switch>
        </Wrapper>
      </Router>
    </>
  );
}

export default App;
