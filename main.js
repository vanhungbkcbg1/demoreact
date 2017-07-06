import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import MyApp from './MyApp.jsx';
import DemoDatePicker from './DemoDatePicker.jsx';

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<MyApp />, document.getElementById('myapp'));
ReactDOM.render(<DemoDatePicker />, document.getElementById('date_picker'));