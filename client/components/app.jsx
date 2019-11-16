import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      placeHolder: null
    }
  }
  render(){
    return(
      <div>Yelp, here we come!</div>
    )
  }
}

export default App;
