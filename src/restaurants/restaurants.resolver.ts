import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class RestaurantResolver {
  @Query((returns) => Boolean) //이부분은 Graphql을 위한 타입스크립트
  isPizzaGood(): Boolean {
    //이부분은 타입스크립트를 위한 타입
    return true;
  }
}
