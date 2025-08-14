import { Grid2, Stack, Typography } from '@mui/material';
import getProduct from './get-production';
import { getProductImage } from '../product-image';
import Image from 'next/image';
import Checkout from '@/app/checkout/checkout';

interface SingleProductPage {
  params: { productId: string };
}

export default async function SingleProduct({ params }: SingleProductPage) {
  const { productId } = await params;
  const product = await getProduct(+productId);

  return (
    <Grid2 container rowGap={3} marginBottom='2rem'>
      {product.imageExists && (
        <Grid2 size={{ md: 6, xs: 12 }}>
          <Image
            src={getProductImage(product.id)}
            width={0}
            height={0}
            className='w-full sm:w-3/4 h-auto'
            sizes='100vw'
            alt='Picture of the product'
          />
        </Grid2>
      )}

      <Grid2 size={{ md: 6, xs: 12 }}>
        <Stack gap={3}>
          <Typography variant='h2'>{product.name}</Typography>
          <Typography>{product.description}</Typography>
          <Typography variant='h4'>{product.price}€</Typography>
          <Checkout productId={product.id}></Checkout>
        </Stack>
      </Grid2>
    </Grid2>
  );
}
