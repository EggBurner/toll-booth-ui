import type { LucideIcon } from 'lucide-react'

interface StatCardProps {
  icon: LucideIcon
  value: string | number
  label: string
}

const StatCard = ({ icon: Icon, value, label }: StatCardProps) => {
  return (
    <div className='border border-gray-200 bg-white rounded-xs p-6 flex flex-col gap-6'>
      <Icon size={20} className='text-secondary' />
      <p className='font-headline text-4xl'>{value}</p>
      <p className='text-xs tracking-wider text-secondary uppercase'>{label}</p>
    </div>
  )
}

export default StatCard
