const postFormQuery = require('../database/queries/postForm');

const handleForm = (req, res) => {
  const { name, messageType, message } = req.body;
  console.log('deconstructed', name, messageType, message);
  postFormQuery(name.toLowerCase(), messageType, message)
    .then(dbRes => res.send(dbRes))
    .catch(e => console.log('error: ', e));
};

module.exports = handleForm;
