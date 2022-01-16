import { NestFactory } from '@nestjs/core';
import { AppClusterService } from './app-cluster.service';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(5001);
}

AppClusterService.clusterize(bootstrap);
