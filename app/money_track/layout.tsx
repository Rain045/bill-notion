import BackNav from "@/app/ui/back-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
        {/* 左上角返回 */}
        <BackNav />
        

        {/* 子页面内容区 */}
        <div className="pt-3"
        >
            {children}
        </div>
    </main>
    
  );
}
