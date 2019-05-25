# TodoClient

This project is generated with Angular CLI

Angular CLI: 7.3.9
Node: 10.15.3
OS: linux x64
Angular: 
... 

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.13.9
@angular-devkit/core         7.3.9
@angular-devkit/schematics   7.3.9
@schematics/angular          7.3.9
@schematics/update           0.13.9
rxjs                         6.3.3
typescript                   3.2.4


## installation procedure :

## Install node.js               : sudo apt-get install -y nodejs
    Install install @angular/cli. : sudo npm install -g @angular/cli
    

## Development server

Run 'ng serve' for a dev server. Naviage to `http://localhost:4200/`. 
The app will automatically reload if you change any of the source files. 
    
## possible issues:

issue: @angular/cli refuses to install, saying root user is not allowed to write into /usr/lib/node_modules/....
The install process retries endlessly. 

solution: fix for the issue, is manually installing node-gyp prior to installing @angular/cli

$ sudo npm install -g node-gyp
$ sudo npm install -g @angular/cli

issue:    Client disconnects from the server
solution: run ng serve --live-reload=false


##NOTE : In the current version, only the addTodo and listTodo buttons work. 
The functionalities like update and delete will be added in the next version.





 
