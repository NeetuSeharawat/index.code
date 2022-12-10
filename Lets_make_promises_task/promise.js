const posts = [
    { title: "post 1", body: "This is from post 1" },
    { title: "post 2", body: "This is from post 2" },
  ];
  
  function getPosts() {
    setTimeout(() => {
      let outout = "";
      posts.forEach((post, index) => {
        outout += `<li>${post.title}<li>`;
      });
      document.body.innerHTML = outout;
    }, 1000);
  }
  
  function createPost(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push(post);
        const error = false;
        if (!error) {
          resolve();
        } else {
          reject("Something went wrong");
        }
      }, 2000);
    });
  }
  
  function deletePost() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
  
        if (posts.value !== 0) {
          resolve(posts.pop());
        } else {
          reject("Something went wrong");
        }
      }, 2000);
    });
  }
  
  function updateLastActivityTime(){
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              posts.lastActivityTime = new Date().getTime();
              resolve(posts.lastActivityTime)
          },1000)
      })
  }
  
  function updatePost(){
      Promise.all([createPost,lastActivityTime])
      .then(([createPostresolves,updateLastActivityTimeresolves])=>{
          console.log(updateLastActivityTimeresolves);
      })
      .catch(err=>{console.log(err)})
  }
  
  createPost({ title: "post 3", body: "This is from post 3" })
    .then(()=>{
      getPosts();
      deletePost().then(()=>{
          console.log(posts)
      });
    })
    .catch((error) => console.log(error));