import React from 'react'
import ReactPaginate from 'react-paginate'


const ReactPagination = ({pageCount, setPage}) => {

    return (
        <>
            {pageCount > 0 &&
                <ReactPaginate
                    previousLabel={'←'}
                    nextLabel={'→'}
                    pageCount={pageCount}
                    onPageChange={(e) => setPage(e.selected + 1)}
                    containerClassName={'flex items-center justify-center gap-6 list-none'}
                    pageClassName={'flex justify-center items-center w-11 h-11 rounded-lg shadow-custom6 text-[#274760] font-inter'}
                    pageLinkClassName={'flex justify-center items-center w-full h-full rounded-lg  '}
                    activeClassName={'bg-[#95C22B] text-[#FFFFFF]'}
                    previousClassName={'w-11 h-11 rounded-lg flex justify-center items-center text-3xl text-[#95C22B]'}
                    nextClassName={'w-11 h-11 rounded-lg flex justify-center items-center text-3xl text-[#95C22B]'}
                    breakLabel={'...'}
                    disabledClassName={'opacity-50 cursor-not-allowed'}
                />
            }
        </>
    )
}

export default ReactPagination
