import Home from '../views/pages/home';
import Product from '../views/pages/product';
import AboutUs from '../views/pages/about-us';
import Detail from '../views/pages/detail';
import Page404 from '../views/pages/page404';
 
const routes = {
  '/': Home, // default page
  '/product': Product,
  '/about-us': AboutUs,
  '/404': Page404,
  '/detail/:id': Detail,
};
 
export default routes;