//like browser we have 'window' and 'document', we have 'global' in node js that works slightly as window
//console.log(global)

global.console.log("ankit")
//node deals with server
//JS deal with browser

//'globalThis' provides a standard way to access the global object in any js environment even in browser('window')
globalThis.console.log("ankit")

globalThis.console.log(module) //module is constant and it is not a part og globalThis. Module is like a 'file' in node
//node - module
//react - component

globalThis.console.log(process) //it is typically same as document in window and is a part of globalThis

