import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';

@Injectable()
export class RestaurantService {
    constructor(
        @InjectRepository(Restaurant)
        private readonly restaurants: Repository<Restaurant>,
    ) { }


    getAll(): Promise<Restaurant[]> {
        return this.restaurants.find();
    }

    async createRestaurant(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant> {
        const newRestaurant = await this.restaurants.create(createRestaurantDto);
        return this.restaurants.save(newRestaurant);
    }
}