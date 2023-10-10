const { User } = require('../models')

module.exports = {
    //get all user
    async index (req,res){
        // res.send('ดูข้อมูลผู้ใช้ทั้งหมด')
        try {
            const users = await User.findAll()
            res.send(users)
        } catch (error) {
            res.status(500).send({
                error: 'The users information was incorrect'
            })
        }
    },

    //creat user
    async create (req,res) {
        // res.send('สร้างผู้ใช้' + JSON.stringify(req.body))
        try {
            const user = await User.create(req.body)
            res.send(user)
            
        } catch (error) {
            res.status(500).send({
                error: 'Create users information was incorrect'
            })
        }
    },

    //edit user
    async put (req, res){
        // res.send('แก้ไขข้อมูลผู้ใช้ ' + req.params.userId + " " + JSON.stringify(req.body.name))
        try {
            console.log(req.body)
            let updatedUser = await User.update(req.body,{
                where: {
                    id: req.params.userId
                }
            })
            console.log(updatedUser)
            res.send(req.body)
        } catch (error) {
            res.status(500).send({
                error: 'Update user information was incorrect'
            })
        }
    },

    //delete user
    async delete (req, res){
        // res.send('ลบข้อมูลผู้ใช้ ' + req.params.userId + " " + JSON.stringify(req.body.name))
        try {
            console.log(req.params.userId)
            const user = await User.findOne({
                where: {
                    id: req.params.userId
                }
            })
            if (!user){
                return res.status(403).send({
                    error: 'The user id is not found'
                })
            }
            await user.destroy()
            res.send(user)

        } catch (error) {
            res.status(500).send({
                error: 'Delete user information was incorrect'
            })
        }
    },

    //show user by id
    async show(req,res){
        // res.send('ดูข้อมูลผู้ใช้ '+ req.params.userId + " " + JSON.stringify(req.body))
        try {
            const user = await User.findOne({
                where: {
                    id: req.params.userId
                }
            })
            if (!user){
                return res.status(403).send({
                    error: 'The user id is not found'
                })
            }
            res.send(user)
        } catch (error) {
            res.status(500).send({
                error: 'Users information was incorrect'
            })
            
        }
    }
}