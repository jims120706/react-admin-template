import React from 'react';
import style from './index.module.scss';
import { Icon } from 'antd';

export default class Message extends React.Component {
	render() {
		return (
			<div className={style.message}>
                <div className={style['message-box']}>
                    <div className={style.row}>
                        <span>278</span>期开,<span>02363</span>值：<span>14</span>
                    </div>
                    <div className={style.line}></div>
                    <div className={style.row}>
                        距279期封盘剩<span>136</span>秒
                    </div>
                </div>
                <div className={style['login-out']}>
                    <Icon type="close-circle" theme="twoTone" className={style.icon}/>
                    <div>退出</div>
                </div>
			</div>
		);
	}
}
