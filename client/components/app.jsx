import React from 'react';
import Header from './header';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      placeHolder: null
    }
  }
  render(){
    return(
      <div>
          <div className="banner-image" alt="Beers and Cheers">
            <Header />
          <div className="d-flex justify-content-center">
            <img id="yelpLogo" src="../images/yelp-logo.png" alt="yelp logo" />
          </div>
          </div>
      </div>
    )
  }
}

export default App;
