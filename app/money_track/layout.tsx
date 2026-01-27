import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
        {/* 左上角导航区 */}
        <nav className="mb-0 pl-4 pt-4 md:pl-4 md:pt-4">
            <Link 
                href="/" 
                className={`inline-flex items-center text-xl text-white hover:text-blue-800 transition-colors font-medium ${lusitana.className}`}
            >
                <span className="mr-2">&lt;&lt;</span>
                Home
            </Link>
        </nav>

        {/* 子页面内容区 */}
        <div className="
            grow w-full transition-all duration-300 py-3
            /* 桌面端 (md) 适配 */
            md:h-screen md:overflow-y-auto md:p-12 md:pb-6
        "
        >
            {children}
        </div>
    </main>
    
  );
}
