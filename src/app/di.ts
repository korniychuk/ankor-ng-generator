import { FsWrapper } from 'app/fs-wrapper';
import { Config } from 'app/config-loader';
import { StringHelper } from 'app/string-helper';

export class Di {
  public fs: FsWrapper;
  public str: StringHelper;

  public constructor(
    public prog: any,
    public config: Config,
  ) {
  }

  public init(): void {
    this.fs = new FsWrapper(this);
    this.str = new StringHelper(this);
  }

}
