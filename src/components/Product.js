import React, { Component } from "react";
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {productConsumer} from "../context"

const ProductWrapper = styled.div`

`


export default class Product extends Component {
  render() {
    const {id, title, img, price, inCart} = this.props.product; //props from product de productList
    return (
      <ProductWrapper>
        <h3> hello from Product</h3>
      </ProductWrapper>
    );
  }
}
