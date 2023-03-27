import { Router } from "express";

export const router = Router();

router.get('/users', (req:any, res:any) => {
  const { limit, offseft } = req.query;
  if( limit && offseft) {
    res.json({
      limit,
      offseft
    });
  }res.send('No hay parametros');

});
