const User = require("./User");
const bcrypt = require('bcrypt');

class UserManager{
    /**
     * 
     * @param {Database} db Database object
     */
    constructor(database = require("../database/database")){
        this.db = database;
        return;
    }
    /**
     * Find user in database.
     * @param {string} username 
     */
    static findUser(username){
        db.get(`SELECT * FROM Users where username = ?`, [username], (err, user) => {
            if(err) console.log(err.message);
            if(user) return new User(user.id, user.username);
            return null;
        })
    }
    static createUser(username, password){
        if(this.findUser == null){
            const hashedPassword = bcrypt.hash(password, 8);
            this.db.run(`INSERT INTO Users (username, password) VALUES (?,?)`,[username, hashedPassword], (err,result) => {
                if(err) console.log(err);
                if(result) return this.findUser(result.username);
                return null;
            })
        }
    }
}

module.exports = UserManager;