import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { LoginComponent } from 'app/login/login.component';
import { SignupComponent } from 'app/signup/signup.component';
import { AdminComponent } from 'app/admin/admin.component';
import { TipocervejaComponent } from 'app/tipocerveja/tipocerveja.component';
import { TipoCervejaDetalhesComponent } from 'app/tipocerveja/tipo-cerveja-detalhes/tipo-cerveja-detalhes.component';
import { VolumeDetalhesComponent } from 'app/volume/volume-detalhes/volume-detalhes.component';
import { VolumeComponent } from 'app/volume/volume.component';
import { CervejaComponent } from 'app/cerveja/cerveja.component';
import { CervejaDetalhesComponent } from 'app/cerveja/cerveja-detalhes/cerveja-detalhes.component';
import { FabricanteComponent } from 'app/fabricante/fabricante.component';
import { FabricanteDetalhesComponent } from 'app/fabricante/fabricante-detalhes/fabricante-detalhes.component';
import { CervejaSalvarComponent } from 'app/cerveja/cerveja-salvar/cerveja-salvar.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { ForgotPasswordComponent } from 'app/forgot-password/forgot-password.component';
import { BrowserModule }  from '@angular/platform-browser';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { CarrinhoComponent } from 'app/carrinho/carrinho.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatCarouselModule.forRoot(),
    MatButtonModule,
    MatFileUploadModule,
    MatStepperModule,
    MatCheckboxModule

  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    NotificationsComponent,
    UpgradeComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    TipocervejaComponent,
    TipoCervejaDetalhesComponent,
    VolumeComponent,
    VolumeDetalhesComponent,
    CervejaComponent,
    CervejaDetalhesComponent,
    FabricanteComponent,
    FabricanteDetalhesComponent,
    CervejaSalvarComponent,
    ForgotPasswordComponent,
    CarrinhoComponent
  ]
})

export class AdminLayoutModule {}
