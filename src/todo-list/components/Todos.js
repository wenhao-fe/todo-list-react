import React, { PureComponent } from "react";
import Li from "./Li";
export default class Todos extends PureComponent {
	state = {};
	render() {
		let { listData } = this.props;
		return (
			<ul id="todo-list">
				{listData.map(item => {
					return <Li key={item.id} data={item} {...this.props} />;
				})}
			</ul>
		);
	}
}
