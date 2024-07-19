import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Page from './component/Page';



function App() {
   
  // const useStyle = makeStyles(()=>
  // ({
  //       App:{
  //         bagroundColor: "#14161a",
  //         color: 'white',
  //         minHeight: "100vh",
  //       },
  // }
  // ))
  // const classes = useStyle();
 
  return (
    
       <BrowserRouter>
          <div >
            <Header/>
           <Routes>
           <Route path='/' Component={Home} />
           <Route path='/coin' Component={Page} />
           </Routes>
          </div>
       </BrowserRouter>
   
  );
}

export default App;
