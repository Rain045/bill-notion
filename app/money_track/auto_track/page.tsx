"use client";

import { useState, useEffect } from 'react';
import { parseExcelFile } from '@/lib/xlsx-parser';

export default function AutoTrackPage() {
  // --- 1. 防止 Hydration Mismatch 的关键状态 ---
  const [isMounted, setIsMounted] = useState(false);

  // --- 业务状态 ---
  const [rows, setRows] = useState<string[]>([]);
  const [fileName, setFileName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // --- 2. 初始化检测 ---
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // --- 处理函数 ---
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    setFileName(file.name);

    try {
      const data = await parseExcelFile(file);
      setRows(data);
    } catch (error) {
      alert('File parsing failed. Please check the file format.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatFileName = (name: string) => {
    const nameNoExt = name.replace(/\.[^/.]+$/, "");
    if (nameNoExt.length > 20) {
      return nameNoExt.slice(0, 15) + "...";
    }
    return nameNoExt;
  };

  // --- 3. Loading / 骨架屏 (解决服务端渲染不一致问题) ---
  if (!isMounted) {
    return (
      <div className="h-[80vh] w-full mx-auto p-5 rounded-3xl shadow-lg 
        bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        {/* 简单的骨架屏占位 */}
        <div className="flex justify-between mb-4">
           <div className="h-8 w-1/3 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"></div>
        </div>
        <div className="h-full bg-slate-200 dark:bg-slate-700 rounded-2xl animate-pulse"></div>
      </div>
    );
  }

  // --- 4. 真实渲染 ---
  return (
    <div className="
      h-[80vh] w-full mx-auto p-5 rounded-3xl shadow-lg 
      bg-gradient-to-tl from-blue-100 via-slate-50 to-white
      dark:from-indigo-900 dark:via-slate-800 dark:to-slate-700
      transition-all duration-500 border border-white/60 dark:border-slate-700/50
      overflow-hidden flex flex-col"
    >
      <div className="flex flex-col h-full">
        {/* 标题区域 */}
        <div className="flex justify-between items-center mb-2 shrink-0">
           {/* 修改建议：使用 h1 替代 p，避免 p 标签内嵌套复杂元素的潜在风险 */}
           <h1 className={`text-xl font-bold mb-1 transition-all
                  bg-gradient-to-r from-sky-600 to-indigo-800 bg-clip-text text-transparent
                  dark:from-sky-300 dark:to-purple-400`}>
              Auto Track
           </h1>
           {/* 小小的状态指示器 */}
           {fileName && <span className="text-xs text-blue-500/80 break-all max-w-[120px]">{formatFileName(fileName)}</span>}
        </div>

        {/* 核心内容区域 */}
        <div className="mt-2 grow flex flex-col min-h-0
          border-2 border-dashed border-blue-200/50 dark:border-slate-700 
          rounded-2xl overflow-hidden relative bg-white/30 dark:bg-slate-800/30"
        >
          
          {/* A. 顶部操作栏 (固定) */}
          <div className="p-4 border-b border-blue-100 dark:border-slate-700/50 shrink-0">
            <label className="block w-full cursor-pointer group">
               {/* suppressHydrationWarning: 防止浏览器插件修改 input 导致报错 */}
               <input
                type="file"
                accept=".xlsx, .xls"
                onChange={handleFileUpload}
                className="hidden"
                suppressHydrationWarning
              />
              <div className="
                flex items-center justify-center gap-2 py-2 px-4 
                bg-blue-50 text-blue-600 rounded-xl font-medium text-sm
                group-hover:bg-blue-100 transition-colors
                dark:bg-slate-700 dark:text-blue-300 dark:group-hover:bg-slate-600
              ">
                {isLoading ? (
                  <span>⏳ Parsing...</span>
                ) : (
                  <>
                    <span>📂 Upload Bank Statement (.xlsx)</span>
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
                 <p className="text-md">Please upload a file.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}