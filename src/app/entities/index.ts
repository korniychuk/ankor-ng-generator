import { Di } from 'app/di';
import { commonOptions } from 'app/common-options';

export default (di: Di) =>  {
  [
    require('./component').default(di),
    require('./directive').default(di),
    require('./guard').default(di),
    require('./model').default(di),
    require('./module').default(di),
    require('./page').default(di),
    require('./pipe').default(di),
    require('./service').default(di),
  ]
    .forEach((prog) => commonOptions(prog));
};
