import { FunctionComponent } from 'react'
import { NavLink } from 'react-router-dom';
import { Order } from '../data/entities'

interface Props {
    order: Order
}

// export default function productItem() {
export const Header: FunctionComponent<Props> = (props) => {
    const count = props.order.productCount;
    return (
        <div className='p-1 bg-secondary text-white text-end'>
            {count === 0 ? "(No Selection)" : `${count} product(s), $${props.order.total.toFixed(2)}`}
            <NavLink to="/order" className="btn btn-sm btn-primary m-1">
                Submit Order
            </NavLink>
            
        </div>
    )
}
