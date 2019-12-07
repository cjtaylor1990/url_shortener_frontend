let userDatabase = {

    getUserProfile(username) {
        return this.profiles[username];
    },

    profiles: {
        'cjtaylor1990': {password: "password1"}
    }

};

export default userDatabase;