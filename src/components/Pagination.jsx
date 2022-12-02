import React from "react";

const Pagination = (props) => {
    const {prevUrl, nextUrl, setPokeData, setUrl, page, setPage, totalPages} = props;
    return (
        <div className="d-grid gap-2 d-flex justify-content-end mt-3">
            {
                prevUrl && <button className="btn btn-outline-warning me-2" type="button"
                                   onClick={() => {
                                       setPokeData([])
                                       setUrl(prevUrl)
                                       setPage(page - 1)
                                   }}>Previous</button>
            }
            {
                page && <button type="button" className="btn btn-dark position-relative me-2">
                    {page}
                    <span
                        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">{totalPages} </span>
                    <svg width="1em" height="1em" viewBox="0 0 16 16"
                         className="position-absolute top-100 start-50 translate-middle mt-1" fill="#212529"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                    </svg>
                </button>
            }
            {
                nextUrl && <button className="btn btn-outline-danger" type="button"
                                   onClick={() => {
                                       setPokeData([])
                                       setUrl(nextUrl)
                                       setPage(page + 1)
                                   }}>Next</button>
            }
        </div>
    );
}

export default Pagination;
