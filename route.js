/******************************************************************************ITE5315 – Project
 * I declare that this assignment is my own work in accordance with Humber AcademicPolicy.
 * No part of this assignment has been copied manually or electronically from any othersource(including web sites)
 *  or distributed to other students
 * Name:Brinda Parmar Student ID:N01582223 Date:07-04-2024******************************************************************************/

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { body, query, param, validationResult } = require('express-validator');
const db = require('./database.js');
const Restaurant = require('./models/restaurants');

// Authentication middleware
const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

// POST /api/restaurants
router.post('/api/restaurants', authenticateJWT, [
  body('name').notEmpty().isString(),
  body('borough').optional().isString(),
], async (req, res) => {
  // Route logic for adding a new restaurant
});

// PUT /api/restaurants/:id
router.put("/api/restaurants/:id", authenticateJWT, [
  param('id').isMongoId(),
  body('name').notEmpty().isString(),
  body('borough').optional().isString(),
], async (req, res) => {
  // Route logic for updating a restaurant
});

// DELETE /api/restaurants/:id
router.delete("/api/restaurants/:id", authenticateJWT, [
  param('id').isMongoId(),
], async (req, res) => {
  // Route logic for deleting a restaurant
});

module.exports = router;

// const express = require('express');
// const router = express.Router();
// const { body, query, param, validationResult } = require('express-validator');
// const db = require('./database.js');
// const Restaurant = require('./models/restaurants');
// // POST /api/restaurants
// router.post('/api/restaurants', [
//     body('name').notEmpty().isString(),
//     body('borough').optional().isString(),
//   ], async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     try {
//       const newRestaurant = await db.addNewRestaurant(req.body);
//       res.status(201).json(newRestaurant);
//     } catch (error) {
//       console.error('Error adding new restaurant:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });
  
//   // GET /api/restaurants
//   router.get("/api/restaurants", [
//     query('page').isNumeric(),
//     query('perPage').isNumeric(),
//     query('borough').optional().isString(),
//   ], async (req, res) => {
    
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     try {
//       const restaurants = await db.getAllRestaurants(req.query.page, req.query.perPage, req.query.borough);
//       console.log(restaurants)
//       res.json(restaurants);
//     } catch (error) {
//       console.error('Error fetching restaurants:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });
  
//   // GET /api/restaurants/:id
//   router.get("/api/restaurants/:id", [
//     param('id').isMongoId(),
//   ], async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     try {
//       const restaurant = await db.getRestaurantById(req.params.id);
//       if (!restaurant) {
//         return res.status(404).json({ error: 'Restaurant not found' });
//       }
//       res.json(restaurant);
//     } catch (error) {
//       console.error('Error fetching restaurant by ID:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });
  
//   // PUT /api/restaurants/:id
//   router.put("/api/restaurants/:id", [
//     param('id').isMongoId(),
//     body('name').notEmpty().isString(),
//     body('borough').optional().isString(),
//   ], async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     try {
//       const updatedRestaurant = await db.updateRestaurantById(req.body, req.params.id);
//       if (!updatedRestaurant) {
//         return res.status(404).json({ error: 'Restaurant not found' });
//       }
//       res.json(updatedRestaurant);
//     } catch (error) {
//       console.error('Error updating restaurant by ID:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });
  
//   // DELETE /api/restaurants/:id
//   router.delete("/api/restaurants/:id", [
//     param('id').isMongoId(),
//   ], async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     try {
//       const deletedRestaurant = await db.deleteRestaurantById(req.params.id);
//       if (!deletedRestaurant) {
//         return res.status(404).json({ error: 'Restaurant not found' });
//       }
//       res.json({ message: 'Restaurant deleted successfully' });
//     } catch (error) {
//       console.error('Error deleting restaurant by ID:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });

// module.exports = router;
