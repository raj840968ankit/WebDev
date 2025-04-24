//.................Local package.........................
// npm install "packageName" -> for installing a package
// npm install -> if you deleted node_modules directory then it will restore

// npm list -> shows all dependencies of your project
// npm view 'packageName' -> show details about packages


//dependency symbol in package.json
//   ^ -> patch and minor updates or 4.x
//   ~ -> only patch updates or 4.1.x
//   4.1.1 -> exact version


//npm outdated -> show outdated packages
//npm update 'packageName' -> updated and will reflect in package-lock.json but not in package.json
//npx npm-check-updates -u -> to reflect update version in package.json
//npm install -> last step
//npm uninstall 'packageName'


//...................Global  package...................................
//npm install -g npm-check-updates
//npm install -g npm -> update npm globally
//npm install -g 'packageName'
//npm outdated -g -> to check outdated packages
//npm update -g nodemon
//npm remove -g nodemon