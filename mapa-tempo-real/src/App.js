import React from 'react';
import './App.css';
import WebMapView, {view} from './components/WebMapView'
import Point from './components/Point'

const App = () => {
  return (
    <WebMapView> 
    </WebMapView>,
    document.getElementById('root'),

<Point props={view}></Point>
  );
}

export default App;
