import {Module} from '@nestjs/common';
import {BlogModule} from './blog/BlogModule';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        BlogModule,
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'blog-app-nestjs',
            entities: [__dirname + '/**/*Entity{.ts,.js}'],
            synchronize: true,
        }),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
