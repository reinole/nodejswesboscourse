exports.homePage = (req, res) => {
  res.render('index');
};

exports.addStore = (req, res) => {
  res.render('editStore', { title: 'Add Store' });
};

exports.createStore = (req, res) => {
  //sends data back to user view: res.json(req.body);
};
