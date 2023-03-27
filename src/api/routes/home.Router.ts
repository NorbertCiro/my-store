import { Router } from "express";

export const router = Router();

router.get('/home', (_req:any, res:any) =>{
  res.json('Hola soy el home');
});
