import { lazy } from 'react';

const routes = [
  {
    path: '/useDragMove',
    component: lazy(() => import('./useDragMove')),
  },
  {
    path: '/useCountdown',
    component: lazy(() => import('./useCountdown')),
  },
  {
    path: '/useInViewport',
    component: lazy(() => import('./useInViewport')),
  },
  {
    path: '/usePrevious',
    component: lazy(() => import('./usePrevious')),
  },
  {
    path: '/useSort',
    component: lazy(() => import('./useSort')),
  },
  {
    path: '/useEffect',
    component: lazy(() => import('./useEffect')),
  },
  {
    path: '/useSigPad',
    component: lazy(() => import('./useSigPad')),
  },
  {
    path: '/useAnimateCss',
    component: lazy(() => import('./useAnimateCss')),
  },
  {
    path: '/useList',
    component: lazy(() => import('./useList')),
  },
  {
    path: '/useList1',
    component: lazy(() => import('./useListTE')),
  },
];

export default routes;
