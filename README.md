# Used Technologies
1. Angular 2
2. Google Ebook API
3. BootStrap

# How to run
git clone my repo

If node modules does not exist, run "npm install"

then run "npm start or npm run lite"

# Finish Functionalities
Users can view the existing booklist, search books, like books, and update the booklist entry according to the book title. 

# Missing Functionalities:
Employees Login (authentication). Better to have a back-end PHP support to do this one. 



# Deployment Issues
Trying to deploy to the Heroku hosting service
Error Log:
This version of CLI is only compatible with angular version 2.3.1 or better. Please
upgrade your angular version, e.g. by running:
 npm install @angular/core@latest
       
       npm ERR! code ELIFECYCLE
       npm ERR! errno 3
       npm ERR! bookstore@1.0.0 postinstall: `ng build --aot --target=production`
       npm ERR! Exit status 3
       npm ERR!
       npm ERR! Failed at the bookstore@1.0.0 postinstall script.
       npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
       
       npm ERR! A complete log of this run can be found in:
       npm ERR!     /tmp/npmcache.8Jx8c/_logs/2018-06-24T20_44_13_994Z-debug.log
-----> Build failed

The issue is that my package json has old Angular core dependency. I try to update the latest dependency, however, my app will crash becuase of app.routes.ts has used the old routing dependency. 

Also I have tried to deploy the app to unix.uvic.ca which is our school server by using FTP. However, Angluar needs to be deployed in mode of Angular-cli app. My machine has troubles setting that up.