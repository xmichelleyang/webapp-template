/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index');
};

exports.viewAboutMe = function(req, res) {
  res.render('aboutMe');
};
