import { ActionFunctionArgs, redirect } from 'react-router-dom';
import api from '../../api/api';
import { OrderModel } from '../../models/OrderModel';
import { CreateOrderFormSchema } from '../../schemas/CreateOrderFormSchema';
import { FormErrorSchema } from '../../schemas/FormErrorSchema';
import { hasAnyKeys } from '../../utils/helpers';
import { store } from '../../store';
import { clearCart } from '../cart/cartSlice';

function isValidPhone(str: string) {
  const IS_VALID_PHONE_REGEX =
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

  return IS_VALID_PHONE_REGEX.test(str);
}

export async function createOrderAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries()) as CreateOrderFormSchema;
  const errors: FormErrorSchema<CreateOrderFormSchema> = {};

  if (!isValidPhone(data.phone)) {
    errors.phone =
      'Please give us your correct phone number. It will be useful when we need to contact you.';
  }

  if (hasAnyKeys(errors)) {
    return {
      status: 400,
      errors,
    };
  }

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'on',
  };

  const newOrder = await api<OrderModel>('/order', {
    method: 'POST',
    body: JSON.stringify(order),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  store.dispatch(clearCart());

  return redirect('/order/:orderId'.replace(':orderId', newOrder.id));
}
