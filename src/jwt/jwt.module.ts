import { DynamicModule, Module } from '@nestjs/common';

@Module({})
export class JwtModule {
  static forRoot(): DynamicModule {
    return {
      module: JwtModule,
    };
  }
}
