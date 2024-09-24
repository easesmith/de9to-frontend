import React, { useState } from 'react'
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '../ui/pagination'
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'

const ShadcnPagination = () => {

    const [page, setPage] = useState(1)

    const handleNextPage = () => {
        setPage(page + 1)
    }

    const handlePrevPage = () => {
        setPage(page - 1)
    }

    const navigate = useNavigate()

    const handleNavigate = (page) => {
        navigate(`/our-clinic/${page}`)
    }

    
    return (
        <Pagination>
            <PaginationContent className='list-none ml-0 flex items-center justify-between w-[400px]'>
                <HiArrowLongLeft onClick={handlePrevPage} className='text-2xl text-[#95C22B] cursor-pointer' />
                <PaginationItem>
                    <PaginationLink href={`/our-clinic/${page}`} isActive>{page}</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href={`/our-clinic/${page + 1}`}>
                        {page + 1}
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="3">{page + 2}</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink>...</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="8">{page + 7}</PaginationLink>
                </PaginationItem>
                <HiArrowLongRight onClick={handleNextPage} className='text-2xl text-[#95C22B] cursor-pointer' />
            </PaginationContent>
        </Pagination>
    )
}

export default ShadcnPagination
