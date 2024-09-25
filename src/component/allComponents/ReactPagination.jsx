import React from 'react'
import ReactPaginate from 'react-paginate'
import { useNavigate } from 'react-router-dom';
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2'


const ReactPagination = ({ pageCount }) => {

    const navigate = useNavigate()

    const handlePageSelect = (e) => {
        const selectPage = e.selected + 1
        navigate(`/our-clinic/${selectPage}`)
    }
    return (
        <>
            {/* {pageCount > 0 &&
                <div className="mt-10 mb-5">
                    <ReactPaginate
                        previousLabel={'←'}
                        nextLabel={'→'}
                        pageCount={pageCount}
                        onPageChange={handlePageSelect}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                        previousClassName='previousBtn'
                        nextLinkClassName={'nextBtn'}
                    />
                </div>} */}

            {pageCount > 0 && (
                <div className="mt-10 mb-5">
                    <ReactPaginate
                        previousLabel={'←'} // Left arrow
                        nextLabel={'→'}    // Right arrow
                        pageCount={pageCount}
                        onPageChange={handlePageSelect}
                        containerClassName={'flex items-center justify-between w-[400px]'}
                        pageClassName={'flex justify-center items-center w-11 h-11 rounded-lg shadow-custom6 text-[#274760] font-inter'}
                        pageLinkClassName={'flex justify-center items-center w-full h-full rounded-lg  '}
                        activeClassName={'bg-[#95C22B] text-[#FFFFFF]'}
                        previousClassName={'w-11 h-11 rounded-lg flex justify-center items-center text-3xl text-[#95C22B]'}
                        nextClassName={'w-11 h-11 rounded-lg flex justify-center items-center text-3xl text-[#95C22B]'}
                        breakClassName={'flex justify-center items-center w-11 h-11 rounded-lg shadow-custom6 text-[#274760] font-inter'}
                        breakLinkClassName={'flex justify-center items-center w-full h-full rounded-lg'}
                        breakLabel={'...'}
                        // breakClassName={'w-10 h-10 flex justify-center items-center'}
                        disabledClassName={'opacity-50 cursor-not-allowed'}
                    />
                </div>
            )}
        </>
    )
}

export default ReactPagination
