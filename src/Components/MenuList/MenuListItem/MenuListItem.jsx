import React from 'react';
import { Card } from '@mui/material';
import ProductDetails from '../../ProductDetails/ProductDetails';
import ResponsiveDialog from '../../ResponsiveDialog/ResponsiveDialog';
import './MenuListItem.css';

const MenuListItem = (props) => {
    const { title, description, price, imageURL } = props;
    // Prepare the ProductDetails component with props to pass as content
    const productDetailsWithProps = (
        <ProductDetails 
            title={title} 
            description={description} 
            price={price} 
            imageURL={imageURL} 
        />
    );

    return (
        <ResponsiveDialog content={productDetailsWithProps }>
            <Card className='card'>
                <div className="card__left">
                    <h3 className='card-title'>
                        {title}
                    </h3>
                    <p className='description text-muted text-small'>
                        {description}
                    </p>
                    <div className="price">
                        {price}
                    </div>
                </div>
                <div className="card__right image-container">
                    <img src={imageURL} alt='df' />
                </div>
            </Card>
        </ResponsiveDialog>
    );
}

export default MenuListItem;
