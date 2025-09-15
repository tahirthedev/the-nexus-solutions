import React from 'react';
import Link from "next/link";

type PaginationProps = {
    alignment: string;
};

const Pagination = ({ alignment }: PaginationProps) => {
    return (
        <>
            <div className="te-basic-pagination">
                <ul className={`${alignment}`}>
                    <li>
                        <span aria-current="page" className="page-numbers current">1</span>
                    </li>
                    <li><Link className="page-numbers" href="#">2</Link></li>
                    <li><Link className="page-numbers" href="#">3</Link></li>
                    <li><span className="page-numbers dots">…</span></li>
                    <li><Link className="page-numbers" href="#">5</Link></li>
                    <li>
                        <Link className="next page-numbers" href="#"><i className="fa fa-arrow-right"></i></Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Pagination;