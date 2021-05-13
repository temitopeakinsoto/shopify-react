import React, { Component } from "react";
import Client from "shopify-buy";

//CREATE CONTEXT
const ShopContext = React.createContext();

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: "graphql.myshopify.com",
  storefrontAccessToken: "dd4d4dc146542ba7763305d71d1b3d38",
});

const productList = [
  {
    id: 1,
    title: "Television",
    variants: [
      { title: "ONE", size: 32, price: 100000, rent: 25000 },
      { title: "ONE", size: 32, price: 100000, rent: 25000 },
      { title: "ONE", size: 32, price: 100000, rent: 25000 },
    ],
    images: { src: "https://bit.ly/2R7XmwX" },
  },
  {
    id: 2,
    title: "Refrigerator",
    variants: [
      { title: "TWO", size: 32, price: 200000, rent: 25000 },
      { title: "TWO", size: 32, price: 200000, rent: 25000 },
      { title: "TWO", size: 32, price: 200000, rent: 25000 },
    ],
    images: { src: "https://bit.ly/3tSPo8h" },
  },
  {
    id: 3,
    title: "Microwave",
    variants: [
      { title: "THREE", size: 32, price: 300000, rent: 25000 },
      { title: "THREE", size: 32, price: 300000, rent: 25000 },
      { title: "THREE", size: 32, price: 300000, rent: 25000 },
    ],
    images: { src: "https://bit.ly/3tEMdAV" },
  },
  {
    id: 4,
    title: "Dispenser",
    variants: [
      { title: "FOUR", size: 32, price: 400000, rent: 25000 },
      { title: "THREE", size: 32, price: 300000, rent: 25000 },
      { title: "THREE", size: 32, price: 300000, rent: 25000 },
    ],
    images: { src: "https://bit.ly/2R7XmwX" },
  },
  {
    id: 5,
    title: "Printer",
    variants: [
      { title: "FIVE", size: 32, price: 400000, rent: 25000 },
      { title: "THREE", size: 32, price: 300000, rent: 25000 },
      { title: "THREE", size: 32, price: 300000, rent: 25000 },
    ],
    images: { src: "https://bit.ly/2R7XmwX" },
  },
];

class ShopProvider extends Component {
  state = {
    products: [],
    product: {},
    checkout: {},
    isCartOpen: false,
  };

  componentDidMount() {
    this.createCheckout();
  }

  createCheckout = async () => {
    try {
      const checkout = await client.checkout.create();
      this.setState({ ...this.state, checkout: checkout });
    } catch (error) {
      throw new Error(error);
    }
  };

  addItemToCheckout = async (variantId, quantity) => {
    const lineItemsToAdd = [
      {
        variantId,
        quantity: parseInt(quantity, 10),
      },
    ];
    const checkout = client.checkout.addLineItems(
      this.state.checkout.id,
      lineItemsToAdd
    );
    this.setState({ checkout: checkout });
  };

  fetchAllProducts = async () => {
    // const products = await client.product.fetchAll();
    this.setState({ products: productList });
  };

  fetchProductWithId = async (id) => {
    // const product = await client.product.fetch(id);
    console.log(`product id is ${id}`);
    // const product = productList.filter(product => product.id === {id});
    // console.log(`This product is ${product}`)
    this.setState({ product: productList[id - 1] });
  };

  closeCart = () => {
    this.setState({ isCartOpen: false });
  };

  openCart = () => {
    this.setState({ isCartOpen: true });
  };

  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          fetchAllProducts: this.fetchAllProducts,
          fetchProductWithId: this.fetchProductWithId,
          closeCart: this.closeCart,
          openCart: this.openCart,
          addItemToCheckout: this.addItemToCheckout,
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

const ShopConsumer = ShopContext.Consumer;
export { ShopConsumer, ShopContext };
export default ShopProvider;
