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
    path: '/useCookie',
    component: lazy(() => import('./useCookie')),
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
    path: '/fetch',
    component: lazy(() => import('./fetch')),
  },
  {
    path: '/debounce-throttle',
    component: lazy(() => import('./DebounceThrottle')),
  },
];

export default routes;
