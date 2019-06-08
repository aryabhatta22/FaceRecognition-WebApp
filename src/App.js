import React from 'react';
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo'
import ImageLinkForm from './components/imageLinkForm/imageLinkForm';
import Rank from './components/rank/rank';
import Particles from 'react-particles-js';
import './App.css';

const particleOptions ={
    
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }


}

function App() {
  return (
    <div className="App">
          <Particles className='particles' params={particleOptions}/>
      <Navigation />
      <Logo />
      <Rank/>
      <ImageLinkForm />
      {
      /*
      
      <FcaeRecognition />
      */
      }
       
    </div>
  );
}

export default App;
