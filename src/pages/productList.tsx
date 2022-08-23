import { ChangeEvent, FunctionComponent, useState } from 'react'
import { Order, Product } from '../data/entities';
import { CategoryList } from './categoryList';
import { Header } from './header';
import { ProductItem } from './productItem';

interface Props {
    products: Product[],
    categories: string[],
    order: Order,
    addToOrder: (product: Product, quantity: number) => void
}

export const ProductList: FunctionComponent<Props> = (props) => {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    
    let products : Product[] = props.products.filter(
        p => selectedCategory === "All" || p.category === selectedCategory);
    
    return (
        <div>
            <Header order={props.order} />
            {/* <Header order={Orders} /> */}
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-3 p-2'>
                        <CategoryList categories={props.categories}
                            selected={selectedCategory}
                            selectCategory={(cat: string) => {
                                setSelectedCategory(cat);
                            }} />
                    </div>
                    <div className='col-9 p-2'>
                        {
                            products.map(p =>
                                <ProductItem key={p.id} product={p}
                                    callback={props.addToOrder} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
