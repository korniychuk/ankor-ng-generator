import { FsService } from 'app/services/fs.service';
import { Config } from 'app/config-loader';
import { StringService } from 'app/services/string.service';

export class Di {
  public fs: FsService;
  public str: StringService;

  public constructor(
    public prog: any,
    public config: Config,
  ) {
  }

  public init(): void {
    this.fs = new FsService(this);
    this.str = new StringService(this);
  }

}
