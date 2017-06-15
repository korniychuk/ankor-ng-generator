export interface CommonOptions {
  debug: boolean;
  description: string;
}

export function commonOptions(prog) {
  return prog
    .option('-d, --debug', 'Enable/Disable inject debug service', prog.BOOL, true)
    .option('-m, --description', 'Class description')
  ;
}
