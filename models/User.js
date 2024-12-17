class User{
    constructor(id, username){
        this.id = id;
        this.username = username;
    }
    getUser(){
        return {
            "ID":this.id,
            "username": this.username
        }
    }
}

module.exports = User;