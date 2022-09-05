import axios from "axios";
const Base_URL = `https://fakestoreapi.com/products`;
const getProducts = async () => {
  const Response = await axios.get(Base_URL);
  console.log(Response.data);
  return Response.data;
};
export {getProducts};

// import axios from "axios";

// const BASE_URL = "https://fakestoreapi.com";

// const getProducts = async () => {
//     const response = await axios.get(`${BASE_URL}/products`);
//     console.log(Response.data);
//     return response.data;
// }

// export {getProducts};