import React from 'react';
import ApiData from './redux/ui/ApiData';
import AppBarComponent from  './redux/ui/AppBar';

function App() {  
  return (
   <div>
     <AppBarComponent/>
     <ApiData/>
   </div>  
  )
}
export default App
