"use client"; // 1. 必须标记为客户端组件

import { useState } from 'react';
// 确保这个路径指向你真实的工具文件位置
import { parseExcelFile } from '@/lib/xlsx-parser';

// export default function IncomesPage() {
//   return (
//     <div className="
//       h-[81vh] w-full max-w-md mx-auto p-5 rounded-3xl shadow-lg 
//       bg-gradient-to-tl from-blue-100 via-slate-50 to-white
//       dark:from-indigo-900 dark:via-slate-800 dark:to-slate-700
//       transition-all duration-500 border border-white/60 dark:border-slate-700/50"
//     >
//       <div className="flex flex-col h-full">
//         <p className="text-xl font-bold text-blue-900 dark:text-blue-100">IncomesPage</p>
//         <div className="mt-4 grow flex items-center justify-center border-2 border-dashed border-blue-200/50 dark:border-slate-700 rounded-2xl min-h-[200px]">
//            <p className="text-blue-600/50 dark:text-slate-400">页面内容，敬请期待......与该文字同级别下插入xlsx的逻辑</p>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function IncomesPage() {
  // --- 逻辑部分 (从 Home 移植过来) ---
  const [rows, setRows] = useState<string[]>([]);
  const [fileName, setFileName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    setFileName(file.name);

    try {
      const data = await parseExcelFile(file);
      setRows(data);
    } catch (error) {
      alert('解析文件失败，请检查文件格式');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // --- UI 部分 ---
  return (
    <div className="
      /* 外层容器：保持你的原有样式 */
      h-[81vh] w-full max-w-md mx-auto p-5 rounded-3xl shadow-lg 
      bg-gradient-to-tl from-blue-100 via-slate-50 to-white
      dark:from-indigo-900 dark:via-slate-800 dark:to-slate-700
      transition-all duration-500 border border-white/60 dark:border-slate-700/50
      overflow-hidden flex flex-col" // 确保外层不滚动
    >
      <div className="flex flex-col h-full">
        {/* 标题区域 */}
        <div className="flex justify-between items-center mb-2">
           <p className="text-xl font-bold text-blue-900 dark:text-blue-100">Incomes Page</p>
           {/* 小小的状态指示器 */}
           {fileName && <span className="text-xs text-blue-500/80 truncate max-w-[120px]">{fileName}</span>}
        </div>

        {/* 核心内容区域 
            修改：去掉了 items-center justify-center，改为 flex-col
            这样可以让“上传栏”在顶部，“列表”在下面自动填充
        */}
        <div className="mt-2 grow flex flex-col 
          border-2 border-dashed border-blue-200/50 dark:border-slate-700 
          rounded-2xl overflow-hidden relative bg-white/30 dark:bg-slate-800/30"
        >
          
          {/* A. 顶部操作栏 (固定) */}
          <div className="p-4 border-b border-blue-100 dark:border-slate-700/50 shrink-0">
            <label className="block w-full cursor-pointer group">
               <input
                type="file"
                accept=".xlsx, .xls"
                onChange={handleFileUpload}
                className="hidden" // 隐藏原始丑陋的 input
              />
              <div className="
                flex items-center justify-center gap-2 py-2 px-4 
                bg-blue-50 text-blue-600 rounded-xl font-medium text-sm
                group-hover:bg-blue-100 transition-colors
                dark:bg-slate-700 dark:text-blue-300 dark:group-hover:bg-slate-600
              ">
                {isLoading ? (
                  <span>⏳ 解析中...</span>
                ) : (
                  <>
                    <span>📂 点击上传账单 (Excel)</span>
                  </>
                )}
              </div>
            </label>
          </div>

          {/* B. 数据列表区域 (可滚动) */}
          <div className="grow overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-blue-200 dark:scrollbar-thumb-slate-600">
            {rows.length > 0 ? (
              <div className="space-y-2">
                {rows.map((row, index) => (
                  <div key={index} className="
                    p-3 rounded-xl bg-white/60 dark:bg-slate-700/60 
                    border border-blue-50 dark:border-slate-600
                    text-sm text-slate-700 dark:text-slate-200 shadow-sm
                    break-all hover:scale-[1.01] transition-transform duration-200
                  ">
                    <div className="flex gap-2">
                      <span className="text-blue-400 font-mono text-xs opacity-70">#{index + 1}</span>
                      <span>{row}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // 空状态
              <div className="h-full flex flex-col items-center justify-center text-blue-400/50 dark:text-slate-500">
                 <svg className="w-12 h-12 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                 <p className="text-sm">暂无数据，请上传文件</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}