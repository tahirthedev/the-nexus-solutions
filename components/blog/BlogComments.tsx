"use client";
import React from 'react';
import Link from "next/link";
import Image from "next/image";

const BlogComments = () => {
    return (
        <>
            <div className="te-latest-comments">
                <ul>
                    <li className="comment">
                        <div className="te-comments-item">
                            <div className="te-comments-avatar">
                                <Image
                                    src="/images/commenter/commenter-1.jpg"
                                    alt="Commenter Author"
                                    width={96}
                                    height={96}
                                />
                            </div>
                            <div className="te-comments-text">
                                <div className="te-avatar-name">
                                    <h5><Link href="#">Avery James</Link></h5>
                                    <span>14 August 2023, at 2.00 am</span>
                                    <Link href="#" className="te-comment-reply">Reply</Link>
                                </div>
                                <p>It is a long established fact that a reader williljl being li distracted by the readable content of amjlk page ghjkl when looking at its layout.  the readable content of amjlk page ghjkl when looking at its layout that a reader.</p>
                            </div>
                        </div>
                    </li>
                    <li className="comment depth-1">
                        <div className="te-comments-item">
                            <div className="te-comments-avatar">
                                <Image
                                    src="/images/commenter/commenter-2.jpg"
                                    alt="Commenter Author"
                                    width={96}
                                    height={96}
                                />
                            </div>
                            <div className="te-comments-text">
                                <div className="te-avatar-name">
                                    <h5><Link href="#">Jack David</Link></h5>
                                    <span>14 August 2023, at 2.00 am</span>
                                    <Link href="#" className="te-comment-reply">Reply</Link>
                                </div>
                                <p>It is a long established fact that a reader williljl being li distracted by the readable content of amjlk page ghjkl when looking at its layout.  the readable content of amjlk page ghjkl when looking at its layout that a reader.</p>
                            </div>
                        </div>
                        <ul className="children">
                            <li className="comment">
                                <div className="te-comments-item">
                                    <div className="te-comments-avatar">
                                        <Image
                                            src="/images/commenter/commenter-author.jpg"
                                            alt="Commenter Author"
                                            width={96}
                                            height={96}
                                        />
                                    </div>
                                    <div className="te-comments-text">
                                        <div className="te-avatar-name">
                                            <h5><Link href="#">Jesse Mac</Link></h5>
                                            <span>14 August 2023, at 2.00 am</span>
                                            <Link href="#" className="te-comment-reply">Reply</Link>
                                        </div>
                                        <p>It is a long established fact that a reader williljl being li distracted by the readable content of amjlk page ghjkl when looking at its layout.  the readable content of amjlk page ghjkl when looking at its layout that a reader.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="comment">
                        <div className="te-comments-item">
                            <div className="te-comments-avatar">
                                <Image
                                    src="/images/commenter/commenter-3.jpg"
                                    alt="Commenter Author"
                                    width={96}
                                    height={96}
                                />
                            </div>
                            <div className="te-comments-text">
                                <div className="te-avatar-name">
                                    <h5><Link href="#">Bobby Jack</Link></h5>
                                    <span>14 August 2023, at 2.00 am</span>
                                    <Link href="#" className="te-comment-reply">Reply</Link>
                                </div>
                                <p>It is a long established fact that a reader will being li distracted by the readable content of amjlk page ghjkl when looking at its layout.  the readable content of amjlk page ghjkl when looking at its layout that a reader.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default BlogComments;