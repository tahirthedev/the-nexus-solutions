import React from 'react';
import Link from "next/link";
import CategoriesData from '@/jsonData/widgets/CategoriesData.json'

const CategoriesWidget = () => {
    return (
        <>
            <div className="widget te_widget_categories">
                <div className="te-widget-title">
                    <h4 className="wp-block-heading">Categories</h4>
                </div>
                <ul>
                    {CategoriesData.map(category =>
                        <li key={category.id}><Link href="#">{category.name}</Link>({category.count})</li>
                    )}
                </ul>
            </div>
        </>
    );
};

export default CategoriesWidget;