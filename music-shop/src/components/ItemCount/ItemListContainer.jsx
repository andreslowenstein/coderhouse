import React, { Component } from 'react'
import ItemList from './ItemList'

export default class ItemListContainer extends Component {
    render() {
        return (
            <div>
                <h1>Este será el {this.props.nombre} de mi ecommerce!</h1>
                <ItemList />
            </div>
        )
    }
}