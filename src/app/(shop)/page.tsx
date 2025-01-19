import { ProductGrid, Title } from '@/components'
import { initialData } from '@/seed/seed';

const products = initialData.products

export default function Home() {
  return (
    <div>
      <Title
        title='Tienda'
        subtitle='Todos los Productos'
        clasName='mb-2'
      />
      <ProductGrid
        products={products}
      />
    </div>
  );
}
