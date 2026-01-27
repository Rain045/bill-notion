import SideNav from '@/app/ui/dashboard/sidenav';
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
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">

                {/* 导航栏 */}
                <SideNav />

            </div>
            <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    </main>
    
  );
}
