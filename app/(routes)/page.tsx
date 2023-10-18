import getBillboard from "@/actions/get-billboard";
import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const Homepage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("3667d25c-e031-45dc-82d8-101f2c16e0db");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 mb-10">
          <ProductList title="Nuestras cajas" items={products} />
        </div>
      </div>
    </Container>
  );
};
export default Homepage;
