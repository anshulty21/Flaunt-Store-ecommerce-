const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// custom routes without logged in 
router.get('/', forwardAuthenticated, (req, res) => res.render('../views/pages/index'));


router.get('/shop', (req, res) => 
res.render('../views/pages/shop'));



//protected routes

//shop
router.get('/user/shop', ensureAuthenticated, (req, res) => 
res.render('../views/pages/shop-dashboard.ejs', {
  user: req.user
})
);


router.get('/cart', ensureAuthenticated, (req, res) => 
res.render('../views/pages/cart.ejs', {
  user: req.user
})
);



// Dashboard
router.get('/dashboard' , ensureAuthenticated, (req, res) =>
  res.render('../views/pages/dashboard.ejs', {
    user: req.user
  })
);


//End of protected routes

module.exports = router;
