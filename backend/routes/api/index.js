const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const spotsRouter = require('./spot.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/spots', spotsRouter);

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;
