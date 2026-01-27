import { Lusitana } from 'next/font/google';

// 引入字体需要创建一个变量:使用export导出以便其他文件引用
export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lusitana',
});