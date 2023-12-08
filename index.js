const { Worker, isMainThread, workerData } = require('worker_threads');

function runWorker() {
  let i = 0;
  for (let index = 0; index < 1000000000; index++) {
    i += index;
  }
  // console.log(i); 
}

function start() {
  if (isMainThread) {
    // 主线程
    for (let i = 0; i < 3; i++) {
      new Worker(__filename, { workerData: {} });
    }
  } else {
    // 子线程
    runWorker(workerData);
  }
}
start()

