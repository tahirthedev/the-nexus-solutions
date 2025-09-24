import React from 'react';
import Link from "next/link";
import { useRouter, useSearchParams } from 'next/navigation';

type PaginationProps = {
    alignment: string;
    currentPage: number;
    totalPages: number;
};

const Pagination = ({ alignment, currentPage, totalPages }: PaginationProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handlePageChange = (page: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', page.toString());
        router.push(`?${params.toString()}`);
    };

    const renderPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            if (i === currentPage) {
                pages.push(
                    <li key={i}>
                        <span aria-current="page" className="page-numbers current">{i}</span>
                    </li>
                );
            } else {
                pages.push(
                    <li key={i}>
                        <button className="page-numbers" onClick={() => handlePageChange(i)}>{i}</button>
                    </li>
                );
            }
        }
        return pages;
    };

    return (
        <>
            <div className="te-basic-pagination">
                <ul className={`${alignment}`}>
                    {currentPage > 1 && (
                        <li>
                            <button className="prev page-numbers" onClick={() => handlePageChange(currentPage - 1)}>
                                <i className="fa fa-arrow-left"></i>
                            </button>
                        </li>
                    )}
                    {renderPageNumbers()}
                    {currentPage < totalPages && (
                        <li>
                            <button className="next page-numbers" onClick={() => handlePageChange(currentPage + 1)}>
                                <i className="fa fa-arrow-right"></i>
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        </>
    );
};

export default Pagination;