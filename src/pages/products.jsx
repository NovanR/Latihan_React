import CardProduct from "../components/Fragments/CardProduct";

const Products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: "Rp 1.000.000",
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          necessitatibus, quas maxime cupiditate repudiandae quod quaerat quam
          tempora veritatis doloribus labore ratione dicta magnam nobis porro
          optio quisquam nulla architecto!`,
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: "Rp 500.000",
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
  {
    id: 3,
    name: "Sepatu Neki",
    price: "Rp 2.000.000",
    image: "/images/shoes-1.jpg",
    description: `Ini sepatu neki kaciw`,
  },
];

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      {Products.map((product) => (
        <CardProduct>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body name={product.name}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductsPage;
