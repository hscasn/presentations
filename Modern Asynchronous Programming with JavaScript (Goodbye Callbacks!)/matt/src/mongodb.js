const r = [
  { author: 'John Doe', content: 'The quick brown fox jumps over the lazy dog' },
  { author: 'Mark Doe', content: 'Five or six big jet planes zoomed quickly by the new tower' },
];



module.exports = {
  collection: function () {
    return {
      find: function (o, cb) {

        if (cb) {
          const t = ~~(Math.random() * 1000);
          setTimeout(() => cb(r), t);
          return;
        }

        return {
          exec: function () {
            const t = ~~(Math.random() * 1000);
            return new Promise((resolve) => {
              setTimeout(resolve(r), t);
            });
          },
          count: function (cb) {
            const t = ~~(Math.random() * 1000);
            if (cb) {
              setTimeout(() => cb(6), t);
              return;
            }
            return new Promise((resolve) => {
              setTimeout(resolve(6), t);
            });
          }
        };
      }
    };
  }
};
