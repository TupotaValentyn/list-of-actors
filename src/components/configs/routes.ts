import Overview from '../Overview';
import ActorPage from '../ActorPage/ActorPage';

export const routes = [
  {
    path: '/',
    component: Overview,
    exact: true
  },
  {
    path: '/actor/:id',
    component: ActorPage,
    exact: true
  }
]
