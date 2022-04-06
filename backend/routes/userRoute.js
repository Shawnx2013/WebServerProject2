const express = require('express');
const router = express.Router();
const { userService } = require('../services');
const authenticateToken = require('../util/authenticate');
const jwt = require('jsonwebtoken');

router.get('/:id', authenticateToken, async (req, res, next) => {
    try{
        let id = req.params.id;
        let result = await userService.findById(id);

        if(result && result.length > 0){
            return res.status(200).json(result[0]);
        } else {
            return res.status(404).json({
                message: "user not found!"
            });
        }
    } catch (e){
        console.log(e);
        res.status(500).send({
            message: "Error occured while retrieving user " + req.params.id
        })
    }
})

router.get('/', authenticateToken, async (req, res, next) => {
    try{
        let result = await userService.findAll();

        if(result && result.length > 0){
            return res.status(200).json(result);
        } else {
            return res.status(404).json({
                message: "user not found!"
            });
        }
    }catch (e){
        console.log(e);
        res.status(500).send({
            message: "Error occured while retrieving user " + req.params.id
        })
    }
})

router.post('/', authenticateToken, async (req, res, next) =>{
    try{
        let newUser = req.body;
        let result = await userService.create(newUser);
        res.status(200).json({
            id: result
        })
    } catch (e){
        console.log(e);
        res.status(500).send({
            message: "Error occured while creating user"
        })
    }
})

router.post('/auth', async (req, res, next) =>{
    try{
        let inputUsername = req.body.username;
        let inputPassword = req.body.password;
        let result = await userService.findByUsername(inputUsername);
        let user = result[0].username;
        let password = result[0].password;
        if(user === inputUsername && password === inputPassword){
            const token = await jwt.sign({username: user}, process.env.TOKEN_SECRET, { expiresIn: '600000' });
            return res.status(200).json(token);
        }
        else{
            return res.status(401).json({message: "wrong crendetials"})
        }
    } catch(e) {
        console.log(e);
        res.status(500).send({
            message: "Error occured while authenticating user"
        })
    }
})

// router.get('/auth/logout', (req, res) => {

//     req.session.destroy((err) => {
//         if(err){
//             console.log(error);
//             return res.status(500).send({
//                 message: "Error occured while logging out user"
//             })
//         }
//         sessionStore.close();
//         res.clearCookie('cage_session');
//         return res.status(200).json({message: "logged out"});
//     });
// })

module.exports = router;
