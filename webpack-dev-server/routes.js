const path = require('path')

const routes = ({ app, publicPath, title }) => {
  app.set('views', path.join(__dirname, 'templates'))
  app.set('view engine', 'ejs')

  app.get(/(^(?!.*\.js$).*)(^(?!.*\.css$).*)/, (req, res) => {
    res.render('html', {
      publicPath,
      title,
    })
  })
}

module.exports = routes
