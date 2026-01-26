"use client"; // 因为有返回逻辑或可能的点击交互，建议声明为客户端组件

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Lusitana } from 'next/font/google';


// 引入字体需要创建一个变量
const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lusitana',
});


export default function AddPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-black p-4">
      {/* 左上角导航区 */}
      <nav className="mb-8">
        <Link 
          href="/" 
          className={`inline-flex items-center text-xl text-white hover:text-blue-800 transition-colors font-medium ${lusitana.className}`}
        >
          {/* 这里用一个简单的 HTML 箭头符号，也可以用 Lucide-react 等图标库 */}
          <span className="mr-2">&lt;&lt;</span>
          Home
        </Link>
      </nav>

      {/* 页面主体内容 */}
      <div className="max-w-md mx-auto p-6 rounded-2xl shadow-sm 
        bg-gradient-to-tl from-indigo-800 via-slate-800 to-slate-600
      ">
        <h1 className={`text-4xl ${lusitana.className} font-bold mb-6
          bg-gradient-to-r from-sky-300 to-purple-800 bg-clip-text text-transparent /* 字体渐变 */
        `}>
          Money Track
        </h1>
        
        {/* 记一笔收入*/}
        <div className="
            space-y-4              /* 控制子元素垂直间距 */
            max-w-md              /* 限制最大宽度 */
            mx-auto               /* 水平居中 */
            my-3                 /* 上下外边距 */
            p-8                   /* 内边距 */
            bg-gradient-to-tl from-green-700  via-slate-300 to-cyan-600
            
            rounded-3xl           /* 超大圆角 */
            hover:scale-105       /* 悬停放大 */
            transition-transform  /* 动画过渡 */
            cursor-pointer        /* 鼠标手型 */
        ">
          <p className={`
            text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-green-600 bg-clip-text text-transparent text-center py-10  rounded-lg
            /*border-5 border-line border-slate-200  边框线设置*/
            ${lusitana.className} 
          `}>
            Income
          </p>
        </div>

        {/* 记一笔支出*/}
        <div className="
            space-y-4              /* 控制子元素垂直间距 */
            max-w-md              /* 限制最大宽度 */
            mx-auto               /* 水平居中 */
            my-3                 /* 上下外边距 */
            p-8                   /* 内边距 */
            bg-gradient-to-tl from-rose-700  via-slate-800 to-pink-600 /* 渐变背景 */
            rounded-3xl           /* 超大圆角 */
            hover:scale-105       /* 悬停放大 */
            transition-transform  /* 动画过渡 */
            cursor-pointer        /* 鼠标手型 */
        ">
          <p className={`
            text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-red-600 bg-clip-text text-transparent text-center py-10  rounded-lg
            /*border-5 border-line border-slate-200  边框线设置*/
            ${lusitana.className} 
          `}>
            Expense
          </p>
        </div>

      </div>
    </main>
  );
}