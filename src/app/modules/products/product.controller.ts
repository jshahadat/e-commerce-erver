import { Request, Response } from 'express';
import { productValidationSchema } from './product.validation';
import { ProductServices } from './product.service';

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
    const { _id } = req.params;
    if (!_id) {
      return res.status(400).json({
        success: false,
        message: 'Product ID is required',
      });
    }

    const result = await ProductServices.getSingleProductById(_id);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};

export const ProductController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
};
