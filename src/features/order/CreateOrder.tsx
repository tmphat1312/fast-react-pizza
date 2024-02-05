import { Form, useNavigation } from 'react-router-dom';
import { useFormActionData } from '../../hooks/useFormActionData';
import { FormErrorSchema } from '../../schemas/FormErrorSchema';
import { CreateOrderFormSchema } from '../../schemas/CreateOrderFormSchema';

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
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
            {errors.phone && <span>{errors.phone}</span>}
          </div>
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
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
          <button disabled={isSubmitting}>
            {isSubmitting ? 'Placing order ...' : 'Place order'}
          </button>
        </div>
      </Form>
    </section>
  );
}

export default CreateOrder;
