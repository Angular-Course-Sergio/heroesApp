import { CanMatchFn, Route, UrlSegment } from '@angular/router';

export const canMatchGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
) => {
  console.log('match');
  console.log({ route, segments });
  return true;
};
