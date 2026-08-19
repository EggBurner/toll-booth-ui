"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutGrid, Link2, BarChart3, Settings } from 'lucide-react'

const navItems = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutGrid },
  { label: 'Links', href: '/dashboard/links', icon: Link2 },
  { label: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
  { label: 'Settings', href: '/dashboard/settings', icon: Settings },
]

const DashboardSidebar = () => {
  const pathname = usePathname()

  return (
    <aside className='hidden lg:flex lg:flex-col w-64 shrink-0 border-r border-gray-200 px-6 py-8'>
      <p className='font-bold text-lg'>Workspace</p>
      <p className='text-sm text-secondary mb-8'>Personal Account</p>

      <nav className='flex flex-col gap-1'>
        {navItems.map(({ label, href, icon: Icon }) => {
          const active = pathname === href

          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2 rounded-xs text-sm ${
                active ? 'bg-gray-200 font-medium' : 'text-secondary hover:bg-gray-100'
              }`}
            >
              <Icon size={18} />
              {label}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}

export default DashboardSidebar
