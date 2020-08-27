import React, { Component, createRef } from "react";
export default class Li extends Component {
	state = {
		edit: false,
		val: "",
		ref: createRef(),
	};
	static getDerivedStateFromProps(props, state) {
		if (!state.val) state.val = props.data.text;
		return true;
	}
	componentDidUpdate(preProps, preState) {
		let { edit, ref } = this.state;
		if (edit && !preState.edit) {
			ref.current.select();
		}
	}
	render() {
		let { data, changeCheck, editText, remove } = this.props;
		let { edit, ref, val } = this.state;
		return (
			<li className={edit ? "editing" : ""}>
				<div className={`todo ${data.done ? "done" : ""}`}>
					<div className="display">
						<input
							type="checkbox"
							className="check"
							checked={data.done}
							onChange={e => {
								changeCheck(data.id, e.target.checked);
							}}
						/>
						<div
							className="todo-content"
							onDoubleClick={() => {
								this.setState({
									edit: true,
								});
							}}
						>
							{data.text}
						</div>
						<span
							className="todo-destroy"
							onClick={() => {
								remove(data.id);
							}}
						></span>
					</div>
				</div>
				<div className="edit">
					<input
						ref={ref}
						type="text"
						className="todo-input"
						value={val}
						onChange={e => {
							this.setState({
								val: e.target.value,
							});
						}}
						onBlur={() => {
							this.setState({
								edit: false,
							});
							editText(data.id, val);
						}}
					/>
				</div>
			</li>
		);
	}
}
