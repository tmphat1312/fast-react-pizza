import api from '../../api/api';
import { MenuItemModel } from '../../models/MenuItemModel';

export async function menuLoader() {
  return await api<MenuItemModel>('/menu');
}
