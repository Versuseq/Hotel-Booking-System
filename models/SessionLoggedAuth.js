/**
 * Checks if user is logged
 */
class SessionLoggedAuth{
    /**
     * Checks if user is logged
     * @param {Request} req Request parameter
     * @param {Response} res Response parameter
     * @returns {boolean}
     */
    isLogged(req,res){
        if(req.session.user) return true;
        return false;
    }
}

module.exports = SessionLoggedAuth;