const handleForm = (req, res) => {
  console.log('this is your form: ', req.body);
  res.send({'message': 'heroku says hi'});
};

module.exports = handleForm;
