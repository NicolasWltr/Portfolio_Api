import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');
  app.enableCors({
    origin: [
      'https://walternicolas.de',
      'https://www.walternicolas.de',
      'http://localhost:3000',
      'http://127.0.0.1:3000'
    ]
  });
  await app.listen(process.env.PORT ?? 3001, '0.0.0.0');
}
bootstrap();
