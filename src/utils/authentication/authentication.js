import userDatabase from './userDatabase.js'

const auth = {
	checkCredentials(username,password) {
		let userProfile = userDatabase.getUserProfile(username);
		if (userProfile && (password === userProfile.password)){
			return true;
		} else {
			return false;
		}
	}	
};

export default auth