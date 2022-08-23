import React, { ChangeEvent, FunctionComponent, useState } from 'react'

interface Props {
    selected: string,
    categories: string[],
    selectCategory: (category: string) => void
}

// export default function productItem() {
export const CategoryList: FunctionComponent<Props> = (props) => {
    return (
        <div className='d-grid gap-2'>
            {["All", ...props.categories].map(c => {
                let btnClass = props.selected === c ? "btn-primary" : "btn-secondary";

                return <button key={c}
                    className={`btn ${btnClass}`}
                    onClick={() => props.selectCategory(c)}>
                    {c}
                </button>
            })}

        </div>
    )
}
