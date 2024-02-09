import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { MenuItemModel } from '../../models/MenuItemModel';
import Button from '../../ui/Button';
import {
  addItemQuantity,
  removeItemQuantity,
  selectorItemQuantity,
} from './cartSlice';

type UpdateItemQuantityButtonsProps = {
  pizzaId: MenuItemModel['id'];
};

export default function UpdateItemQuantityButtons({
  pizzaId,
}: UpdateItemQuantityButtonsProps) {
  const dispatch = useAppDispatch();
  const currentQuantity = useAppSelector(selectorItemQuantity(pizzaId));
  const QUANTITY_STEP = 1;

  function handleAddOne() {
    dispatch(addItemQuantity({ pizzaId, quantity: QUANTITY_STEP }));
  }

  function handleRemoveOne() {
    dispatch(removeItemQuantity({ pizzaId, quantity: QUANTITY_STEP }));
  }

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        size="sm"
        variant="rounded"
        aria-label="Add one of quantity"
        onClick={handleRemoveOne}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        size="sm"
        variant="rounded"
        aria-label="Remove one of quantity"
        onClick={handleAddOne}
      >
        +
      </Button>
    </div>
  );
}
