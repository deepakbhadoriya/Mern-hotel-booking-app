const express = require("express");
const router = express.Router();

//importing model Hotel
const Hotel = require("../../models/Hotels");

//@route    GET api/hotels/:id
//@desc     Fetch all Hotel
//@access   public
router.get("/:id", (req, res) => {
  Hotel.findById(req.params.id)
    .then(h => res.json(h))
    .catch(err => {
      res.json(err);
    });
});

//@route    GET api/hotels/
//@desc     Fetch all Hotel
//@access   public
router.get("/", (req, res) => {
  Hotel.find()
    .then(hotel => res.json(hotel))
    .catch(err => {
      res.json(err);
    });
});

//@route    POST api/hotels/add
//@desc     Add a new Hotel
//@access   public
router.post("/add", (req, res) => {
  const {
    hotelName,
    hotelDescription,
    draft,
    imgurl,
    booking,
    views,
    rating
  } = req.body;

  const newHotel = new Hotel({
    hotelName,
    hotelDescription,
    draft,
    imgurl,
    booking,
    views,
    rating
  });

  newHotel
    .save()
    .then(() => res.json("Hotel is successfully added!"))
    .catch(err => res.status(400).json("Server err" + err));
});

//@route    POST api/hotels/update/:id
//@desc     Update a Hotel
//@access   public
router.post("/update/:id", (req, res) => {
  Hotel.findById(req.params.id)
    .then(Hotel => {
      Hotel.hotelName = req.body.hotelName;
      Hotel.hotelDescription = req.body.hotelDescription;
      Hotel.imgurl = req.body.imgurl;
      Hotel.draft = req.body.draft;
      Hotel.booking = req.body.booking;
      Hotel.views = req.body.views;
      Hotel.rating = req.body.rating;

      Hotel.save()
        .then(() => res.json("Hotel Updated!"))
        .catch(err => res.status(400).json("Error : " + err));
    })
    .catch(err => res.status(400).json("Error :" + err));
});

//@route     POST api/hotels/:id
//@desc      update draft
//@access    public
router.delete("/:id", (req, res) => {
  Hotel.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise Deleted Successfully"))
    .catch(err => res.status(400).json("Error:" + err));
});

//@route     POST api/hotels/draft/:id
//@desc      update draft
//@access    public
router.put("/draft/:id", (req, res) => {
  //   let d = req.body.draft;
  //   let dHotel = Hotel.findById(req.params.id);
  //   dHotel = Hotel.findByIdAndUpdate(req.params.id, {
  //     $set: { draft: d }
  //   }).then(res.send("Draft is updated successfully"));

  let d = 0;
  Hotel.findById(req.params.id).then(e => {
    Hotel.findByIdAndUpdate(req.params.id, {
      $set: { draft: e.draft + 1 }
    }).then(res.send("Draft is updated successfully"));
  });
});

//@route     POST api/hotels/booking/:id
//@desc      update booking
//@access    public
router.put("/booking/:id", (req, res) => {
  Hotel.findById(req.params.id).then(e => {
    Hotel.findByIdAndUpdate(req.params.id, {
      $set: { booking: e.booking + 1 }
    }).then(res.send("booking is updated successfully"));
  });
});

//@route     POST api/hotels/views/:id
//@desc      update views
//@access    public
router.put("/views/:id", (req, res) => {
  Hotel.findById(req.params.id).then(e => {
    Hotel.findByIdAndUpdate(req.params.id, {
      $set: { views: e.views + 1 }
    }).then(res.send("views is updated successfully"));
  });
});

module.exports = router;
