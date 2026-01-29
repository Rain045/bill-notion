'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


export const ExpenseIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    fill="currentColor" 
    viewBox="0 0 16 16" 
    className={className} 
    {...props}
  >
    <g transform="translate(-7 0)">
      <path d="M7.5 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H11.091v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H7.5zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
    </g>
    <path d="M12 0V11H10L13 16L16 11H14V0H12Z"/>
  </svg>
);

export const IncomeIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    fill="currentColor" 
    viewBox="0 0 16 16" 
    className={className} 
    {...props}
  >
    <g transform="translate(-7 0)">
      <path d="M7.5 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H11.091v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H7.5zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
    </g>
    <path d="M12 0V11H10L13 16L16 11H14V0H12Z"/>
  </svg>
);

export const AutoIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    fill="currentColor" 
    viewBox="0 0 16 16" 
    className={className} 
    {...props}
  >
    <g transform="translate(-6, 1.5) scale(0.8)">
      <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
    </g>
    <g transform="translate(7.5, 1.5) scale(0.8)">
      <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z"/>
    </g>
  </svg>
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