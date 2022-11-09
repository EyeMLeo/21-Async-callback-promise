const posts = [
  { title: "Post One", body: "This is post One body" },
  { title: "Post Two", body: "This is post Two body" },
];

// nusitaikom
const postsListEl = document.getElementById("posts");

// gauti postus imituojam kad truka 2sek juos gauti

function getPosts() {
  setTimeout(() => {
    // sugeneruoti ir patalpinti posts masyvo elementus
    posts.forEach((pObj) => {
      const liEl = document.createElement("li");
      liEl.textContent = `${pObj.title} - ${pObj.body}`;
      postsListEl.append(liEl);
    });
  }, 1000);
}

// create post funkcija kuti ideda nauja posta i pos masyva
function createPost(newPostObj) {
  setTimeout(() => {
    posts.push(newPostObj);
  }, 2000);
}

createPost({ title: "Post Three", body: "This is post Three body" });

function pr1() {
  return new Promise((resolve, reject) => {
    // kazkokia logika
    let noError = true;

    if (noError) {
      // kai nera klaidu
      resolve("OK");
    } else {
      // kai yra klaidu
      reject("BAD BAD THING HAPPENED");
    }
  });
}

pr1()
  .then(createPost({ title: "Post Three", body: "This is post Three body" }))
  .then(getPosts)
  .catch((err) => console.warn(err));

// getPosts();

// 1 iskviesti getPosts tik po to kai sukurem posta su createPost su pavadinimu
// 2 iskviesti getPosts tik po to kai sukurem posta su createPost su callback fn
