import React from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component"
import "./App.css"

class App extends React.Component {
constructor() {
super();
this.state = { //this is for the current component
monsters: [],
searchField: ""
};

}
componentDidMount() {
/*- fetch from this url
-take the response and turn it to a json format
consisting of an Array of Object called users(users=response.json())
-update the state */
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json()) 
.then(users => this.setState({ monsters: users }));

}

// render() is called everytime we update the state inside the return statement( this.setState({....}))
  handleChange=(e)=>{
    this.setState({searchField:e.target.value})
  }
render() {
const { monsters, searchField } = this.state;
/*-includes() can be used to compare strings or Array
-for the beginning(for every monster) searchField=""(foundMonster=monsters) that is why all monster are shown.
-if I enter something inside the input, I will find out if this input is the same as a monster name */
const foundMonster = monsters.filter(monster =>monster.name.toLowerCase().includes(searchField.toLowerCase()));


return (
<div className="App">
<h1>Rolodex Monsters</h1>
  <SearchBox placeholder="search Monster" handleChange={this.handleChange} />
    <CardList monsters={foundMonster}>
      {this.state.monsters.map(monster => (
      <h1 key={monster.id}>{monster.name}</h1>

    ))}
    </CardList>

</div>
);
}
}
export default App;
