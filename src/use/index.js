const Plugin1 = {
  // install(a, b, c) {
  //     console.log('Plugin1 第一个参数:', a);
  //     console.log('Plugin1 第二个参数:', b);
  //     console.log('Plugin1 第三个参数:', c);
  // },
  install(Vue){
    console.log('Vue: ', Vue);
    console.log('this: ', this);
  },
  utils(Vue){
    console.log('Vue: ', Vue);
  },
  COUNT:0
};
// 我们可以在这个对象上添加参数，最终Vue只会执行install方法，而其他方法可以作为封装install方法的辅助函数
function Plugin2(a, b, c) {
  console.log('Plugin2 第一个参数:', a);
  console.log('Plugin2 第二个参数:', b);
  console.log('Plugin2 第三个参数:', c);
}

export { Plugin1, Plugin2 };