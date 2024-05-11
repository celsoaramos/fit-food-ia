/* import MenuService from '@/services/MenuService';

const menuService = new MenuService();

async function getRoutes() {
  const menu = await menuService.getMenu();
  console.log('menu routes', menu)
  let coreRoutes: any[] = [];
  menu.map((item: any) => {
    coreRoutes.push({
      path: `/${item.url}`,
      title: `${item.name}`,
      component: `../pages/${item.url}`,
      icon: `${item.icon}`
    });
  });
  return coreRoutes;
}

const routes = await getRoutes();

export default routes; */
