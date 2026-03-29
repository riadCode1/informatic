import Footer from '@/components/Footer'
import Footer2 from '@/components/Footer2'
import Nav from '@/components/Nav'
import Pagination from '@/components/Pagination'
import ProductItems from '@/components/ProductItems'
import ProductSearchBar from '@/components/ProductSearchBar'
import { mostPopular } from '@/lib/data'
import React from 'react'

const pages = async (props :{
  searchParams?:Promise<{
    page?:string
  }>
}) => {

  const searchParams= await props.searchParams;
const currentPage = Number(searchParams?.page) || 1;
const itemPerPage = 4

 const totalPages = Math.ceil(mostPopular.length / itemPerPage);
  if (totalPages <= 1) return null;
  
  return (
    <div className=' p-10 '>
      <Nav username={''}/>

    <ProductSearchBar/>

  <ProductItems itemsPerPage={itemPerPage} currentPage={currentPage} title={''}/>
      <Pagination totalPages={totalPages} currentPage={currentPage}/>

      <Footer/>
      <Footer2/>
    </div>
  )
}

export default pages