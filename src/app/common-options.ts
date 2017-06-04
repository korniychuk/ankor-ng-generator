export function commonOptions(prog) {
  return prog
    .option('-d, --debug', 'Enable/Disable inject debug service', prog.BOOL)
    .option('-m, --description', 'Class description')
  ;
}
