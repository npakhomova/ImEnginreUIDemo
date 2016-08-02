import { Injectable } from '@angular/core';
import { CATEGORIES } from './fake-data/categories.const';

export interface ICategory {
    name: string;
}

@Injectable()
export class CategoriesService {
    public getCategories(): Promise<ICategory[]> {
        return Promise.resolve(CATEGORIES);
    }
}