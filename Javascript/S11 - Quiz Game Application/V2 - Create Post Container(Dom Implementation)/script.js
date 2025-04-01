// Define the post1 object with the given details.
let post1 = {
  id: 1,
  author: 'John',
  content: 'My first Post!',
  likes: 10,
  comments: ['Great post!', 'Nice photo!'],
  image: 'https://files.codingninjas.in/image2-28694.jpg'
};

// Function to render the post1 object on the screen.
function renderPosts() {
  // Get the container where the post will be added.
  const parentDiv = document.querySelector('#posts');
  const divElement = document.createElement('div');
  divElement.classList.add("post");
  parentDiv.append(divElement);

  const h3Element = document.createElement('h3');
  h3Element.textContent = post1.author;

  const imgElement = document.createElement("img");
  imgElement.src = post1.image;
  imgElement.alt = "Post Image";

  const pElement = document.createElement('p');
  pElement.textContent = post1.content;

  const likeButton = document.createElement('button');
  likeButton.textContent = 'Like';

  const inputElement = document.createElement('input');
  inputElement.type = "text";
  inputElement.placeholder = 'Write a comment...';

  const buttonElement = document.createElement('button');
  buttonElement.textContent = 'Comment';

  const postFooter = document.createElement("div");
  postFooter.classList.add("post-footer");
  postFooter.textContent = `Likes: ${post1.likes} Comments: ${post1.comments.length}`;

  const commentsContainer = document.createElement("div");
  commentsContainer.classList.add("comments-container");
  commentsContainer.style.display = "none";

  post1.comments.forEach(comment => {
    const commentElement = document.createElement("p");
    commentElement.textContent = comment;
    commentsContainer.appendChild(commentElement);
  });

  postFooter.addEventListener("click", () => {
    commentsContainer.style.display = commentsContainer.style.display === "none" ? "block" : "none";
  });

  divElement.append(h3Element, imgElement, pElement, likeButton, inputElement, buttonElement, postFooter, commentsContainer);

  // Clear any existing content in the posts container.


  // Create a new div element for the post and set its class.


  // Create an h3 element for the author's name and set its text content.
  
 
  // Create an img element for the post's image and set its source and alt text.
  

  // Create a p element for the post's content and set its text content.
  

  // Create a button element for "Like" and set its text content.
  

  // Create an input element for writing comments and set its type and placeholder.
 

  // Create a button element for "Comment" and set its text content.
 

  // Create a div element for the post footer and set its class and text content.
 

  // Create a div element for the comments container and set its class.
  // Initially, set its display style to 'none' to hide it.
 

  // For each comment in the comments array, create a p element and append it to the comments container.
  

  // Append all created elements to the post container.
  

  // Add a click event listener to toggle the visibility of commentsContainer.
  

  // Append the post element to the posts container.
}
renderPosts()
// Call the renderPosts function to display the post on the screen.
