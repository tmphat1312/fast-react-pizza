import { useLoaderData } from '../../hooks/useLoaderData';
import { MenuItemModel } from '../../models/MenuItemModel';
import MenuItem from './MenuItem';

export default function Menu() {
  const data = useLoaderData<MenuItemModel[]>();

  return (
    <ul>
      {data.map((item) => (
        <MenuItem key={item.id} pizza={item} />
      ))}
    </ul>
  );
}
