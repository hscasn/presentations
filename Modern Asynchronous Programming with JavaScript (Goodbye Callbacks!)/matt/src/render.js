module.exports = function (title, o, cb) {

  const exec = (resolve) => {
    setTimeout(() => {
      let result = ``;
      o.posts.forEach((post) => {
        result += `<li><b>${post.author}</b> ${post.content}</li>`;
      });
      result = `<ul>${result}</ul>`;
      result += `<div>${o.posts.length} posts made this year, from a total of ${o.postsNo} posts</div>`;
      resolve(result);
    }, ~~(Math.random() * 1000));
  };

  if (cb) {
    exec(cb);
    return;
  }

  return new Promise((resolve) => {
    exec(resolve);
  });
}
