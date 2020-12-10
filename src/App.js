import React, { Component, Fragment } from 'react';
import { Button, Input, Popconfirm, message } from 'antd';
import { CloseCircleFilled } from '@ant-design/icons';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			list: [],
			val: ''
		}
	}
	onChange(e) {
		this.setState({
			val: e.target.value
		})
	}
	onSubmit() {
		if (!this.state.val) return
		this.state.list.unshift(this.state.val)
		this.setState(state=>({
			list: [...state.list],
			val: ''
		}))
			
	}
	 onDelete(index) {
		this.state.list.splice(index, 1)
		this.setState({
			list: [...this.state.list]
		})
		message.success('delete success');
	}
	render() {
		return (
			<Fragment>
				<div className='App flex-center'>
					<img src={logo} className='logo' alt='logo'></img>
					<h1 className='title'>react todo demo</h1>
					<div className="flex-center">
						<Input value={this.state.val} size="large" onChange={this.onChange.bind(this)} placeholder='请输入todo' allowClear ></Input>
						<Button type="primary" onClick={this.onSubmit.bind(this)} size="large" style={{ marginLeft: '15px' }} >确定</Button>
					</div>
					<div className="list">
						{
							this.state.list.map((item, index) => {
								return <div className='item-cell' key={index}>{item}
									<Popconfirm
										title="Are you sure to delete this task?"
										onConfirm={this.onDelete.bind(this,index)}
										okText="Yes"
										cancelText="No"
									>
										<CloseCircleFilled  className='del-icon' />
									</Popconfirm>
								</div>
							})
						}
					</div>
				</div>
			</Fragment>
		)
	}
}

export default App;
