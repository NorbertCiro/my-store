import { Router } from 'express';
import { faker } from '@faker-js/faker';

export const router = Router();

router.get('/', (_req:any, res:any) =>{
  const products = [];
  for (let index = 0; index < 100; index++) {
    const { productName, price } = faker.commerce;
    const { imageUrl } = faker.image;
    products.push({
      names: productName(),
      price: parseInt(price(), 10),
      image: imageUrl(),
    });
  }
  res.json(products);
});

router.get('/', (_req:any, res:any) =>{
  res.json([
    {
      name: 'CellPhone',
      brand: 'Huawei Y9 Prime',
      price:  1500000
    },
    {
      type: 'Computer Gamer',
      brand: 'Huawei Pad',
      price:  3500000
    }
  ]);
});

router.get('/:id', (req:any, res:any)=>{
  const { id } = req.params;
  res.json({
    id,
    name: 'CellPhone',
    brand: 'Huawei Y9 Prime',
    price:  1500000
  })
});

