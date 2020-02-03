import React from 'react';
import style from './index.module.scss';
import { Icon } from 'antd';

export default class Header extends React.Component {
	render() {
		const menus = [
			{
				title: '玩家积分',
				icon: 'team'
			},
			{
				title: '赔率限额',
				icon: 'pay-circle'
			},
			{
				title: '收码规则',
				icon: 'code'
			},
			{
				title: '追码定制',
				icon: 'edit'
			},
			{
				title: '开盘封盘',
				icon: 'unlock'
			},
			{
				title: '开奖信息',
				icon: 'mail'
			},
			{
				title: '流水统计',
				icon: 'bar-chart'
			},
			{
				title: '机器人已开启',
				icon: 'sound'
			}
		];
		return (
			// 顶部菜单
			<div className={style.menu}>
				{menus.map((item, i) => {
					return (
						<div key={i} className={style['menu-item']}>
							<Icon type={item.icon} className={style['icon']} />
							{item.title}
						</div>
					);
				})}
			</div>
		);
	}
}
