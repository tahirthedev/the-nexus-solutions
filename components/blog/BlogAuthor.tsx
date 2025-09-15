import React from 'react';
import SocialShare from '../slider/SocialShare';
import Link from "next/link";
import Image from "next/image";

const BlogAuthor = () => {
    return (
        <>
            <div className="te-author-info">
                <div className="te-author-thumb text-center">
                    <Link href="#">
                        <Image
                            className="avatar"
                            src="/images/blog/avatar.jpg"
                            alt="icon"
                            width={120}
                            height={120}
                        />
                    </Link>
                </div>
                <div className="te-author-text text-center">
                    <h3><Link href="#">David Max</Link></h3>
                    <span className="designation">Stuff Writer</span>
                    <div className="te-author-social-profiles">
                        <SocialShare />
                    </div>
                    <p>Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentuer viverra laoreet Aliqerojustoposuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo laoreet augue mattis fermentuer viverra laoreet </p>
                    <div className="te-author-post">
                        <Link href="#">View All Posts</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogAuthor;