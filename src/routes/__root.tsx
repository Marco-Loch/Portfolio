import { Outlet, createRootRoute } from '@tanstack/react-router';
import MouseFollowShadow from '../components/MouseFollowShadow/Mouse_Follow_Shadow';

export const Route = createRootRoute({
  component: () => (
    <MouseFollowShadow
      shadowColor="rgba(61, 207, 182, 0.5)"
      shadowSize={250}
      blur={150}
      containerBackground="linear-gradient(135deg, rgba(8, 70, 59, 1) 0%, rgba(28, 28, 28, 1) 50%, rgba(28, 28, 28, 1) 100%)">
      <Outlet />
    </MouseFollowShadow>
  ),
});
