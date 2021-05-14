import React, { Component } from "react";
import Client from "shopify-buy";

//CREATE CONTEXT
const ShopContext = React.createContext();

// Initializing a client to return content in the store's primary language
// const client = Client.buildClient({
//   domain: "graphql.myshopify.com",
//   storefrontAccessToken: "dd4d4dc146542ba7763305d71d1b3d38",
// });

const productList = [
  {
    id: 1,
    title: "Televisions",
    variants: [
      { title: "Samsung UA32N5000AKXKE 32 inch LED TV, HD Ready, Digital", price: 27495, rent: 25000, waranty: '12 Months', insurance:'Yes', img:"https://bit.ly/3bmKPMH" },
      { title: "Von VEL40FBAF/VEL40FBCF 40inch LED TV, Digital", price: 33570, rent: 25000, waranty: '12 Months', insurance:'Yes', img: 'https://bit.ly/33L7deJ' },
      { title: "Sony 32inch 32R300 Digital LED HD TV - Black", price: 22900, rent: 25000, waranty: '12 Months', insurance:'Yes', img:'https://bit.ly/3ydLFFp' },
    ],
    images: { src: "https://bit.ly/3bJ3sej" },
  },
  {
    id: 2,
    title: "Refrigerators",
    variants: [
      { title: "Midea HS-121LN Single Door Refrigerator - 93L - Silver", size: 32, price: 16900, rent: 25000, img:"https://bit.ly/3yd24tE", waranty: '12 Months', insurance:'Yes' },
      { title: "Mika MRDCD105XDM - Direct Cool Double Door Refrigerator - 200L", size: 32, price: 41495, rent: 25000, img:"https://bit.ly/3yd24tE", waranty: '12 Months', insurance:'Yes' },
      { title: "Nexus NX-140K SILVER REFRIGERATOR 118L FRIDGE", size: 32, price: 27950, rent: 25000, img:"https://bit.ly/3ogq22D", waranty: '12 Months', insurance:'Yes' },
    ],
    images: { src: "https://bit.ly/3tSPo8h" },
  },
  {
    id: 3,
    title: "Microwave Ovens",
    variants: [
      { title: "Nunix 20L Electric Rotisserie Oven", size: 32, price:  6299, rent: 25000, waranty: '12 Months', insurance:'Yes', img:'https://bit.ly/3hoo2nA' },
      { title: "Haier HP70J20AL-V2 -Digital Microwave Oven - 20 Litres - Black", size: 32, price: 8699, rent: 25000, waranty: '12 Months', insurance:'Yes', img:'https://bit.ly/3brNtAV' },
      { title: "Bruhm BME-20GM, Digital Microwave Oven With Grill, 20L - White", size: 32, price: 7990, rent: 25000, waranty: '12 Months', insurance:'Yes', img:'https://bit.ly/3oe3Eae' },
    ],
    images: { src: "https://bit.ly/3oe3Eae" },
  },
  {
    id: 4,
    title: "Dispensers",
    variants: [
      { title: "Bruhm BWD HN11 - Hot & Normal Water Dispenser With Cabinet", size: 32, price: 7490, rent: 25000, waranty: '12 Months', insurance:'Yes', img:'https://bit.ly/3w3QUWr' },
      { title: "Ramtons RM/565, 3 Tap Water Dispenser + Stand - Silver", size: 32, price: 17999, rent: 25000, waranty: '12 Months', insurance:'Yes', img:'https://bit.ly/3w2ErlS' },
      { title: "Nexus NX-101 BK, Hot & Cold & Normal - Black, Dispenser Combo", size: 32, price: 300000, rent: 25000, waranty: '12 Months', insurance:'Yes', img:'https://bit.ly/3hm2N61' },
    ],
    images: { src: "https://bit.ly/3ohLcgN" },
  },
  {
    id: 5,
    title: "Printers",
    variants: [
      { title: "HP DESKJET 2710 WIRELESS SCAN,COPY PRINT", size: 32, price: 9550, rent: 25000, waranty: '12 Months', insurance:'Yes', img: 'https://bit.ly/3fganwq' },
      { title: "Epson 4-in-1 EcoTank Mono Printer", size: 32, price: 47660, rent: 25000, waranty: '12 Months', insurance:'Yes', img:'https://bit.ly/3tMooqS' },
      { title: "Epson L3150 EcoTank +500SheetRim+cable+cleaner", size: 32, price: 26799, rent: 25000, waranty: '12 Months', insurance:'Yes', img: 'https://bit.ly/3tQ8tHY' },
    ],
    images: { src: "https://bit.ly/3uO7NUH" },
  },
];

class ShopProvider extends Component {
  state = {
    products: [],
    product: {},
    checkout: {},
    isCartOpen: false,
  };

  // componentDidMount() {
  //   this.createCheckout();
  // }

  // createCheckout = async () => {
  //   try {
  //     const checkout = await client.checkout.create();
  //     this.setState({ ...this.state, checkout: checkout });
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // };

  // addItemToCheckout = async (variantId, quantity) => {
  //   const lineItemsToAdd = [
  //     {
  //       variantId,
  //       quantity: parseInt(quantity, 10),
  //     },
  //   ];
  //   const checkout = client.checkout.addLineItems(
  //     this.state.checkout.id,
  //     lineItemsToAdd
  //   );
  //   this.setState({ checkout: checkout });
  // };

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
