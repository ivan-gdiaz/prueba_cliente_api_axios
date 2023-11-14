import logo from './logo.svg';
import './App.css';

import PersonList from "./PersonList.jsx"
import AddPerson from "./AddPerson.jsx"
import RemovePerson from "./RemovePerson.jsx"
import Snackbar from "./Snackbar.jsx"


function App() {
  return (
    <div className="App">
      <PersonList />
      <AddPerson />
      <RemovePerson />
      <Snackbar />
    </div>
  );
}

export default App;
