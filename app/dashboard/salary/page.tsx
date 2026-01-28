export default function SalaryPage() {
  return (
    <div className="
      h-[83vh] w-full max-w-md mx-auto p-5 rounded-3xl shadow-lg 
      bg-gradient-to-tl from-blue-100 via-slate-50 to-white
      dark:from-indigo-900 dark:via-slate-800 dark:to-slate-700
      transition-all duration-500 border border-white/60 dark:border-slate-700/50"
    >
      <div className="flex flex-col h-full">
        <p className="text-xl font-bold text-blue-900 dark:text-blue-100">SalaryPage</p>
        <div className="mt-4 grow flex items-center justify-center border-2 border-dashed border-blue-200/50 dark:border-slate-700 rounded-2xl min-h-[200px]">
           <p className="text-blue-600/50 dark:text-slate-400">页面内容，敬请期待......</p>
        </div>
      </div>
    </div>
  );
}