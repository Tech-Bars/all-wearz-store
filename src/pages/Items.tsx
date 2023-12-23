import React from 'react'
import Item from '../components/Items/Item'
import RelatedItems from '../components/Items/RelatedItems'

const Itemspage: React.FC = () => {
    return (
        <div className="lg:px-5 px-3 py-2 lg:py-10">
            <Item />
            <RelatedItems />
        </div>
    )
}

export default Itemspage
