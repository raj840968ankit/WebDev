// v8 engine handles synchronous task
// Libuv(a 'C' library) that includes 'event loop' and 'thread pool'

//.................how node js works.........................
// Main thread (Initialize program -> top level codes -> import modules -> Register event callbacks -> Start event loop -> offloads to thread pool(if heavy task like - managing file etc))
// Thread pool (it  has 4 threads by-default )  