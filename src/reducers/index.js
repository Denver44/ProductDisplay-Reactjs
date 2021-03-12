import { combineReducers } from "redux";

const productReducer = () => {
  return [
    {
      _id: "1",
      title: "Apple iPhone 7 (32GB) - Black",
      src: [
        "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
      ],
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum nihil, nesciunt, perferendis qui explicabo autem perspiciatis dicta sapiente dolore ab quo!",
      price: 25990,
      rating: 3,
    },
    {
      _id: "2",
      title: "New Apple iPhone 12 Mini (64GB) - Black",
      src: [
        "https://images.unsplash.com/photo-1611734828917-718f25babb2b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
      ],
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum nihil, nesciunt, perferendis qui explicabo autem perspiciatis dicta sapiente dolore ab quo!",
      price: 67100,
      rating: 4,
    },
    {
      _id: "3",
      title: "New Apple iPhone 11 (64GB) - Black",
      src: [
        "https://images.unsplash.com/photo-1587515337567-15988ed16b7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      ],
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum nihil, nesciunt, perferendis qui explicabo autem perspiciatis dicta sapiente dolore ab quo!",
      price: 48999,
      rating: 5,
    },
    {
      _id: "4",
      title: "New Apple iPhone 12 Pro Max (128GB) - Pacific Blue",
      src: [
        "https://images.unsplash.com/photo-1604054923518-e491a9a6afbb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      ],
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum nihil, nesciunt, perferendis qui explicabo autem perspiciatis dicta sapiente dolore ab quo!",
      price: 124704,
      rating: 5,
    },
    {
      _id: "5",
      title: "New Apple iPhone 12 (128GB) - White",
      src: [
        "https://images.unsplash.com/photo-1606341936184-5ef6fd210fd1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
      ],
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum nihil, nesciunt, perferendis qui explicabo autem perspiciatis dicta sapiente dolore ab quo!",
      price: 84889,
      rating: 4,
    },
  ];
};

const selectedProducteducer = (selectedProduct = null, action) => {
  if (action.type === "PRODUCT_SELECTED") {
    return action.payload;
  }
  return selectedProduct;
};

export default combineReducers({
  product: productReducer,
  selectedProduct: selectedProducteducer,
});
