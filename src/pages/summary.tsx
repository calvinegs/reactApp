import { FunctionComponent } from "react"
import { NavLink } from "react-router-dom"
import { useParams } from "react-router-dom"

interface Params {
    id: string
}

export const Summary: FunctionComponent = () => {
    let params = useParams();
    const id = params.id;

    return <div className="m-2 text-center">
        <h2>Thanks!</h2>
        <p>Thanks for placing your order.</p>
        <p>Your order is #{id}</p>
        <p>We'll ship your goods as soon as possible.</p>
        <NavLink to="/products" className="btn btn-primary">OK</NavLink>
    </div>
}