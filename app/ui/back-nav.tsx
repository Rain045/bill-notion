import Link from 'next/link';
import { lusitana } from './fonts';

export default function BackNav() {
  return (
        <nav className="mb-0` pl-4 pt-4 md:pl-4 md:pt-4">
            <Link 
                href="/" 
                className={`
                    inline-flex items-center text-xl transition-colors font-medium group
                    /* 亮色模式：使用深蓝色（对比度高） */
                    text-blue-900 hover:text-blue-700
                    /* 暗色模式：恢复为白色 */
                    dark:text-white dark:hover:text-blue-300
                    /* 字体变量 */
                    ${lusitana.className}
                `}
            >
                {/* 图标/箭头添加一个小动画，增加交互感 */}
                <span className="mr-2 transition-transform group-hover:-translate-x-1">
                &lt;&lt;
                </span>
                Home
            </Link>
        </nav>
    );
}