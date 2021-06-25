import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { LoginComponent } from 'app/login/login.component';
import { PbxComponent } from 'app/pbx/pbx.component';
import { SignupComponent } from 'app/signup/signup.component';
import { AdminComponent } from 'app/admin/admin.component';
import { TipocervejaComponent } from 'app/tipocerveja/tipocerveja.component';
import { TipoCervejaDetalhesComponent } from 'app/tipocerveja/tipo-cerveja-detalhes/tipo-cerveja-detalhes.component';
import { VolumeComponent } from 'app/volume/volume.component';
import { VolumeDetalhesComponent } from 'app/volume/volume-detalhes/volume-detalhes.component';
import { CervejaComponent } from 'app/cerveja/cerveja.component';
import { CervejaDetalhesComponent } from 'app/cerveja/cerveja-detalhes/cerveja-detalhes.component';
import { FabricanteComponent } from 'app/fabricante/fabricante.component';
import { FabricanteDetalhesComponent } from 'app/fabricante/fabricante-detalhes/fabricante-detalhes.component';
import { CervejaSalvarComponent } from 'app/cerveja/cerveja-salvar/cerveja-salvar.component';
import { UserProfileComponent } from 'app/user-profile/user-profile.component';
import { ForgotPasswordComponent } from 'app/forgot-password/forgot-password.component';
import { CarrinhoComponent } from 'app/carrinho/carrinho.component';
export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'teste',        component: UserProfileComponent },
   // { path: 'inicio', component: HomeComponent},
    { path: 'login', component: LoginComponent },
    { path: 'primebeerbox', component: PbxComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'minhaconta', component: SignupComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'admin/tipocerveja', component: TipocervejaComponent },
    { path: 'admin/tipocerveja/novo', component: TipoCervejaDetalhesComponent },
    { path: 'admin/tipocerveja/:id', component: TipoCervejaDetalhesComponent },
    { path: 'admin/volume', component: VolumeComponent },
    { path: 'admin/volume/novo', component: VolumeDetalhesComponent },
    { path: 'admin/volume/:id', component: VolumeDetalhesComponent },
    { path: 'cervejas', component: CervejaComponent },
    { path: 'cervejas/:id', component: CervejaDetalhesComponent },
    { path: 'admin/cervejas/', component: CervejaSalvarComponent },
    { path: 'admin/cervejas/:id', component: CervejaSalvarComponent },
    { path: 'admin/fabricante', component: FabricanteComponent },
    { path: 'admin/fabricante/novo', component: FabricanteDetalhesComponent },
    { path: 'admin/fabricante/:id', component: FabricanteDetalhesComponent },
    { path: 'forgot', component: ForgotPasswordComponent },
    { path: 'carrinho', component: CarrinhoComponent },
];
