import chumi from 'chumi';
import controller from '../controller';

export default () => {
  return chumi(controller, {
    onSuccess(ctx) {
      if (!ctx.body) {
        ctx.status = 404;
      }
    }
  });
};
