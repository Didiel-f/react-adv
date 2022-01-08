import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';

import { products } from '../data/products';



const product = products[1];

export const ShoppingPage = () => {


    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

                <ProductCard 
                    key={ product.id }
                    product={ product }
                    initialValues={{
                        count: 4,
                        maxCount: 10
                    }}
                >
                    {
                        ({reset, increaseBy, count, isMaxCountReached}) => (
                            <>
                                <ProductImage />
                                <ProductTitle />
                                <ProductButtons />
                            </>
                        )
                    }
                </ProductCard>
            </div>
    )
}