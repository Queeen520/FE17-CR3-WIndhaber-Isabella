import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbousUsComponent } from './abous-us/abous-us.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component'

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "menu", component: MenuComponent
  },
  {
    path: "menus/:id", component: DetailsComponent
  },
  {
    path: "about-us", component: AbousUsComponent
  },
  {
    path: "cart", component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
