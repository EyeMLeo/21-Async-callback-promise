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
let postsDivEl = document.getElementById("cards");
let postsDivEl2 = document.getElementById("cards2");

function fetchData(url, howMany, target, root) {
  fetch(url)
    .then((arrPakas) => arrPakas.json())
    .then((ArrPackasReadable) => {
      for (let index = 0; index < howMany; index++) {
        let element = "";
        root === 1
          ? (element = ArrPackasReadable.posts[index])
          : (element = ArrPackasReadable[index]);

        let oneCard = `  <div class="card">
                  <h2>${element.title}</h2>
                  <p>${element.body}</p>
                </div>`;
        target.insertAdjacentHTML("afterbegin", oneCard);
      }
    });
}
fetchData("https://jsonplaceholder.typicode.com/posts", 5, postsDivEl);

// 1. is gautu duomenu atvaizduoti sarasa su vardais ir tel numeriais
// 2. post.js faile panaudoti Promise vietoj callback
// 3. parsisiusti postus is https://jsonplaceholder.typicode.com/posts su fetch
// 4. pasilikti tik pirmus 10.
// 5. is tu desimties sugeneruoti korteles htmle.
// 6. parsiusti postus is https://dummyjson.com/posts

// 7. sugeneruoti juos koteliu pavidale htmle.
fetchData("https://dummyjson.com/posts", 15, postsDivEl2, 1);
// 8. parasyti funkcija kuria iskvietus su fetch parsiunciami ir iskonsolinami produktai is https://dummyjson.com/products
function fetchDataAdvancet(url, howMany, target, root) {
  fetch(url)
    .then((arrPakas) => arrPakas.json())
    .then((ArrPackasReadable) => {
      for (let index = 0; index < howMany; index++) {
        let element = ArrPackasReadable.products[index];

        let oneCard = `  <div class="card">
<img src="${element.images[0]}">
                  <h2>${element.title}</h2>
                  <p>${element.description}</p>
                </div>`;
        target.insertAdjacentHTML("afterbegin", oneCard);
      }
    });
}
let phonesEl = document.getElementById("phones");
fetchDataAdvancet("https://dummyjson.com/products", 15, phonesEl);
// 9. parasyti funkcija kuri gauna masyva prekiu is 8uzd. ir juos avaizduoja html sarase.
// 10. panaudoti 8uzd ir 9uzd funkcijas ir atvaizduoti prekes
