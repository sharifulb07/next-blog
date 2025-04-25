import Footer from '@/components/blog/Footer'
import SearchCardSec from '@/components/blog/searchCardSec'
import SearchSec from '@/components/blog/SearchSec'
import React from 'react'

export default function Search() {
  return (
    <div className='flex flex-col gap-[100px]'>
      <SearchSec />
      <SearchCardSec />

      <Footer />
    </div>
  )
}
