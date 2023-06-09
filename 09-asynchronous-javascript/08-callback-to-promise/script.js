
const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
];

function createPost(post) {
  let error = true;
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(error)
      {
        reject();
      }
      posts.push(post);
      resolve();
    }, 2000); 
  })
 
}

function getPosts() {
  setTimeout(() => {
    posts.forEach(function (post) {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector('#posts').appendChild(div);
    });
  }, 1000);
}

createPost({ title: 'Post Three', body: 'This is post' })
.then((result) => {
getPosts();  
})
.catch((err) => {
  console.log("Error");
});;

