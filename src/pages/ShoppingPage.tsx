import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import '../styles/custom-styles.css';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';


export const ShoppingPage = () => {
    const { shoppingCart, onProductCountChange } = useShoppingCart();
    
    return (
        <div >
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                {/* <ProductCard 
                    product={ product1 } 
                >
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title title={ product1.title } />
                    <ProductCard.Buttons />
                </ProductCard> */}

                {
                    products.map(  product => (
                        <ProductCard
                            key={ product.id }
                            product={ product } 
                            className="bg-dark"
                            onChange={ onProductCountChange }
                            value={ shoppingCart[product.id]?.count || 0 }
                        >
                            <ProductImage className="custom-image" />
                            <ProductTitle  className="text-white"/>
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))
                }
            </div>

            <div className="shopping-cart">
                {
                    Object.entries(shoppingCart).map(([key, product]) => (
                            <ProductCard
                                key={ key }
                                product={ product } 
                                className="bg-dark text-white"
                                style={{ width: '100px' }}
                                value={ product.count }
                                onChange={ onProductCountChange }
                            >
                                <ProductImage className="custom-image" />
                                <ProductButtons 
                                    className="custom-buttons"
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}
                                />
                            </ProductCard>
                    ))
                }
            </div>


            <div>
                <code>
                    { JSON.stringify(shoppingCart, null, 5) }
                </code>
            </div>
            
        </div>
    )
}