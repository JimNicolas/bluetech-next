import { getGPU } from '@/app/api/apiGPU';
import styles from './page.module.css';
import Image from 'next/image';
export default async function productInfo({ params }) {
  const { id } = params;
  const product = await getGPU(process.env.API_URL, id);
  console.log(product);
  return (
    <>
      <h1>Producto seleccionado {params.id}</h1>
      <ul className={styles.containerProduct}>
        {product.map((producto) => (
          <>
            <li key={producto.id}>{producto.id}</li>
            <li key={producto.name}>{producto.name}</li>
            <Image
              src={producto.image_ref}
              height={500}
              width={500}
              alt={producto.name}
            />

            <li key={producto.actual_price}>{producto.actual_price}</li>
          </>
        ))}
      </ul>
    </>
  );
}
