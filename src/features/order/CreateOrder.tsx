import { Form, useNavigation } from 'react-router-dom';
import { useFormActionData } from '../../hooks/useFormActionData';
import { CreateOrderFormSchema } from '../../schemas/CreateOrderFormSchema';
import { FormErrorSchema } from '../../schemas/FormErrorSchema';
import Button from '../../ui/Button';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectTotalPrice } from '../cart/cartSlice';
import { currencyFormatter } from '../../utils/formatter';
import { useState } from 'react';
import { PRIORITY_ORDER_PRICE_RATE } from '../../constants';

function CreateOrder() {
  const navigation = useNavigation();
  const [withPriority, setWithPriority] = useState<'on' | 'off'>('off');
  const username = useAppSelector((state) => state.user.username);
  const cart = useAppSelector((state) => state.cart.cart);
  const totalPrice = useAppSelector(selectTotalPrice);
  const formData = useFormActionData<FormErrorSchema<CreateOrderFormSchema>>();

  const isSubmitting = navigation.state === 'submitting';
  const finalPrice =
    totalPrice * (withPriority === 'on' ? PRIORITY_ORDER_PRICE_RATE : 1);
  const errors = formData?.errors || {};

  return (
    <section className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="post" action="/order/new">
        <div className="flex flex-col gap-2 mb-5 sm:gap-4 sm:items-center sm:flex-row">
          <label className="shrink-0 min-w-[12ch]">First Name</label>
          <input
            className="cp-input"
            type="text"
            name="customer"
            required
            defaultValue={username}
          />
        </div>

        <div className="flex flex-col gap-2 mb-5 sm:gap-4 sm:items-center sm:flex-row">
          <label className="shrink-0 min-w-[12ch]">Phone number</label>
          <div className="grow">
            <input className="cp-input" type="tel" name="phone" required />
            {errors.phone && (
              <p className="p-2 mt-2 text-xs text-red-700 bg-red-100 rounded-xl">
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-5 sm:gap-4 sm:items-center sm:flex-row">
          <label className="shrink-0 min-w-[12ch]">Address</label>
          <div className="grow">
            <input className="cp-input" type="text" name="address" required />
          </div>
        </div>

        <div className="flex items-center gap-5 mb-12">
          <input
            className="h-6 aspect-square accent-primary-400"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked ? 'on' : 'off')}
          />
          <label htmlFor="priority" className="font-semibold">
            Want to yo give your order priority?
          </label>
        </div>

        <input type="hidden" name="cart" value={JSON.stringify(cart)} />

        <div>
          <Button disabled={isSubmitting} type="submit">
            {isSubmitting
              ? 'Placing order...'
              : `Order now from ${currencyFormatter.format(finalPrice)}`}
          </Button>
        </div>
      </Form>
    </section>
  );
}

export default CreateOrder;
