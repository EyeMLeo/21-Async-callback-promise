"use strict";
console.log("fetch.js");

// norim parsisiusti duomenis is interneto ir su jais sugeneruoti postus
// fetch(url)
// .then((response) => response)

// let title = 'NOT SET';

// fetch anatomy
// fetch('https://jsonplaceholder.typicode111.com/posts/2')
//   .then((response) => {
//     console.log('response ===', response);
//     return response.json();
//   })
//   .then((data) => {
//     // mes turm duomenis kuriu prasem is url, po tiek laiko kiiek truko parsisiusti
//     console.log(data);
//     title = data.title;
//     document.title = title;
//   })
//   .catch((err) => console.warn('klaida gaunant posts', err));

// document.title = title; // NOT SET

// parsisiusti 10 useriu is https://jsonplaceholder.typicode.com/users
// iskonsologinti

const url = "https://jsonplaceholder.typicode.com/users";
let postsEl = document.getElementById("posts");

fetch(url)
  .then((response) => response.json()) // .json() => JSON.parse()
  .then((dataInJsFormat) => {
    // gavau duomenis
    console.log("dataInJsFormat ===", dataInJsFormat);
    dataInJsFormat.forEach((element) => {
      postsEl.insertAdjacentHTML(
        "afterbegin",
        `<li>${element.name} ${element.phone}</li>`
      );
    });
  })
  .catch((err) => console.warn("klaida gaunant users", err));

// is gautu duomenu atvaizduoti sarasa su vardais ir tel numeriais
