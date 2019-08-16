import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state ={ profile : "", loading: true}

  componentDidMount(){    
   this.fetchGifs()
  }

  fetchGifs = () => {
    fetch("https://randomuser.me/api/")
    .then(function(response) {
      return response.json();
    })
    .then(myJson =>  {
      const {results} = myJson;
      console.log(results)
      const {name, email, cell, picture: {medium}} = results[0]
      this.setState({loading: false, name, email, cell })
    })
     
  }


  render(){

    const { profile, loading } = this.state; 
    console.log( this.state)
  return (
    <div className="App"> 
    {!loading && (
       <div>
    
    </div>
    )}
     
    </div>
  );
}
}

export default App;
