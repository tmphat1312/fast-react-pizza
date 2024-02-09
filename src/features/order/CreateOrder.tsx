import { useState } from 'react';
import { Form, useNavigation } from 'react-router-dom';
import { PRIORITY_ORDER_PRICE_RATE } from '../../constants';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useFormActionData } from '../../hooks/useFormActionData';
import { CreateOrderFormSchema } from '../../schemas/CreateOrderFormSchema';
import { FormErrorSchema } from '../../schemas/FormErrorSchema';
import Button from '../../ui/Button';
import { currencyFormatter } from '../../utils/formatter';
import { selectTotalPrice } from '../cart/cartSlice';
import { fetchAddress } from '../user/userSlice';

function CreateOrder() {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [withPriority, setWithPriority] = useState<'on' | 'off'>('off');
  const { username, address, position, errorMessage, geoState } =
    useAppSelector((state) => state.user);
  const cart = useAppSelector((state) => state.cart.cart);
  const totalPrice = useAppSelector(selectTotalPrice);
  const formData = useFormActionData<FormErrorSchema<CreateOrderFormSchema>>();

  const isSubmitting = navigation.state === 'submitting';
  const isLoadingGeo = geoState === 'loading';
  const finalPrice =
    totalPrice * (withPriority === 'on' ? PRIORITY_ORDER_PRICE_RATE : 1);
  const positionInputValue = position
    ? `${position.latitude},${position.longitude}`
    : '';
  const errors = formData?.errors || {};

  function handleGetLocation() {
    dispatch(fetchAddress());
  }

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
          <div className="flex flex-col grow">
            <div className="flex flex-col items-start gap-3 grow sm:flex-row sm:items-center">
              <input
                className="cp-input"
                type="text"
                name="address"
                required
                disabled={isLoadingGeo}
                defaultValue={address}
              />
              <Button
                type="button"
                className="shrink-0"
                size="sm"
                disabled={isLoadingGeo}
                onClick={handleGetLocation}
              >
                Get your location
              </Button>
            </div>
            {geoState == 'rejected' && (
              <p className="p-2 mt-2 text-xs text-red-700 bg-red-100 rounded-xl">
                {errorMessage}
              </p>
            )}
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
        <input type="hidden" name="position" value={positionInputValue} />

        <div>
          <Button disabled={isSubmitting || isLoadingGeo} type="submit">
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
