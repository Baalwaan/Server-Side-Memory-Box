const handleForm = (req, res) => {
  console.log('this is your form: ', req.body);
  res.send(JSON.stringify(req.body));
};

module.exports = handleForm;
