import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="/images/shoes-1.jpg" />
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          necessitatibus, quas maxime cupiditate repudiandae quod quaerat quam
          tempora veritatis doloribus labore ratione dicta magnam nobis porro
          optio quisquam nulla architecto!
        </CardProduct.Body>
        <CardProduct.Footer price="Rp 1.000.000" />
      </CardProduct>
    </div>
  );
};

export default ProductsPage;
