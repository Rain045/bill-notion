// settings/page.tsx
'use client'; 

import { useState, useEffect } from 'react';
import { lusitana } from '@/app/ui/fonts';
import { NotionShakeHand } from '@/lib/notion_shake_hand'; // 导入 Server Action
import { 
  KeyIcon, 
  CircleStackIcon, 
  PlusIcon, 
  TrashIcon, 
  EyeIcon, 
  EyeSlashIcon,
  BoltIcon // 新增图标
} from '@heroicons/react/24/outline';

export default function SettingsPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [showKey, setShowKey] = useState(false);
  const [databases, setDatabases] = useState<{name: string, id: string}[]>([]);
  const [newDbName, setNewDbName] = useState('');
  const [newDbId, setNewDbId] = useState('');
  
  // 新增：测试加载状态
  const [isTesting, setIsTesting] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedKey = localStorage.getItem('notion_api_key');
    const saveddbs = localStorage.getItem('notion_databases');
    if (savedKey) setApiKey(savedKey);
    if (saveddbs) setDatabases(JSON.parse(saveddbs));
  }, []);

  const handleSaveKey = () => {
    localStorage.setItem('notion_api_key', apiKey);
    alert('Notion API Key Saved!');
  };

  const handleAddDatabase = () => {
    if (!newDbName || !newDbId) return;
    const updatedList = [...databases, { name: newDbName, id: newDbId }];
    setDatabases(updatedList);
    localStorage.setItem('notion_databases', JSON.stringify(updatedList));
    setNewDbName('');
    setNewDbId('');
  };

  const handleDeleteDatabase = (index: number) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this database mapping?');
    if (isConfirmed) {
      const updatedList = databases.filter((_, i) => i !== index);
      setDatabases(updatedList);
      localStorage.setItem('notion_databases', JSON.stringify(updatedList));
    }
  };

  // 新增：连接测试逻辑
  const handleConnectivityTest = async () => {
    // 1. 基础校验
    if (!apiKey) {
      alert('未保存 API KEY');
      return;
    }
    const testDb = databases.find(db => db.name === 'Test' || db.name === 'TEST');
    if (!testDb) {
      alert('请注册名为 TEST 的 Database ID');
      return;
    }

    // 2. 开始测试
    setIsTesting(true);
    
    // 调用 Server Action
    const result = await NotionShakeHand(apiKey, testDb.id);

    setIsTesting(false);

    // 3. 处理统一返回结果
    if (result.success) {
      // 成功 (200)
      alert(`✅️ Test Successfully!\n\nYour Database ID is: ${result.data}`);
    } else {
      // 失败 (400, 401, 403, 500 等)
      // 直接显示 helper 中定义好的友好提示
      console.error(result.error?.rawMessage); // 在控制台打印原始错误供开发者调试
      alert(`❌️ Test Failed!\n\n${result.error?.rawMessage}`);
    }
  };

  if (!isMounted) {
    return (
      <div className="h-[81vh] w-full mx-auto p-1 rounded-3xl shadow-lg 
        bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <div className="p-6 space-y-6 animate-pulse">
           <div className="h-10 w-1/3 bg-slate-200 dark:bg-slate-700 rounded"></div>
           <div className="h-24 w-full bg-slate-200 dark:bg-slate-700 rounded-xl"></div>
           <div className="h-40 w-full bg-slate-200 dark:bg-slate-700 rounded-xl"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="
      h-[81vh] w-full mx-auto p-1 rounded-3xl shadow-2xl 
      bg-gradient-to-tl from-blue-100 via-slate-50 to-white
      dark:from-indigo-950 dark:via-slate-900 dark:to-slate-800
      transition-all duration-500 border border-white/60 dark:border-slate-700/50
      overflow-hidden flex flex-col
    ">
      
      <div className="flex flex-col h-full w-full overflow-y-auto scrollbar-hide p-5">

        <div className="mb-6">
          <h1 className={`text-4xl ${lusitana.className} font-bold mb-1 transition-all
            bg-gradient-to-r from-sky-600 to-indigo-800 bg-clip-text text-transparent
            dark:from-sky-300 dark:to-purple-400
          `}>
            Settings
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            Configure your Notion integrated environment
          </p>
        </div>

        {/* API Key Section */}
        <section className="mb-6 space-y-3">
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-semibold text-md">
            <KeyIcon className="w-4 h-4" />
            <h2>Notion Integration Token</h2>
          </div>
          
          <div className="relative group">
            <input 
              type={showKey ? "text" : "password"}
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="ntn_..."
              suppressHydrationWarning={true} 
              className="w-full pl-4 pr-24 py-3 text-sm rounded-xl border-0 ring-1 ring-slate-200 dark:ring-slate-700 
              bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm
              focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-400 outline-none transition-all
              text-slate-700 dark:text-slate-200 placeholder:text-slate-400"
            />
            
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
              <button 
                onClick={() => setShowKey(!showKey)}
                className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-slate-400 transition-colors"
              >
                {showKey ? <EyeSlashIcon className="w-4 h-4"/> : <EyeIcon className="w-4 h-4"/>}
              </button>
              <button 
                onClick={handleSaveKey}
                className="bg-sky-600 hover:bg-sky-700 text-white p-1.5 rounded-lg text-xs font-medium transition-colors shadow-sm"
              >
                Save
              </button>
            </div>
          </div>
          <p className="text-xs text-slate-400 pl-1">
            This key will be used to access your Workspace data.
          </p>
        </section>

        <hr className="border-slate-200 dark:border-slate-700/50 mb-6" />

        {/* Database Section */}
        <section className="flex-grow flex flex-col space-y-3">
          <div className="flex items-center justify-between text-slate-700 dark:text-slate-200 font-semibold text-md">
            <div className="flex items-center gap-2">
              <CircleStackIcon className="w-4 h-4" />
              <h2>Database Registry</h2>
            </div>
            
            {/* 新增：功能按钮和计数器区域 */}
            <div className="flex items-center gap-2">
                <button
                    onClick={handleConnectivityTest}
                    disabled={isTesting}
                    className={`
                        flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-semibold tracking-wide
                        transition-all duration-300 shadow-sm border border-transparent
                        ${isTesting 
                            ? 'bg-slate-100 text-slate-400 cursor-not-allowed dark:bg-slate-800 dark:text-slate-500' 
                            : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200 hover:shadow-md hover:border-emerald-300 dark:bg-emerald-900/30 dark:text-emerald-400 dark:hover:bg-emerald-800/50 dark:hover:border-emerald-700'
                        }
                    `}
                >
                    <BoltIcon className={`w-3 h-3 ${isTesting ? 'animate-pulse' : ''}`} />
                    {isTesting ? 'TESTING...' : 'TEST'}
                </button>

                <span className="text-xs bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded-full text-slate-500 dark:text-slate-300">
                {databases.length}
                </span>
            </div>
          </div>

          <div className="bg-white/40 dark:bg-slate-800/40 p-3 rounded-2xl border border-dashed border-sky-200 dark:border-slate-600 flex flex-col gap-2">
            <input 
              type="text" 
              placeholder="Database Name (e.g. Incomes Log)" 
              value={newDbName}
              onChange={(e) => setNewDbName(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-lg bg-white/80 dark:bg-slate-700/80 border-none ring-1 ring-slate-200 dark:ring-slate-600 focus:ring-sky-500 outline-none"
            />
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Database ID (32 characters long)" 
                value={newDbId}
                onChange={(e) => setNewDbId(e.target.value)}
                className="flex-grow px-3 py-2 text-xs rounded-lg bg-white/80 dark:bg-slate-700/80 border-none ring-1 ring-slate-200 dark:ring-slate-600 focus:ring-sky-500 outline-none font-mono"
              />
              <button 
                onClick={handleAddDatabase}
                disabled={!newDbName || !newDbId}
                className="bg-sky-500 hover:bg-sky-600 disabled:bg-slate-300 dark:disabled:bg-slate-700 text-white p-2 rounded-lg transition-colors shadow-sm"
              >
                <PlusIcon className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex-grow space-y-2 mt-2 overflow-y-auto max-h-[240px] pr-1">
            {databases.length === 0 ? (
               <div className="text-center py-8 text-slate-400 text-sm italic">
                No database configuration is currently available. 
                <br />
                Please add it above.
               </div>
            ) : (
              databases.map((db, idx) => (
                <div key={idx} className="group flex items-center justify-between p-3 rounded-xl bg-white/60 dark:bg-slate-800/60 border border-transparent hover:border-sky-200 dark:hover:border-slate-600 shadow-sm transition-all">
                  <div className="overflow-hidden">
                    <div className="font-semibold text-sm text-slate-700 dark:text-slate-200 truncate">{db.name}</div>
                    <div className="text-[10px] text-slate-400 font-mono truncate max-w-[180px]">{db.id}</div>
                  </div>
                  
                  <button 
                    onClick={() => handleDeleteDatabase(idx)}
                    className="
                      text-slate-300 hover:text-red-500 
                      p-1.5 rounded-lg transition-colors 
                      hover:bg-red-50 dark:hover:bg-red-900/20 
                      
                      opacity-100 md:opacity-0 md:group-hover:opacity-100
                    "
                  >
                    <TrashIcon className="w-4 h-4" />
                  </button>

                </div>
              ))
            )}
          </div>
        </section>

      </div>
    </div>
  );
}