const posts = [
  { title: 'Post One', body: 'This is post One body' },
  { title: 'Post Two', body: 'This is post Two body' },
];

// nusitaikom
const postsListEl = document.getElementById('posts');

// gauti postus imituojam kad truka 2sek juos gauti

function getPosts() {
  setTimeout(() => {
    // sugeneruoti ir patalpinti posts masyvo elementus
    posts.forEach((pObj) => {
      const liEl = document.createElement('li');
      liEl.textContent = `${pObj.title} - ${pObj.body}`;
      postsListEl.append(liEl);
    });
  }, 1000);
}

// create post funkcija kuti ideda nauja posta i pos masyva
function createPost(newPostObj, cb) {
  setTimeout(() => {
    posts.push(newPostObj);
    cb();
  }, 2000);
}

createPost({ title: 'Post Three', body: 'This is post Three body' }, getPosts);

// getPosts();

// 1 iskviesti getPosts tik po to kai sukurem posta su createPost su pavadinimu
// 2 iskviesti getPosts tik po to kai sukurem posta su createPost su callback fn
