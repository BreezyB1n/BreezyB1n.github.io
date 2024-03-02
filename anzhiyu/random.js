var posts=["2024/03/01/MySQL基础知识点速查/","2024/02/29/hello-world/","2024/02/29/位元算/","2024/03/02/滑动窗口/","2024/03/01/堆结构基础/","2024/03/02/面向抽象编程(依赖倒转 + 里氏代换原则)/","2024/03/02/蛋老师小课堂/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };