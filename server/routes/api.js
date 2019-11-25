
const express = require('express')
const router = express.Router()
const Client = require('../models/Client')

// const data = require('../../src/data.json')

// for (let i of data) {
//     let c1 = new Client(i)
//     c1.save()
// }

router.post('/client', function (req, res) {
    let c1 = new Client({
        name: req.body.name,
        email: req.body.email,
        country: req.body.country,
        owner: req.body.owner,
        firstContact: new Date(),
        emailType: null,
        sold: false,
    })
    c1.save()
    res.end()
})

router.put('/client/:email', function (req, res) {
    let email = req.params.email
    let name = req.body.name
    let surName = req.body.surName
    let country = req.body.country
    Client.find({ email: email }).exec(function (err, client) {
        client[0].name = `${name} ${surName}`
        client[0].country = country
        client[0].save()
        res.send(client)
    })
})


router.put('/clienttransfer/:email', function (req, res) {
    let email = req.params.email
    let owner = req.body.owner
    Client.find({ email: email }).exec(function (err, client) {
        client[0].owner = owner
        client[0].save()
        res.send(client)
    })
})

router.put('/emailtypetransfer/:email', function (req, res) {
    let email = req.params.email
    let emailType = req.body.emailType
    Client.find({ email: email }).exec(function (err, client) {
        client[0].emailType = emailType
        client[0].save()
        res.send(client)
    })
})

router.get('/declareChange/:email', function (req, res) {
    Client.find({ email: req.params.email }).exec(function (err, client) {
        client[0].sold = true
        client[0].save()
        res.send(client)
    })
})

router.get('/monthclients', function (req, res) {
    let dateToCheck = new Date();
    dateToCheck.setDate(dateToCheck.getDate() - 30)
    Client.find({
        'firstContact':
        {
            "$gte": dateToCheck,
        }
    }).exec(function (err, clients) {
        res.send(clients)
    })
})

router.get('/lastyear', function (req, res) {
    let dateToCheck = new Date();
    dateToCheck.setDate(dateToCheck.getDate() - 365)
    Client.find({
        'firstContact':
        {
            "$gte": dateToCheck,
        }
    }).exec(function (err, clients) {
        res.send(clients)
    })
})

router.get('/lessthahayear', function (req, res) {
    let dateToCheck = new Date();
    dateToCheck.setDate(dateToCheck.getDate() - 365)
    Client.find({
        'firstContact':
        {
            "$lte": dateToCheck,
        }
    }).exec(function (err, clients) {
        res.send(clients)
    })
})

router.get('/clients', function (req, res) {
    Client.find({}).exec(function (err, clients) {
        res.send(clients)
    })
})

module.exports = router
