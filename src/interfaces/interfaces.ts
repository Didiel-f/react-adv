export  interface Product {
    id: string,
    title: string,
    img?: string
};

export  interface ProductContextProps {
    increaseBy: (value: number) => void,
    counter: number,
    product: Product,
}

export interface onChangeArgs {
    product: Product,
    count: number
}

export interface ProductInCart extends Product{
    count: number
};