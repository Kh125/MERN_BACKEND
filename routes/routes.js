const express = require('express')
const { 
    getSampleData,
    createSampleData,
    getSingleSampleData,
    deleteSampleData,
    updateSampleData
} = require('../controllers/sampleController')
const router = express.Router()

router.get('/', getSampleData)

router.post('/', createSampleData)

router.get('/:id', getSingleSampleData)

router.delete('/:id', deleteSampleData)

router.patch('/:id', updateSampleData)

module.exports = router