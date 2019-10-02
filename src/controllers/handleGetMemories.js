const getMemoriesQuery = require('../database/queries/getMemories');

const handleGetMemories = (req, res) => {
  console.log('this is reqbody: ', req.body);
  const { name } = req.body;
  console.log('deconstructed', name);
  getMemoriesQuery(name.toLowerCase())
    .then(dbRes => res.send(dbRes))
    .catch(e => console.log('error: ', e));
};

module.exports = handleGetMemories;
