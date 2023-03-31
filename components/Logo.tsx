import Image from 'next/image'

function Logo({ className, width, height }: { className?: string, width?: number, height?: number }) {
  return <Image src="/logo.svg" alt="FOSSBilling logo" width={ width || 150 } height={ height || 32 } className={ className } />
}

export default Logo