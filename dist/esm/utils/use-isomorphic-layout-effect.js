// From https://github.com/streamich/react-use/blob/master/src/useIsomorphicLayoutEffect.ts
// useLayoutEffect but does not trigger warning in server-side rendering
import { useEffect, useLayoutEffect } from 'react';
const useIsomorphicLayoutEffect = typeof document !== 'undefined' ? useLayoutEffect : useEffect;
export default useIsomorphicLayoutEffect;
//# sourceMappingURL=use-isomorphic-layout-effect.js.map