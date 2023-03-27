import { Router } from "express";

export const router = Router();

router.get('/:categoryId/products/productId', (req:any, res:any) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});
