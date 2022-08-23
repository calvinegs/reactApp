import { connect } from "react-redux"
import { FunctionComponent } from "react"
import { NavLink } from "react-router-dom"
import { Order } from "../data/entities"
import { StoreData } from "../data/types"

const mapStateToProps = (data: StoreData) => ({
    order: data.order
})

interface Props {
    order: Order,
    submitCallback: () => void
}

const OrderDetailComponent: FunctionComponent<Props> = (props) => {
    return <div>
        <h3 className="text-center bg-primary text-white p-2">
            Order Summary
        </h3>
        <div className="p-3">
            <table className="table table-sm table-striped">
                <thead>
                    <tr>
                        <th>Quantity</th>
                        <th>Product</th>
                        <th className="text-end">Price</th>
                        <th className="text-end">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {props.order.orderLines.map(line =>
                        <tr key={line.product.id}>
                            <td>{line.quantity}</td>
                            <td>{line.product.name}</td>
                            <td className="text-end">{line.product.price.toFixed(2)}</td>
                            <td className="text-end">{line.total.toFixed(2)}</td>
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <th className="text-end" colSpan={3}>Total:</th>
                        <th className="text-end" colSpan={3}>${props.order.total.toFixed(2)}</th>
                    </tr>
                </tfoot>
            </table>
        </div>
        <div className="text-center">
            <NavLink to="/products" className="btn btn-secondary m-1">
                Back
            </NavLink>
            <button className="btn btn-primary m-1" onClick={props.submitCallback}>
                Submit Order
            </button>

            {/* <NavLink to="/summary" className="btn btn-primary m-1">
                Submit Order
            </NavLink> */}
        </div>
    </div>
}

const connectFunction = connect(mapStateToProps);

export const OrderDetails = connectFunction(OrderDetailComponent);
