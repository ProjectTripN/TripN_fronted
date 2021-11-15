import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { WidgetTest } from 'features/chatbot';
import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>

          {/* chatbot */}
          <Route path='/chatbot' element= {<WidgetTest/>}/>

        </Routes>
    </div>
  );
}

export default App;
