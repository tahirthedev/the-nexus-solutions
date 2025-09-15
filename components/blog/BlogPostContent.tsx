"use client";
import React from 'react';
import Link from "next/link";
import SocialShare from '../slider/SocialShare';
import BlogAuthor from './BlogAuthor';
import BlogComments from './BlogComments';
import BlogCommentsForm from '../form/BlogCommentsForm';
import SearchWidget from '../widgets/SearchWidget';
import RecentPostWidget from '../widgets/RecentPostWidget';
import CategoriesWidget from '../widgets/CategoriesWidget';
import TagsWidget from '../widgets/TagsWidget';
import GalleryWidget from '../widgets/GalleryWidget';
import SocialWidget from '../widgets/SocialWidget';
import Image from "next/image";

type BlogData = {
    thumbFull: string;
    title: string;
    date: string;
    author: string;
    comments: string;
}

const BlogPostContent = ({ blogData }: { blogData: BlogData }) => {
    const { thumbFull, title, date, author, comments } = blogData;

    return (
        <>
            <div className="blog-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 te-blog-details-wrapper">
                            <article className="te-post-item">
                                <div className="te-post-thumbnail">
                                    <Link href="#">
                                        <Image
                                            src={`/images/blog-detail/${thumbFull}`}
                                            alt="Blog Image"
                                            width={850}
                                            height={540}
                                        />
                                    </Link>
                                </div>
                                <div className="te-post-content-wrapper">
                                    <div className="te-post-meta">
                                        <span><i className="far fa-calendar-check"></i>{date}</span>
                                        <span><Link href="#"><i className="far fa-user"></i>By {author}</Link></span>
                                        <span><Link href="#"><i className="far fa-comments"></i>{comments} Comments</Link></span>
                                    </div>
                                    <h3 className="te-post-title">
                                        <Link href="#">{title}</Link>
                                    </h3>
                                    <div className="te-post-content">
                                        <p>Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliqu eros justo, posuere lobortis, viverra laoreet augue mattis fermentum ullamcorper viverra laoreet. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fer. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Ali eros justo, posuere lobortis, viverra laoreet augue mattis fermentum ullamcorper viverra laoreet </p>
                                        <blockquote>
                                            <p>Aliquam eros justo, posuere loborti vive rlaoreet matti ullamc orper posu ere viverra .Aliquam eros justo, posuere lobortis no vive rra laoreet augue mattis fermentullamcorper viverra laoreet Aliquam eros justo,</p>
                                            <footer>- David Max, Techvolt</footer>
                                        </blockquote>
                                        <p>Justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Ali eros justo, posuere lobortis, viverra laoreet augue mattis fermentum ullamcorper viverra laoreet. It is a long established fact that a reader williljl being li distracted by the readable content of amjlk page.</p>
                                        <p>Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum ullamcorper viverr</p>
                                        <p>
                                            <Image
                                                src="/images/blog-detail/b-details.jpg"
                                                alt="Blog Image"
                                                width={770}
                                                height={320}
                                            />
                                        </p>
                                        <p>Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentuer viverra laoreet Aliqerojustoposuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo</p>
                                        <p>Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum ullamcorper viverr</p>
                                    </div>
                                    <div className="te-single-post-meta">
                                        <div className="te-blog-post-tag">
                                            <span>TAGS</span>
                                            <div className="te-post-tag-list">
                                                <Link href="#">Audience</Link>
                                                <Link href="#">resulting</Link>
                                                <Link href="#">stationary</Link>
                                                <Link href="#">business</Link>
                                            </div>
                                        </div>
                                        <div className="te-social-share">
                                            <span className="te-social-share-title">SHARE</span>
                                            <SocialShare />
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <div className="te-blog-post-nav">
                                <div className="te-post-navigation">
                                    <Link href="#" className="te-post-img">
                                        <Image
                                            src="/images/blog/r2.jpg"
                                            alt="Blog Image"
                                            width={96}
                                            height={96}
                                        />
                                    </Link>
                                    <div className="text">
                                        <h4><Link href="#" rel="prev">Unleash the power of IT</Link> </h4>
                                        <span>March 8, 2023   .   Investor</span>
                                    </div>
                                </div>
                                <div className="divider"></div>
                                <div className="te-post-navigation">
                                    <Link href="#" className="te-post-img">
                                        <Image
                                            src="/images/blog/r1.jpg"
                                            alt="Blog Image"
                                            width={96}
                                            height={96}
                                        />
                                    </Link>
                                    <div className="text">
                                        <h4><Link href="#" rel="next">Where IT meets excellence</Link> </h4>
                                        <span>March 8, 2023   .   Investor</span>
                                    </div>
                                </div>
                            </div>
                            <BlogAuthor />
                            <div className="te-post-comments">
                                <div className="te-comment-title">
                                    <h2>14 Comments Found</h2>
                                </div>
                                <BlogComments />
                            </div>
                            <BlogCommentsForm />
                        </div>
                        <div className="col-lg-4 order-1 order-lg-2">
                            <div className="sidebar">
                                <SearchWidget />
                                <RecentPostWidget />
                                <CategoriesWidget />
                                <TagsWidget />
                                <GalleryWidget />
                                <SocialWidget />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogPostContent;