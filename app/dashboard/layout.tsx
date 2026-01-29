// app/dashboard/layout.tsx
import SideNav from '@/app/ui/dashboard/sidenav';
import BackNav from '@/app/ui/back-nav';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-dvh flex flex-col overflow-hidden">
      
        {/* 加上 w-full 确保它占满一行 */}
        <div className="grid grid-cols-3 w-full items-start pr-4 md:pr-8">
        
            {/* 左侧：占 1/3 */}
            <div className="flex justify-start min-w-0">
                <BackNav />
            </div>

            {/* 中间：占 1/3 */}
            <div className="flex justify-center items-center min-w-0">
                <h1 className="text-xl font-bold text-blue-900/30 dark:text-white/30 mb-0 pt-4 md:pt-4 whitespace-nowrap">
                Dashboard
                </h1>
            </div>

            {/* 右侧：占 1/3 */}
            <div className="min-w-0" />
            
        </div>

      {/* 主体布局 */}
      <div className="flex flex-grow flex-col overflow-hidden md:flex-row">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="flex-grow w-full overflow-y-auto px-4 pt-3 md:px-8 md:pt-6 pb-24 md:pb-6">
          {children}
        </div>
      </div>
    </main>
  );
}