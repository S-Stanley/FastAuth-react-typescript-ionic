interface infoUser {
	firstname: string,
	lastname: string,
}

export default interface User {
	email: string,
	password: string,
	info?: infoUser,
}