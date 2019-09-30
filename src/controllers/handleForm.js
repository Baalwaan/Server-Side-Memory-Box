const handleForm = (req, res) => {
  console.log('this is your form: ', req.body);
  res.send(req.body);
};

module.exports = handleForm;
