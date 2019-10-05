// import { NgModule } from '@angular/core';
// import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { HomePage } from './home.page';

// const routes: Routes = [
 
//    { 
//     path: 'home',
//    component:HomePage,
//    children:[
//        {
//         path: 'products',
//         children:[
//             {
//            path:'',
//            loadChildren: () => import('../products/products.module').then(m => m.ProductsPageModule)
//             //    loadChildren: '../products/products.module#ProductsPageModule' 
//             }
//         ]
      
//       }
//   ]
//   },
//   { path: '', 
//     redirectTo: 'home',
//    pathMatch: 'full'
//  },

// ];

// @NgModule({
//     imports: [RouterModule.forChild(routes)],
//     exports: [RouterModule]
//   })

// export class HomeRoutingModule { }



import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'products',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../products/products.module').then(m => m.ProductsPageModule)
          },
          { path: ':product-details', loadChildren:  () =>
           import('../product-details/product-details.module').then (m => m.ProductDetailsPageModule) 
           
           },
        //   {
        //       path:':productId',
        //        loadChildren:()=> 
        //        import ('../product/product.module').then(m=>m.ProductPageModule)
        //     //  loadChildren: './product/product.module#ProductPageModule' 
        //   }
        ]
      },
      {
        path: '',
        redirectTo: '/home/products',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/products',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
