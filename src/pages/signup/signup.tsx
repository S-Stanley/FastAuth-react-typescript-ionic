import React from 'react';
import axios from 'axios';
import api from '../../api';
export default class SignUp extends React.Component {

	state = {
		email: null,
		password: null,
		firstname: null,
		message: null,
	}

	async submit(email: string, password: string, firstname: string){
		const add = await axios.post(`${api}/auth/inscription`, {
			email: email,
			password: password,
			firstname: firstname,
		});
		console.log(add.data);
		if (add.data.res){
			this.setState({message: "Inscription validé, vous pouvez maintenant vous connecter."});
		}
		else {
			this.setState({message: add.data.message});
		}
	}

	render(){
		return(
			<section className="content container-fluid text-center">
				<section>
					<h3>Inscription</h3>
					<p> {this.state.message} </p>
				</section>
				<section className="form">
					<div className="form-group">
						<label>Prenom</label>
						<input type="text" className="form-control" value={this.state.firstname} onChange={e => this.setState({firstname: e.target.value})} />
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="email" className="form-control" value={this.state.email} onChange={e => this.setState({email: e.target.value})} />
					</div>
					<div className="form-group">
						<label>Mot de passe</label>
						<input type="password" className="form-control" value={this.state.password} onChange={e => this.setState({password: e.target.value})} />
					</div>
					<div className="form-group">
						<button className="btn btn-dark" onClick={() => this.submit(this.state.email, this.state.password, this.state.firstname)}>Valider</button>
					</div>
				</section>
			</section>
		)
	}
}