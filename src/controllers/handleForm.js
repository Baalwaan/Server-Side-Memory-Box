const postFormQuery = require('../database/queries/postForm');

const handleForm = (req, res) => {
  // console.log('this is your form: ', req.body);
  const name = 'Burhan';
  const messageType = 'Challenge';
  const message = 'Hi, heroku is king';
  // const { name, messageType, message } = req.body;
  console.log('deconstructed', name, messageType, message);
  postFormQuery(name, messageType, message)
    .then(dbRes => res.send(JSON.stringify(dbRes)))
    .catch(e => console.log('error: ', e));
};

module.exports = handleForm;
