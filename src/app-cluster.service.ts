import * as cluster from 'cluster';

(<any>cluster).schedulingPolicy = (<any>cluster).SCHED_RR;

export class AppClusterService {
  static clusterize(callback: Function): void {
    if ((<any>cluster).isMaster) {
      console.log(`Master server started on ${process.pid}`);

      (<any>cluster).fork();
      (<any>cluster).fork();

      (<any>cluster).on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died. Restarting`);
        (<any>cluster).fork();
      });
    } else {
      console.log(`Cluster server started on ${process.pid}`);
      callback();
    }
  }
}
