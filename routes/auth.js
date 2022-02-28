const User = require("../models/User");
const router = require("express").Router();

router.post("/register", async (req, res) => {
    try {
      //create new user
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
      });
  
      //save user and respond
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err)
    }
});

router.get("/login", function (req, res) {
    res.render("login");
  });
  // POST /sendtoken
  router.post(
    "/sendtoken",
    urlencodedParser,
    passwordless.requestToken(
      // Simply accept every user*
      function (user, delivery, callback) {
        callback(null, user);
      }
    ),
    function (req, res) {
      res.render("pages/sent", { user: req.user });
    }
);

module.exports = router;