import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
// import { AuthGuard } from '../../core/guards/auth.guard';
import { AccordionModule } from 'primeng/accordion';    
import { GsTemplateComponent } from '../../components/template/template.component';

export const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuard],
    component: GsTemplateComponent,
    data: {
      isPainel: false,
    },
    children: [
      // {
      //   path: '',
      //   component: ToyClientPageHomeComponent,
      // },
      // {
      //   path: 'maquina',
      //   component: ToyClientPageMaquinaComponent,
      //   children: [
      //     {
      //       path: 'maquina',
      //       component: ToyClientPageMaquinaComponent,
      //     },
      //   ],
      // },
      // {
      //   path: 'perfil',
      //   component: ToyPerfilComponent,
      //   children: [
      //     {
      //       path: 'conta',
      //       component: ToyClientPageContaComponent,
      //     },
      //   ],
      // },
    ],
  },
  // {
  //   path: 'login',
  //   component: ToyPageLoginMobileComponent,
  // },
  // {
  //   path: 'cadastro',
  //   component: ToyPageCadastroMobileComponent,
  // },
];

@NgModule({
  declarations: [
    // ToyClientPageHomeComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    DropdownModule,
    AccordionModule,
    FloatLabelModule,
    ButtonModule,
    PasswordModule,
  ],
  exports: [
    // ToyClientPageHomeComponent,
  ],
})
export class DashBoardModule {}
