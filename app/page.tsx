export default function Home() { // 主页
  return (
    // <div>
    //   hello, world! 
    // </div>

    // APP名牌:样式1
    <div className="
      max-w-sm              /* 限制最大宽度 */
      mx-auto               /* 水平居中 */
      my-10                 /* 上下外边距 */
      p-8                   /* 内边距 */
      bg-gradient-to-r from-cyan-500 to-blue-500 /* 渐变背景 */
      text-white            /* 字体颜色 */
      rounded-3xl           /* 超大圆角 */
      hover:scale-105       /* 悬停放大 */
      transition-transform  /* 动画过渡 */
      cursor-pointer        /* 鼠标手型 */
    ">
      <p className="font-mono text-sm opacity-80">Notion-Powered Bill Tracker.</p>
      <h1 className="text-2xl font-bold mt-2">Bill Notion</h1>
    </div>
  );
}
