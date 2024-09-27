const mongoose = require('moongose');
const nftSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    utility: {
        type: [String],
        enum: ['Monitoring or Inspection', 'Security', 'Delivery', 'Photography', 'Recreation']
    },
    weight: {
        type: String,
        lowercase: true
    },
    onSale: {
        type: Boolean,
        default: false
    }
})
const Drone = mongoose.model('Drone', nftSchema);

module.exports = Drone;