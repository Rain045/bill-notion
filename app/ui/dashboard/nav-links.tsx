'use client';
import { UserGroupIcon, HomeIcon, DocumentDuplicateIcon, CalculatorIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
// 在这里添加或修改导航链接
const links = [
  { name: 'Overview', href: '/dashboard', icon: HomeIcon },
  { name: 'Expenses', href: '/dashboard/expenses', icon: UserGroupIcon },
  { name: 'Incomes', href: '/dashboard/incomes', icon: DocumentDuplicateIcon },
  { name: 'Salary', href: '/dashboard/salary', icon: CalculatorIcon },
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