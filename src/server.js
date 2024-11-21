import cluster from "cluster";
import os from "os";

import app from "./setup/app";
const port = process.env.PORT || 3000;

if (cluster.isPrimary) {
  console.log(`Master process ${process.pid} is running`);
  const numCPUs = os.cpus().length;
  console.log(`Number of CPUs is ${numCPUs}`);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker) => {
    console.log("Worker process died", worker.process.pid);
    cluster.fork();
  });
  
} else {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
