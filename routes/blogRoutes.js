const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const puppeteer = require("puppeteer")

const Blog = mongoose.model('Blog');

module.exports = app => {

  app.get('/some', (req, res) => {
    (async() => {
      const browser = await puppeteer.launch({headless: false});
      const page = await browser.newPage();
      await page.goto('https://facebook.com', {waitUntil : 'networkidle2' });
    
      // Here we can get all of the cookies
      console.log(await page._client.send('Network.getAllCookies'));
    })();
    res.send("hmmm let me have a look")
  })

  app.get('/api/blogs/:id', requireLogin, async (req, res) => {
    const blog = await Blog.findOne({
      _user: req.user.id,
      _id: req.params.id
    });

    res.send(blog);
  });

  app.get('/api/blogs', requireLogin, async (req, res) => {
    const blogs = await Blog.find({ _user: req.user.id });
    
    res.send(blogs);
  });

  app.post('/api/blogs', requireLogin, async (req, res) => {
    const { title, content } = req.body;

    const blog = new Blog({
      title,
      content,
      _user: req.user.id
    });

    try {
      await blog.save();
      res.send(blog);
    } catch (err) {
      res.send(400, err);
    }
  });
};
