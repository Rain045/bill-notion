import Link from 'next/link';

export default function Home() { // 主页
  return (
    // <div>
    //   hello, world! 
    // </div>

    // APP名牌:样式1
    // <div className="
    //   max-w-sm              /* 限制最大宽度 */
    //   mx-auto               /* 水平居中 */
    //   my-10                 /* 上下外边距 */
    //   p-8                   /* 内边距 */
    //   bg-gradient-to-r from-cyan-500 to-blue-500 /* 渐变背景 */
    //   text-white            /* 字体颜色 */
    //   rounded-3xl           /* 超大圆角 */
    //   hover:scale-105       /* 悬停放大 */
    //   transition-transform  /* 动画过渡 */
    //   cursor-pointer        /* 鼠标手型 */
    // ">
    //   <p className="font-mono text-sm opacity-80">Notion-Powered Bill Tracker.</p>
    //   <h1 className="text-2xl font-bold mt-2">Bill Notion</h1>
    // </div>

    // 添加4个功能卡: 
    <main className="
      h-[100vh]
    "> 
      {/* APP名牌 */}
      <div className="
        max-w-xl              /* 限制最大宽度 */
        mx-auto               /* 水平居中 */
        my-0                 /* 上下外边距 */
        p-7                  /* 内边距 */
        bg-gradient-to-r from-cyan-500 to-blue-00 /* 渐变背景 */
        text-white            /* 字体颜色 */
        rounded-5xl           /* 超大圆角 */
      ">
        <p className="font-mono text-sm opacity-80">Notion-Powered Bill Tracker</p>
        {/* <h1 className="text-4xl font-bold mt-2">Bill Notion</h1> */}
        {/* <h1 className="text-4xl font-black mt-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
          Bill Notion
        </h1> */}
        <h1 className="
          text-4xl font-black mt-2 
          bg-clip-text text-transparent 
          text-4xl font-black mt-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50
          /* 增加文字阴影让深色文字在深色背景上更清晰 */
          drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]
        ">
          Bill Notion
        </h1>
      </div>

      {/* 功能卡1 */}
      <Link href="/money_track">
          <div className="
            max-w-md              /* 限制最大宽度 */
            mx-auto               /* 水平居中 */
            my-5                 /* 上下外边距 */
            p-8                   /* 内边距 */
            bg-gradient-to-tr from-blue-500 via-purple-600 to-purple-00 /* 渐变背景 */
            text-white            /* 字体颜色 */
            rounded-3xl           /* 超大圆角 */

            /* PC端反馈 */
            hover:scale-105       /* 悬停放大 */
            transition-transform  /* 动画过渡 */
            cursor-pointer        /* 鼠标手型 */

            /* 移动端反馈 */
            transition-all duration-150 ease-in-out
            active:scale-95 
            active:brightness-110
          ">
            <h2 className="text-2xl font-bold mt-2">Money Track</h2>
            <p className="font-mono text-sm opacity-80">Log an income or expense.</p>
          </div>
      </Link>
      

      {/* 功能卡2 */}
      <Link href="/dashboard">
          <div className="
            max-w-md              /* 限制最大宽度 */
            mx-auto               /* 水平居中 */
            my-5                 /* 上下外边距 */
            p-8                   /* 内边距 */
            bg-gradient-to-tr from-green-500 via-blue-600 to-purple-600 /* 渐变背景 */
            text-white            /* 字体颜色 */
            rounded-3xl           /* 超大圆角 */

            /* PC端反馈 */
            hover:scale-105       /* 悬停放大 */
            transition-transform  /* 动画过渡 */
            cursor-pointer        /* 鼠标手型 */

            /* 移动端反馈 */
            transition-all duration-150 ease-in-out
            active:scale-95 
            active:brightness-110
          ">
            <h2 className="text-2xl font-bold mt-2">Dashboard</h2>
            <p className="font-mono text-sm opacity-80">Review your flow, including salary breakdown.</p>
          </div>
      </Link>
      

      {/* 功能卡3 */}
      <div className="
        max-w-md              /* 限制最大宽度 */
        mx-auto               /* 水平居中 */
        my-5                 /* 上下外边距 */
        p-8                   /* 内边距 */
        bg-gradient-to-tr from-pink-500 via-sky-600 to-green-600 /* 渐变背景 */
        text-white            /* 字体颜色 */
        rounded-3xl           /* 超大圆角 */

        /* PC端反馈 */
        hover:scale-105       /* 悬停放大 */
        transition-transform  /* 动画过渡 */
        cursor-pointer        /* 鼠标手型 */

        /* 移动端反馈 */
        transition-all duration-150 ease-in-out
        active:scale-95 
        active:brightness-110
      ">
        <h2 className="text-2xl font-bold mt-2">Analysis & Visualization</h2>
        <p className="font-mono text-sm opacity-80">Data analysis and Charting.</p>
      </div>

      {/* 功能卡4 ：设置*/}
      <Link href="/settings">
        <div className="
          max-w-md              /* 限制最大宽度 */
          mx-auto               /* 水平居中 */
          my-5                 /* 上下外边距 */
          p-8                   /* 内边距 */
          bg-gradient-to-tr from-blue-00 via-sky-800 to-pink-600 /* 渐变背景 */
          text-white            /* 字体颜色 */
          rounded-3xl           /* 超大圆角 */

          /* PC端反馈 */
          hover:scale-105       /* 悬停放大 */
          transition-transform  /* 动画过渡 */
          cursor-pointer        /* 鼠标手型 */

          /* 移动端反馈 */
          transition-all duration-150 ease-in-out
          active:scale-95 
          active:brightness-110
        ">
          <h2 className="text-2xl font-bold mt-2">Settings</h2>
          <p className="font-mono text-sm opacity-80">Configure.</p>
        </div>
      </Link>
      
    </main>
  );
}
