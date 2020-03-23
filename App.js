import React from 'react';
import './App.css';
import { AllEmployee } from './services/dummyApi';
import {UcitajEmployee} from './AllEmployee'
import Form from './components/Form';

function App() {
  return (<div>
    <AllEmployee  employee={employee}></AllEmployee>
    <UcitajEmployee/>
    <Form/>
    </div>
  );
}

export default App;
