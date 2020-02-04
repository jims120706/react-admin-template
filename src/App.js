import React from 'react';
import './App.css';
import BaseHeader from './components/Header';
import { HashRouter, Route, Switch, Redirect  } from 'react-router-dom';
import { Spin } from 'antd';
import Loadable from 'react-loadable'; // 异步组件

// Loading组件
const Loading = ({isLoading, error}) => {
	if(isLoading) {
		return <Spin />
	}
	else if (error) {
		return <div>页面加载出现问题, 请刷新后重试</div>;
	}
	return null;
}

// 玩家积分异步组件
const PlayerScore = Loadable({
	loader: () => import('./pages/player-score'),
	loading: Loading,
});

// 赔额限率异步组件
const DeductionRateLimit = Loadable({
	loader: () => import('./pages/deduction-rate-limit'),
	loading: Loading,
});

// 收码规则异步组件
const CodeRules = Loadable({
	loader: () => import('./pages/code-rules'),
	loading: Loading,
});

// 追码定制异步组件
const CodeCustom = Loadable({
	loader: () => import('./pages/code-custom'),
	loading: Loading,
});

// 开盘封盘异步组件
const OpenRotary = Loadable({
	loader: () => import('./pages/open-rotary'),
	loading: Loading,
});

// 开奖信息异步组件
const LotteryInformation = Loadable({
	loader: () => import('./pages/lottery-information'),
	loading: Loading,
});

// 流水统计异步组件
const FlowStatistics = Loadable({
	loader: () => import('./pages/flow-statistics'),
	loading: Loading,
});

function App() {
	return (
		<HashRouter>
			<div className="App">
				<BaseHeader />
				<Switch>
					<Route path='/points' component={PlayerScore}></Route>
					<Route path='/pay' component={DeductionRateLimit}></Route>
					<Route path='/rule' component={CodeRules}></Route>
					<Route path='/edit' component={CodeCustom}></Route>
					<Route path='/unlock' component={OpenRotary}></Route>
					<Route path='/message' component={LotteryInformation}></Route>
					<Route path='/sum' component={FlowStatistics}></Route>
					{/* 默认匹配玩家积分 */}
					<Redirect to="/points"></Redirect>
				</Switch>
			</div>
		</HashRouter>
	);
}

export default App;
