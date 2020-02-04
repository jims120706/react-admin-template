import React from 'react';
import style from './index.module.scss';
import { Icon } from 'antd';
import { Link  } from 'react-router-dom';

export default class Menu extends React.Component {
	render() {
		const menus = [
			{
				title: '玩家积分',
				icon: 'contacts',
				router: 'points'
			},
			{
				title: '赔率限额',
				icon: 'dollar',
				router: 'pay'
			},
			{
				title: '收码规则',
				icon: 'code',
				router: 'rule'
			},
			{
				title: '追码定制',
				icon: 'edit',
				router: 'edit'
			},
			{
				title: '开盘封盘',
				icon: 'unlock',
				router: 'unlock'
			},
			{
				title: '开奖信息',
				icon: 'mail',
				router: 'message'
			},
			{
				title: '流水统计',
				icon: 'pie-chart',
				router: 'sum'
			},
			// {
			// 	title: '机器人已开启',
			// 	icon: 'sound',
			// 	router: 'machine'
			// }
		];
		return (
			// 顶部菜单
			<div className={style.menu}>
				{menus.map((item, i) => {
					return (
						<Link key={i} className={style['menu-item']} to={item.router}>
							<Icon type={item.icon} className={style['icon']} theme="twoTone"/>
							{item.title}
						</Link>
					);
				})}
				<div className={style['menu-item']} >
					<Icon type='sound' className={style['icon']} theme="twoTone"/>
					机器人已开启
				</div>
			</div>
		);
	}
}
