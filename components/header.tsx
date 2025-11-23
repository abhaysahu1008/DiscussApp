import Link from 'next/link'
import AuthHeader from './auth-header'
import SearchInput from './SearchInput'
import { Suspense } from "react";


const Header = () => {

  return (
    <div className='grid grid-cols-3 items-center'>
      <div className='flex justify-start'>
        <Link href={"/"}>
          <h1 className='font-bold text-xl'>Discuss</h1>
        </Link>
      </div>
      <div className='flex justify-center'>

        <Suspense fallback={null}>
          <SearchInput />
        </Suspense>
      </div>
      <div className='flex justify-end gap-2'>
        <AuthHeader />


      </div>
    </div>
  )
}

export default Header
