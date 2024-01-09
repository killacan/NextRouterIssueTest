import { cookies } from 'next/headers'
import Link from 'next/link'

export default async function Nav() {


  return (
    <nav className="w-full flex flex-col justify-center items-center border-b border-b-foreground/10 h-17">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <Link href={"/"}>Share Diffusion</Link>
        </div>
        <div className="w-full max-w-4xl flex items-center p-3 text-sm">

        </div>
    </nav>
  )
}
