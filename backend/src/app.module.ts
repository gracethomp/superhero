import { Module } from '@nestjs/common';
import { SuperheroModule } from './superhero/superhero.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { sequelizeDevelopmentConfig } from './config';
import { SuperpowersModule } from './superpowers/superpowers.module';
// import { MediaModule } from './superhero/media/media.module';
import { StorageModule } from './storage/storage.module';
import { StorageService } from './storage/storage.service';

@Module({
  imports: [
    SequelizeModule.forRoot(sequelizeDevelopmentConfig),
    // MediaModule,
    SuperheroModule,
    SuperpowersModule,
    StorageModule,
  ],
  providers: [StorageService],
})
export class AppModule {}
