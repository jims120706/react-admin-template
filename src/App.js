import React from 'react';
import Layout from './components/Layout';
import './App.css';
import BaseHeader from './components/Header';
import { HashRouter, Route, Switch  } from 'react-router-dom';

function App() {
	return (
		<HashRouter>
			<div className="App">
				<BaseHeader />
				<Layout />
			</div>
		</HashRouter>
	);
}

export default App;
