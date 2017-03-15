const db = require('./src/mongodb');
const render = require('./src/render');
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => { // < No callback hell
  const { posts, totalPostsNo } = await getPosts();
  ctx.body = await buildHTML(posts, totalPostsNo);
});

app.listen(3000, () => {
  console.log(`Server listening on port 3000`);
});


// Helpers
async function getPosts() { // < Simple and short function
  try { // < No repeated error handling
    const [ posts, totalPostsNo ] = await Promise.all([
      db.collection('posts')
        .find({ date: { $gte: 1483246800000 } })
        .exec(),
      
      db.collection('posts')
        .find({})
        .count(),
    ]);

    return { posts, totalPostsNo };
  }
  catch (e) {
    console.log(e);
    return { posts: [], totalPostsNo: 0 };
  }
}

async function buildHTML(posts, postsNo) {
  return await render('posts', {
    posts,
    postsNo,
  });
}
