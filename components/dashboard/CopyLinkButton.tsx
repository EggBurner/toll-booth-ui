"use client"

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

const CopyLinkButton = ({ link }: { link: string }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(link)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      type='button'
      onClick={handleCopy}
      className='shrink-0 text-secondary hover:text-black transition-colors'
      aria-label='Copy link'
    >
      {copied ? <Check size={16} className='text-green-600' /> : <Copy size={16} />}
    </button>
  )
}

export default CopyLinkButton
