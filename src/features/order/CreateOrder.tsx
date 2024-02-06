import { Form, useNavigation } from 'react-router-dom';
import { useFormActionData } from '../../hooks/useFormActionData';
import { FormErrorSchema } from '../../schemas/FormErrorSchema';
import { CreateOrderFormSchema } from '../../schemas/CreateOrderFormSchema';
import Button from '../../ui/Button';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const navigation = useNavigation();
  const formData = useFormActionData<FormErrorSchema<CreateOrderFormSchema>>();
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  const isSubmitting = navigation.state === 'submitting';
  const errors = formData?.errors || {};

  return (
    <section>
      <h2>Ready to order? Let's go!</h2>

      <Form method="post" action="/order/new">
        <div>
          <label>First Name</label>
          <input className="cp-input" type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input className="cp-input" type="tel" name="phone" required />
            {errors.phone && <span>{errors.phone}</span>}
          </div>
        </div>

        <div>
          <label>Address</label>
          <div>
            <input className="cp-input" type="text" name="address" required />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            className="h-6 aspect-square accent-primary-400"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <input type="hidden" name="cart" value={JSON.stringify(cart)} />

        <div>
          <Button disabled={isSubmitting} type="submit">
            {isSubmitting ? 'Placing order...' : 'Place Order'}
          </Button>
        </div>
      </Form>
    </section>
  );
}

export default CreateOrder;
