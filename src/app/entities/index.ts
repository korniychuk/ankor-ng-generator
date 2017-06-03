import { Di } from 'app/di';

export default (di: Di) => {
  require('./component').default(di);
};
