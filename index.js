const cron = require('node-cron');
const mongoose = require('mongoose');
const express = require('express')
const api = require('api')
const app = express();
const Drone = require('./models/nftModel.js');

const startServer = () => {
    app.listen(4000, () => console.log('App listening to port 4000'))
    app.get('/dronesid/:id', async (req, res) => {
        const { id } = req.params;
        const foundDrone = await Drone.findById(id);
        res.send(foundDrone._id)
    })
}

const startDataBase = () => {
    mongoose.connect('mongodb://localhost:27017/proiectscd', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log(`CONNECTED TO MONGO!`);

        })
        .catch((err) => {
            console.log(`OH NO! MONGO CONNECTION ERROR!`);
            console.log(err);
        })
}
const fetchData = () => {
    fetch('https://api.opensea.io/api/v1/collection/doodles-official/stats')
        .then((response) => response.json())
        .then(data => nft = data.stats)

}




cron.schedule('*/10 * * * * *', fetchData, {})

const startApp = () => {
    startServer();
    startDataBase();

}
startApp();

