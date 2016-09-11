import App from './App';
import Home from '../Home/components/Home';
import Gomugom from '../Gomugom/components/Gomugom';

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
        }
    ]
});
export default routes;
