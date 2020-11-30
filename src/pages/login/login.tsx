import React, { useState } from 'react';
import User from '../../interface/User';
import axios from 'axios';
import api from '../../api';

export default class Login extends React.Component<{history, User}> {

	state = {
		email: '',
		password: '',
		message: null,
	};

	async submit(email: string, password: string){
		const send = await axios.post(`${api}/auth/connexion`, {
			email: email,
			password: password,
		});
		if (send.data['res'] === true){
			return this.props.history.push('/home');
		}
		else {
			this.setState({message: send.data.message});
			const that = this;
			setTimeout(() => {
				that.setState({message: null});
			}, 5000);
		}
	}

	render(){
		return (
			<section className="content container-fluid text-center">
				<section>
					<h3>Login/Connexion</h3>
					<p>{this.state.message}</p>
				</section>
	
				<section className="form">
					<div className="form-group">
						<label>Email</label>
						<input className="form-control" type="email" value={this.state.email} onChange={e => this.setState({email: e.target.value})} />
					</div>
					<div className="form-group">
						<label>Mot de passe</label>
						<input className="form-control" type="password" value={this.state.password} onChange={e => this.setState({password: e.target.value})} />
					</div>
					<div className="form-group">
						<button className="btn btn-dark" onClick={() => this.submit(this.state.email, this.state.password)}>Valider</button>
					</div>
				</section>
			</section>
		)
	}
}