const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const HotelSchema = new Schema({
  hotelName: {
    type: String,
    required: true,
    unique: true
  },
  hotelDescription: {
    type: String,
    required: true
  },
  imgurl: {
    type: String,
    required: true,
    default:
      "https://img.freepik.com/free-vector/coloured-flat-design-hotel-building_23-2148202442.jpg?size=338&ext=jpg"
  },
  draft: {
    type: Number,
    default: 0
  },
  booking: {
    type: Number,
    default: 0
  },

  views: {
    type: Number,
    default: 0
  },
  rating: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model("Hotel", HotelSchema);
