import BackNav from "@/app/ui/back-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // 使用 h-dvh 确保在移动端完美适配，禁止最外层滚动
    <main className="h-dvh flex flex-col overflow-hidden">
      {/* 1.顶部返回导航 */}
      <BackNav />

      {/* 2. 主体布局：占用剩余的所有高度 (flex-grow) */}
      <div className="flex flex-grow flex-col overflow-hidden md:flex-row">

        {/* 内容区：只有这里允许滚动 */}
        <div className="flex-grow w-full overflow-y-auto px-4 pt-3 md:px-8 md:pt-6 pb-24 md:pb-6">
          {children}
        </div>
      </div>
    </main>
  );
}
