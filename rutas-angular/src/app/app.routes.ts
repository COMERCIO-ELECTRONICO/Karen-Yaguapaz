import { NgModule} from "@angular/core";
import {Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './inicio/home/home.component';
import { NoEncontradoComponent } from './inicio/no-encontrado/no-encontrado.component';
import { LoginComponent } from './login/login.component';

const rutas: Routes =[
    {
        path: 'inicio',
        component: HomeComponent
    },
    {
        path: ':id/inicio',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'usuario',
        loadChildren: ()=>import('./usuario/usuario.module')
        .then(usuario=>usuario.UsuarioModule)
    },
    {
      path: 'pokemon',
      loadChildren: ()=>import('./pokemon/pokemon.module')
      .then(pokemon=>pokemon.PokemonModule)
       
    },
    {
        path: '',
        redirectTo:'inicio',
        pathMatch:'full' //significa que va a tener toda la ruta
    },
    {
        path: '**',
        component: NoEncontradoComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(rutas)],
    providers: [],
    declarations:[],
    exports: [RouterModule]
})

//con la palabra export podemos llamar el comenponen en cualquier lado
export class AppRoutesComponent{

}