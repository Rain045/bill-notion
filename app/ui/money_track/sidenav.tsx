import NavLinks from '@/app/ui/money_track/nav-links';


export default function SideNav() {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full border-t transition-colors duration-300
      /* 亮色模式：修改为浅蓝色背景，配合毛玻璃效果 */
      bg-[#c7ecf7]/80 border-blue-200 backdrop-blur-md 
      /* 暗色模式：保持深邃色调 */
      dark:bg-slate-900/90 dark:border-slate-800 dark:backdrop-blur-lg
      /* 桌面端适配 */
      md:relative md:flex md:h-full md:flex-col md:border-t-0 md:bg-transparent md:px-2 md:py-4">
      
      {/* 滚动容器 */}
      <div className="flex grow flex-row overflow-x-auto scrollbar-hide justify-start space-x-2 p-3 
        md:flex-col md:overflow-x-visible md:space-x-0 md:space-y-2 md:p-0">
        
        <NavLinks />

        {/* 桌面端占位背景板 */}
        <div className="hidden h-auto w-full grow rounded-md bg-blue-50/50 dark:bg-slate-800/50 md:block"></div>
      </div>

      {/* 安全区域：颜色需与主背景同步 */}
      <div className="h-[env(safe-area-inset-bottom)] bg-[#c7ecf7]/80 dark:bg-slate-900/90 md:hidden"></div>
    </div>
  );
}