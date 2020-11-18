// imports
const router = require('express').Router()
const ctrl = require('../controllers')

// routes
router.get('/', ctrl.pets.index)
router.get('/:id', ctrl.pets.show)
router.post('/', ctrl.pets.create)
router.put('/:id', ctrl.pets.update)
router.delete('/', ctrl.pets.destroy)

// exports
module.exports = router