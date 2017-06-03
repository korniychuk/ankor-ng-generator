import { FsWrapper } from 'app/fs-wrapper';
import { Config } from 'app/config-loader';
import { StringHelper } from 'app/string-helper';

export interface Di {
  prog: any;
  config: Config;
  fs: FsWrapper;
  str: StringHelper;
}
