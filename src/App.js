import React from 'react';
import Layout from './components/Layout';
import './App.css';
import BaseHeader from './components/Header';

function App() {
	return (
		<div className="App">
			<BaseHeader />
			Learn React<Layout />
		</div>
	);
}

export default App;
