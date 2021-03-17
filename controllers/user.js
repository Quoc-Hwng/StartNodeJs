const {User} = require('../models/index')

module.exports = class UserService {
    static async createUser(req, res) {
       try{
        const result = User.create({
            id: req.body.id,
            fullName: req.body.fullName,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
        })
        res.json(result)
       }
       catch(error){
           res.json(error)
       }
    }
    static async login(req, res) {
        try{
            const result = await User.findOne({id: req.body.id})
            if(result == null){
                return res.json({data: "Cannot find id"})
            }else{
                if(req.body.password == result.password){
                    return res.json({data: "Login Succeed"})
                }else{
                    return res.json({data: "Wrong Password"})
                }
            }
        }
        catch(error){
            res.json(error)
        }
    }
    static async changePassword(req, res){
        try{
            const result = await User.findOneAndUpdate({id: req.body.id, password:req.body.oldPassword},{password:req.body.newPassword})
            res.json(result)
        }catch(error){
            res.json(error)
        }
    }
    static async deleteUser(req, res){
        try{
            const result = await User.findOneAndDelete({id: req.body.id})
            res.json(result)
        }catch(error){
            res.json(error)
        }
    }
}