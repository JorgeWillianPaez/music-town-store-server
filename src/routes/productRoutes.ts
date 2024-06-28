import express, { Request, Response } from "express";
import ProductController from "../controllers/ProductController";

const router = express.Router();

router.post("", async (req: Request, res: Response) => {
  const controller = new ProductController();
  const response = await controller.create(req.body);

  return res.status(201).send(response);
});

router.get("", async (req: Request, res: Response) => {
  const controller = new ProductController();
  const response = await controller.listAll();
  return res.status(200).send(response);
});

router.get("/active", async (req: Request, res: Response) => {
  const controller = new ProductController();
  const response = await controller.listAllActive();
  return res.status(200).send(response);
});

router.patch("", async (req: Request, res: Response) => {
  const controller = new ProductController();
  const response = await controller.update(req.body);
  return res.status(204).send(response);
});

router.delete("/:id", async (req: Request, res: Response) => {
  const controller = new ProductController();
  const response = await controller.delete(req.params.id);
  return res.status(204).send(response);
});

export default router;
