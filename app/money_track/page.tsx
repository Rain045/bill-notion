import { lusitana } from '@/app/ui/fonts';

export default function MoneyTrackPage() {

  return (
    <div className="max-w-md mx-auto p-6 rounded-2xl shadow-sm transition-colors duration-500
      /* 亮色：柔和的浅色渐变 */
      bg-gradient-to-tl from-indigo-50 via-slate-50 to-white
      /* 暗色：你原来的深色系 */
      dark:bg-gradient-to-tl dark:from-indigo-900 dark:via-slate-800 dark:to-slate-700
    ">
    
      {/* 标题：Money Track */}
      <h1 className={`text-4xl ${lusitana.className} font-bold mb-6 transition-all
        bg-gradient-to-r from-sky-600 to-indigo-800 bg-clip-text text-transparent
        dark:from-sky-300 dark:to-purple-400
      `}>
        Money Track
      </h1>
    
      {/* 记一笔收入 */}
      <div className="
          group relative space-y-4 max-w-md mx-auto my-4 p-8 
          /* 亮色：明亮的翠绿渐变 */
          bg-gradient-to-tl from-green-50 via-emerald-100 to-cyan-50
          /* 暗色：原有的深绿渐变 */
          dark:bg-gradient-to-tl dark:from-green-900/80 dark:via-slate-800 dark:to-cyan-900/80
          
          rounded-3xl shadow-md border border-white/50 dark:border-none
          active:scale-95 hover:scale-[1.02] transition-all duration-200 cursor-pointer
      ">
        <p className={`
          text-3xl font-extrabold text-center py-10 
          bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent
          dark:from-blue-400 dark:to-green-400
          ${lusitana.className} 
        `}>
          Income
        </p>
      </div>

      {/* 记一笔支出 */}
      <div className="
          group relative space-y-4 max-w-md mx-auto my-4 p-8 
          /* 亮色：温润的粉红渐变 */
          bg-gradient-to-tl from-rose-50 via-orange-50 to-pink-50
          /* 暗色：原有的深红渐变 */
          dark:bg-gradient-to-tl dark:from-rose-900/80 dark:via-slate-800 dark:to-pink-900/80
          
          rounded-3xl shadow-md border border-white/50 dark:border-none
          active:scale-95 hover:scale-[1.02] transition-all duration-200 cursor-pointer
      ">
        <p className={`
          text-3xl font-extrabold text-center py-10
          bg-gradient-to-r from-rose-600 to-pink-700 bg-clip-text text-transparent
          dark:from-blue-400 dark:to-red-400
          ${lusitana.className} 
        `}>
          Expense
        </p>
      </div>
    </div>
  );
}