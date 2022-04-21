const express = require('express');
const router = express.Router();
const authenticateToken = require('../util/authenticate');

const { itemService } = require('../services');

router.get('/', async (req, res, next) => {
    try{
        let result = await itemService.findAll();
        if(result && result.length > 0){
            return res.status(200).json(result);
        } else {
            return res.status(200).json([]);
        }
    } catch (e){
        console.log(e);
        return res.status(500).json({
            message: "Error occured while retrieving all items"
        })
    }
})

router.get('/:id', async (req, res, next) => {
    try{
        let id = req.params.id;
        let result = await itemService.findById(id);
        if(result && result.length > 0){
            return res.status(200).json(result)
        } else {
            return res.status(404).json({
                message: "item not found!"
            })
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Error occured while retrieving item " + req.params.id
        })
    }
})

router.get('/search/:key', async (req, res, next) => {
    try{
        let search_str = req.params.key;
        let result = await itemService.search(search_str);
        return res.status(200).json(result);
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: "Error occured while searching for item"
        })
    }
})

router.post('/', async (req, res, next) => {
    try {
        let newItem = req.body;
        let result = await itemService.create(newItem);
        return res.status(200).json({
            id: result
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Error occured while creating item"
        })
    }
})

router.put('/', async (req, res, next) => {
    try {
        let newItem = req.body;
        let result = await itemService.update(newItem);
        if(result.affectedRows == 1){
            return res.status(200).json({
                message: "Item updated"
            })
        } else {
            return res.status(404).json({
                message: "Item not found/not updated"
            })
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Error occured while updating item"
        })
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        let result = await itemService.delete(id);
        if(result.affectedRows == 1){
            return res.status(200).json({
                message: "Item deleted"
            })
        } else {
            return res.status(404).json({
                message: "Item not found"
            })
        }
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: "Error occured while deleting item"
        })
    }
})

module.exports = router;