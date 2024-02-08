import { useAppDispatch } from '../../hooks/useAppDispatch';
import { MenuItemModel } from '../../models/MenuItemModel';
import Button from '../../ui/Button';
import { removeItem } from './cartSlice';

type RemoveCartItemButtonProps = {
  pizzaId: MenuItemModel['id'];
};

export default function RemoveCartItemButton({
  pizzaId,
}: RemoveCartItemButtonProps) {
  const dispatch = useAppDispatch();

  function handleRemove() {
    dispatch(removeItem(pizzaId));
  }

  return (
    <Button size="sm" onClick={handleRemove}>
      Delete
    </Button>
  );
}
