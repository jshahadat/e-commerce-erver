import { Request, Response } from 'express';
import { productValidationSchema } from './product.validation';
import { ProductServices } from './product.service';
import { TProduct } from './product.interface';

const createProduct = async (req: Request, res: Response) => {
  try {
    const zodParsedData = productValidationSchema.parse(req.body);
    const result = await ProductServices.createProductIndtoDB(zodParsedData);

    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const resullt = await ProductServices.getAllProductFromDB();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: resullt,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'somthing went wrong',
      error: err,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getSingleProductByIdFromDB(
      req.params.productId,
    );

    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'somthing went wrong',
      error: err,
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const validationResult = productValidationSchema
      .partial()
      .safeParse(req.body);
    if (!validationResult.success) {
      return res.status(400).json(validationResult.error);
    }

    const productData = validationResult.data;
    const result = await ProductServices.updateProductIntoDB(
      req.params.productId,
      productData as TProduct,
    );
    res.status(200).json({
      success: true,
      message: '"Product updated successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'somthing went wrong',
      error: err,
    });
  }
};

const deleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.deleteSingleProductFromDB(
      req.params.productId,
    );
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'somthing went wrong',
      error: err,
    });
  }
};

const getAllSearchProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getSearchProductsFromDB(req.query);
    res.status(200).json({
      success: true,
      message: 'Products  fetched successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'somthing went wrong',
      error: err,
    });
  }
};

export const ProductController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteSingleProduct,
  getAllSearchProducts,
};
