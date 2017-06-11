# Angular 4 Entities Generator.

### How to install

```bash
npm i -g ankor-ng-generator
```

### Usage examples:

```bash
# make init file for project(in the root dir of your project)
ngg init
  
# generate a component with inline template
ngg component my-first-comp -t
  
# show help for 'component' command
ngg component -h
  
# commands list
ngg
```

### How to configure

edit `.ng-generator.json` file in the root directory of your project after this generator has been initialized in your project.

### Commands

- component
- directive
- pipe
- service
- module
- page
- directory
- model _not finished_
- guard _not finished_

### Key differences with @angular/cli

- this generator can only generate entities and nothing more.(there is no things like `ng serve`)
- all methods in classes has access specifier (public/private/protected)
- components, pipes, directives, services has injected `DebugService` by default. (this is your custom service)
- components, pipes, directives has ngOnInit by default
- init and destroy method for services
- importing `SharedModule` in modules and pages by default
- `page` entity. This is specific module for async bundle loading
- `directory` entity. This is command for create directory with `index.ts` file and some constants like `export const MY_DIRECTORY_COMPONENTS = [ ... ];` in it

### What I want to do next:

- finish `model` and `guard` commands
- create command `api-service`
- add ability to modify templates for everyone without source code modifications(forking project)

### Why I created this project?

- first and main thing is: I wanted to be able to fully customize the templates for myself
- i wanted to have practice with node.js console applications
