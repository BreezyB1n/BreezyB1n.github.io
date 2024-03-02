var posts=["2024/03/01/MySQL基础知识点速查/","2024/02/29/hello-world/","2024/02/29/位元算/","2024/03/02/滑动窗口/","2024/03/01/堆结构基础/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };