import { Component, OnInit } from '@angular/core';
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap';

import { CategoriesService, ICategory } from '../../services/api/categories.service';

@Component({
  selector: 'header',
  templateUrl: './header.tpl.html',
  providers: [CategoriesService],
  directives: [DROPDOWN_DIRECTIVES]
})
export class HeaderComponent implements OnInit {
  private title: string;
  private categories: ICategory[];
  private selectedCategory: ICategory;
  private dropdownText: string;

  constructor(private categoriesService: CategoriesService) {
    this.categoriesService = categoriesService;
  }

  public ngOnInit(): void {
    this.title = 'ImEngine prototype';
    this.dropdownText = 'Select category';

    this.categoriesService.getCategories()
      .then(result => this.categories = result);
  }

  private onCategorySelect(category: ICategory){
      this.selectedCategory = category;
      this.dropdownText = category.name;
  }
}
