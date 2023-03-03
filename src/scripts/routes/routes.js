import Home from '../views/pages/home';
import Product from '../views/pages/product';
import AboutUs from '../views/pages/about-us';
import Detail from '../views/pages/detail';
import Page404 from '../views/pages/page404';
import Contact from '../views/pages/contact';
 
const routes = {
  '/': Home, // default page
  '/product': Product,
  '/about-us': AboutUs,
  '/404': Page404,
  '/contact': Contact,
  '/detail/:id': Detail,
};
 
export default routes;