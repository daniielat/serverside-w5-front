const router = require('nordic/ragnar').router();  //Enrutador 
const { render } = require('./controller');

router.get('/', render);

module.exports = router;