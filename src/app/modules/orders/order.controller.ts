import { Request, Response } from 'express';
import { OrderServices } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    //     const zodParsedData = orderValidationSchema.parse(req.body);
    const result = await OrderServices.createOrderIntoDB(req.body);
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
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

// const createOrder = catchAsyncRequest(async (req: Request, res: Response) => {
//   const result = await OrderServices.createOrderIntoDB(req.body);
//   sendResponse(res, {
//     status: 200,
//     success: true,
//     data: result,
//     message: 'Order created successfully!',
//   });
// });

const getAllOrdersWithGmail = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getOrdersFromDBWithEmail(req.query);
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully for user email!',
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

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const resullt = await OrderServices.getAllOrderFromDB();
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
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

export const OrderControllers = {
  createOrder,
  getAllOrdersWithGmail,
  getAllOrders,
};
