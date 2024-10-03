import Link from "next/link"

export default function Header ()  {
  return (
    <div className='bg-slate-700 h-12 '>
 <div className=' font-bold text-white flex justify-between items-center'>
        <h1 className='m-2 text-xl hover:text-red-700'>HKDASHDEALS</h1>
        <ul className='flex gap-3 mr-3'>
            <li>
            <Link href="/" className="hover:text-blue-600">Home</Link>
          </li>
          <li>
            <Link href="/about"  className="hover:text-blue-600">About</Link>
          </li>
          <li>
            <Link href="/education"  className="hover:text-blue-600">Education</Link>
          </li>
          <li>
            <Link href="/contact"  className="hover:text-blue-600">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

