import React from 'react';
import style from './index.module.scss';
import Menu from './Menu';
import Message from './Message';

export default class Header extends React.Component {
	render() {
		return (
			<div className={style.header}>
				<div className={style.title}>
					<div>总流水：114271</div>
					<div>当前流水：0</div>
					<div>今日盈亏：845</div>
				</div>
				<div className={style['menu-list']}>
					{/* 菜单 */}
					<Menu />
					{/* 第几期和退出 */}
					<Message />
				</div>
			</div>
		);
	}
}
