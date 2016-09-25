import App from './App';
import Home from '../Home/components/Home';
import Gomugom from '../Gomugom/components/Gomugom';
import ArusantimoMain from '../Arusantimo/components/ArusantimoMain';

const routes = getState => ({
    path: '/',
    component: App,
    childRoutes: [
        {
            indexRoute: { component: Home }
        }, {
            path: '/gomugom',
            component: Gomugom,
            onEnter: ()=>{ console.log('gomugom page rendered'); }
        }, {
            path: '/arusantimo',
            component: ArusantimoMain,
            onEnter: ()=>{ console.log('welcome to Arunsantimo page!'); }
        }
    ]
});
export default routes;
