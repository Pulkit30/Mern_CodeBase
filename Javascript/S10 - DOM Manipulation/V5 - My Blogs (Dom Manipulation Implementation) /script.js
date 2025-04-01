const blogData = [
  {
    title: 'First Blog Post',
    date: 'January 1, 2022',
    content: 'this is content of the first blog page.'
  },
  {
    title: 'Second Blog Post',
    date: 'February 1, 2022',
    content: 'This is the content of the second blog post.'
  },
  {
    title: 'Third Blog Post',
    date: 'March 1, 2022',
    content: 'This is the content of the third blog post.'
  }
];
function addBlog(blog) {
    // Create the main blog post container
    const divElement = document.createElement('div');
    divElement.classList.add("blog-post");

    // Create the blog header
    const div1Element = document.createElement('div');
    div1Element.classList.add("blog-header");

    // Create blog title
    const h2Element = document.createElement('h2');
    h2Element.classList.add("blog-title");
    h2Element.textContent = blog.title;

    // Create blog date
    const pElement = document.createElement('p');
    pElement.classList.add("blog-date");
    pElement.textContent = blog.date;

    // Create blog content
    const p1Element = document.createElement('p');
    p1Element.classList.add("blog-content");
    p1Element.textContent = blog.content;

    // Append elements to header
    div1Element.append(h2Element, pElement);

    // Append header and content to the main div
    divElement.append(div1Element, p1Element);

    // Wrap the blog post inside an <li>
    const liElement = document.createElement('li');
    liElement.appendChild(divElement);

    // Select the <ul class="blog-list"> and append the <li>
    const parentUl = document.querySelector('.blog-list');
    if (parentUl) {
        parentUl.appendChild(liElement);
    } else {
        console.error("No element with class 'blog-list' found.");
    }
}
//Create your function here with the name addBlog which takes a blog object as parameter
//Call each object present in blogData with addBlog.
//If page does not update the changes automatically please refresh

//calling the function
blogData.forEach(blog => {
    addBlog(blog)
});