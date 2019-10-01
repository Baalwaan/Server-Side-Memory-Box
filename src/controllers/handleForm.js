const handleForm = (req, res) => {
  console.log('this is your form: ', req.body);
  res.send(JSON.stringify({'message': 'heroku says hi'}));
};

module.exports = handleForm;
