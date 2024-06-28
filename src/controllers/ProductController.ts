import { Body, Post, Get, Delete, Route } from "tsoa";
import { ProductModel } from "../models/Product";
import { JsonObject } from "swagger-ui-express";

@Route("api/product")
export default class ProductController {
  @Post("")
  public async create(
    @Body()
    body: {
      id: string;
      name: String;
      category: String;
      price: Number;
      image: String;
      active: Boolean;
    }
  ): Promise<JsonObject> {
    const data = new ProductModel({
      id: body.id,
      name: body.name,
      category: body.category,
      price: body.price,
      image: body.image,
      active: body.active,
    });

    try {
      return data.save();
    } catch (error) {
      return { error };
    }
  }

  @Get("")
  public async listAll(): Promise<JsonObject> {
    try {
      const data = await ProductModel.find();
      return data;
    } catch (error) {
      return { error };
    }
  }

  @Get("/active")
  public async listAllActive(): Promise<JsonObject> {
    try {
      const filter = { active: { $eq: true } };

      const data = await ProductModel.find(filter);
      return data;
    } catch (error) {
      return { error };
    }
  }

  @Delete("/:id")
  public async delete(id: string): Promise<JsonObject> {
    try {
      const data = await ProductModel.findOneAndDelete({ id: { $eq: id } });
      return { message: data };
    } catch (error) {
      return { error };
    }
  }
}
