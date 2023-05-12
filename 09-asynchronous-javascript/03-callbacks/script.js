// function toggle(e) {
//   console.log('callback ran');
//   e.target.classList.toggle('danger');
// }

// document.querySelector('button').addEventListener('click', toggle);

const posts = [
  { title: "Aryan" , body: "OP" },
  { title : "Nikshe" , body : "Nakli"}
];

function getPost() //Executes instantly
{
  posts.forEach(emt => {
    const div = document.createElement ("div");
    div.innerHTML = `<strong>${emt.title}</strong> - ${emt.body}`;
    document.querySelector("#posts").appendChild(div);
  });
}


function addPost (titless , body1 , cb) //Executes after 2 seconds
{
  const post1 = {title : titless , body :body1};
  posts.push(post1);
  cb();
} 

function addPostCallback ()  //Executes after 2 seconds
{
  addPost("Sakshi" , "nakiliiiiii", getPost);
  addPost("Vijaylaxmi" , "Moti", getPost);
  console.log(posts);
}


