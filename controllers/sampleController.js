const Sample = require('../models/sampleModel')
const mongoose = require('mongoose')

// Get all sample data
const getSampleData = async (req, res) => {
    const sampleData = await Sample.find({}).sort({createdAt: -1})
    res.status(200).json(sampleData)
}

// Create Sample Data
const createSampleData = async (req, res) => {
    const {title, desc, count} = req.body
    try {
        const sampleData = await Sample.create({title, desc, count})
        res.status(200).json(sampleData)
    }
    catch(e) {
        res.status(400).json({error: e.message})
    }
}

// Get Single Sample Date
const getSingleSampleData = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({e:"No such data"})
    }

    const singleSampleData = await Sample.findById(id)

    if(!singleSampleData) {
        return res.status(404).json({e:"No such data"})
    }

    res.status(200).json(singleSampleData)
}

// Delete Sample Data
const deleteSampleData = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({e:"No such data"})
    }

    const singleSampleData = await Sample.findOneAndRemove(id)

    if(!singleSampleData) {
        return res.status(404).json({e:"No such data"})
    }

    res.status(200).json(singleSampleData)
}

// Update Sample Data
const updateSampleData = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({e:"No such data"})
    }

    const singleSampleData = await Sample.findOneAndUpdate({_id: id}, {...req.body})

    if(!singleSampleData) {
        return res.status(404).json({e:"No such data"})
    }

    res.status(200).json(singleSampleData)
}

module.exports = {
    getSampleData,
    createSampleData,
    getSingleSampleData,
    deleteSampleData,
    updateSampleData
}