const db = require('./src/mongodb');
const render = require('./src/render');
const Express = require('express');
const app = Express();

app.use((req, res) => {
  getPosts((posts, totalPostsNo) => {
    buildHTML(posts, totalPostsNo, (result) => {
      res.send(result); // < Callback hell
    });
  });

});

app.listen(3000, () => {
  console.log(`Server listening on port 3000`);
});


// Helpers
function getPosts(cb) { // < Long, cluttered function to run two queries in parallel
  let count = 0;
  let posts = [];
  let queriesLeft = 2;

  db.collection('posts')
    .find({})
    .count((c, err) => {
      if (err) { // < Repeated error handling
        console.log(err);
      }
      else {
        count = c;
      }

      queriesLeft--;
      if (queriesLeft <= 0) { finish(); }
    });

  db.collection('posts')
    .find({ date: { $gte: 1483246800000 } }, (p, err) => {
      if (err) { // < Repeated error handling
        console.log(err);
      }
      else {
        posts = p;
      }

      queriesLeft--;
      if (queriesLeft <= 0) { finish(); }
    });

  function finish() {
    cb(posts, count);
  }
}

function buildHTML(posts, postsNo, cb) {
  render('posts', {
    posts,
    postsNo,
  }, cb);
}
