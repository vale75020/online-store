import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
//import { storeProducts } from "../data";
import { ProductConsumer } from "../context";

export default class ProductList extends Component {
  // state = {
  //   products: storeProducts
  // };

  render() {
    // console.log(this.state.products)
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container" />
          <Title name="our" title="products" />
          <div className="row">
            <ProductConsumer>
              {value => {
                //console.log(value)
                return value.products.map(product => {
                  return <Product key={product.id} product={product} />; // chaque produit de l'array products du state sera mappé dans le composant <Produit />. on lui passe le props product={product}
                });
              }}
            </ProductConsumer>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
