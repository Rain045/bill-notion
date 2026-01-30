'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


export const ExpenseIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
  </svg>
);

export const IncomeIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '0px' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-left-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-5.904-2.803a.5.5 0 1 1 .707.707L6.707 10h2.768a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.525a.5.5 0 0 1 1 0v2.768l4.096-4.096z"/>
    </svg>
  </div>
  
);

export const AutoIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '0px' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lightning-fill" viewBox="0 0 16 16">
      <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z"/>
    </svg>
  </div>
  
);


// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
// 在这里添加或修改导航链接
const links = [
  { name: 'Expense Tracker', href: '/money_track/', icon: ExpenseIcon },
  { name: 'Income Tracker', href: '/money_track/income', icon: IncomeIcon },
  { name: 'Auto Tracker', href: '/money_track/auto_track', icon: AutoIcon },
];

export default function NavLinks() {
    const pathname = usePathname();
  return (
    <>
      {links.map((link, index) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={`${link.name}-${index}`}
            href={link.href}
            // 1. 确保 a 标签在暗色模式下的背景和文字颜色
            className={clsx(
                'flex h-[48px] min-w-[80px] shrink-0 grow items-center justify-center gap-2 rounded-md \
                bg-gray-50/10 backdrop-blur-sm p-3 text-sm font-medium \
                hover:bg-sky-100 hover:text-blue-600 \
                dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 \
                md:min-w-0 md:flex-none md:justify-start md:p-2 md:px-3 transition-colors',
                {
                    'bg-sky-100 text-blue-600': pathname === link.href,
                },
            )}
          >
            {/* 2. 关键：给图标指定颜色，并增加 strokeWidth 让线条更粗一点（更适合移动端） */}
            <LinkIcon className="w-6 h-6 text-current stroke-[2px]" />
            
            <span className="hidden md:block">{link.name}</span>
          </Link>
        );
      })}
    </>
  );
}