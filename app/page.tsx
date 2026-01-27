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
      /* 父级容器控制 功能卡间距 */
    "> 
      {/* APP名牌 */}
      <div className="
        max-w-xl              /* 限制最大宽度 */
        mx-auto               /* 水平居中 */
        my-0                 /* 上下外边距 */
        p-7                  /* 内边距 */
        bg-gradient-to-r from-cyan-500 to-blue-500 /* 渐变背景 */
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
            my-3                 /* 上下外边距 */
            p-8                   /* 内边距 */
            bg-gradient-to-tr from-blue-500 via-blue-600 to-purple-600 /* 渐变背景 */
            text-white            /* 字体颜色 */
            rounded-3xl           /* 超大圆角 */
            hover:scale-105       /* 悬停放大 */
            transition-transform  /* 动画过渡 */
            cursor-pointer        /* 鼠标手型 */
          ">
            <h2 className="text-2xl font-bold mt-2">Money Track</h2>
            <p className="font-mono text-sm opacity-80">Log an income or expense.</p>
          </div>
      </Link>
      

      {/* 功能卡2 */}
      <div className="
        max-w-md              /* 限制最大宽度 */
        mx-auto               /* 水平居中 */
        my-3                 /* 上下外边距 */
        p-8                   /* 内边距 */
        bg-gradient-to-br from-blue-600 to-indigo-700 /* 渐变背景 */
        text-white            /* 字体颜色 */
        rounded-3xl           /* 超大圆角 */
        hover:scale-105       /* 悬停放大 */
        transition-transform  /* 动画过渡 */
        cursor-pointer        /* 鼠标手型 */
      ">
        <h2 className="text-2xl font-bold mt-2">Dashboard</h2>
        <p className="font-mono text-sm opacity-80">Review your flow, including salary breakdown.</p>
      </div>

      {/* 功能卡3 */}
      <div className="
        max-w-md              /* 限制最大宽度 */
        mx-auto               /* 水平居中 */
        my-3                 /* 上下外边距 */
        p-8                   /* 内边距 */
        bg-gradient-to-br from-indigo-900 to-blue-900 /* 渐变背景 */
        text-white            /* 字体颜色 */
        rounded-3xl           /* 超大圆角 */
        hover:scale-105       /* 悬停放大 */
        transition-transform  /* 动画过渡 */
        cursor-pointer        /* 鼠标手型 */
      ">
        <h2 className="text-2xl font-bold mt-2">Analysis & Visualization</h2>
        <p className="font-mono text-sm opacity-80">Data analysis and Charting.</p>
      </div>

      {/* 功能卡4 */}
      <div className="
        max-w-md              /* 限制最大宽度 */
        mx-auto               /* 水平居中 */
        my-3                 /* 上下外边距 */
        p-8                   /* 内边距 */
        bg-gradient-to-br from-gray-900 to-indigo-950 /* 渐变背景 */
        text-white            /* 字体颜色 */
        rounded-3xl           /* 超大圆角 */
        hover:scale-105       /* 悬停放大 */
        transition-transform  /* 动画过渡 */
        cursor-pointer        /* 鼠标手型 */
      ">
        <h2 className="text-2xl font-bold mt-2">Settings</h2>
        <p className="font-mono text-sm opacity-80">Configure.</p>
      </div>
    </main>
  );
}
