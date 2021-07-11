import { ProductInterface } from "../Interfaces/ProductInterface";

class ProductBuilder {
    private readonly _product: ProductInterface;

    constructor() {
        this._product = {
            id: 0,
            name: "",
            type: "",
            price: 0,
            description: "",
            seller: "",
        }
    }

    setId(value: number) :ProductBuilder {
        this._product.id = value;
        return this
    }

    setName(value: string) :ProductBuilder {
        this._product.name = value;
        return this
    }

    setType(value: string) :ProductBuilder {
        this._product.type = value;
        return this
    }

    setPrice(value: number) :ProductBuilder {
        this._product.price = value;
        return this
    }

    setDescription(value: string) :ProductBuilder {
        this._product.description = value;
        return this
    }

    setSeller(value: string) :ProductBuilder {
        this._product.seller = value
        return this
    }

    public build() :ProductInterface {
        return this._product
    }
}

export default ProductBuilder