import { Component } from "react";

export class ShopItemCC extends Component {
    item = {
        brand: 'Tiger of Sweden',
        title: 'Leonard coat',
        description: 'Minimalistic coat in cotton-blend',
        descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
        price: 399,
        currency: '£',
        src: "https://github.com/netology-code/ra16-homeworks/blob/ra-51/components/store-class/i/item-black.jpg?raw=true",
    };

    render() {
        const {brand, title, description, descriptionFull, price, currency} = this.props.item;
        return (
            <div className = "main-content">
                <h2>{brand}</h2>
                <h1>{title}</h1>
                <h3>{description}</h3>
                <div className = "description">
                    {descriptionFull}
                </div>
                <div className = "highlight-window mobile">
                    <div className = "highlight-overlay"></div>
                </div>
                <div className="divider"></div>
                <div className="purchase-info">
                    <div className = "price">{currency}{price}{".00"}</div>
                    <button>{"Добавить в корзину"}</button>
                </div>
            </div>
        );
    }
};
