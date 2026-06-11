
import './App.css';
import Header from  './Header';
import  './Header.css';
import './Productcard.css';
import Productcard from './Productcard';
import Home from './Home';
import './Home.css';

function App() {
  return (

    <div nav="App">
     <Header/>
     <div className='home-container'>
      <Home/>
     </div>
     <h3 className='product-heading'>Projects</h3>
     <div className='product-container'>
    
      <Productcard/>
      <Productcard/>
      <Productcard/>
      <Productcard/>
      </div>
    </div>
  );
}

export default App;
