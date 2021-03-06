import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { ShopData } from './shop.data';



class ShopPage extends React.Component {
    constructor() {
        super()

        // state here
        this.state = {
            collections: ShopData
        }
    }

    render() {
        const { collections } = this.state;

        return (
            <div className='shop-page'>
                {collections.map(({id, ...otherCollectionProps}) => (
                  <CollectionPreview key={id} {...otherCollectionProps} />
              ))}
            </div>
        )
    }
}

export default ShopPage;