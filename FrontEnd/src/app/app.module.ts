import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table'
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutomobilComponent } from './components/primercomponents/automobil/automobil.component';
import { VoziloComponent } from './components/primercomponents/vozilo/vozilo.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { AuthorComponent } from './components/core/author/author.component';
import { HomeComponent } from './components/core/home/home.component';
import { AboutComponent } from './components/core/about/about.component';
import { SmerComponent } from './components/model/smer/smer.component';
import { ProjekatComponent } from './components/model/projekat/projekat.component';
import { StudentComponent } from './components/model/student/student.component';
import { GrupaComponent } from './components/model/grupa/grupa.component';
import { SmerDialogComponent } from './components/smer-dialog/smer-dialog.component';
import { ProjekatDialogComponent } from './components/projekat-dialog/projekat-dialog.component';
import { GrupaDialogComponent } from './components/grupa-dialog/grupa-dialog.component';
import { StudentDialogComponent } from './components/student-dialog/student-dialog.component';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    AppComponent,
    AutomobilComponent,
    VoziloComponent,
    AuthorComponent,
    HomeComponent,
    AboutComponent,
    SmerComponent,
    ProjekatComponent,
    GrupaComponent,
    SmerDialogComponent,
    ProjekatDialogComponent,
    GrupaDialogComponent,
    StudentDialogComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatSortModule,
    MatPaginatorModule,
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [],//niz gde stavljamo klase koje su dostupne bilo gde u modulu
  bootstrap: [AppComponent]
})
export class AppModule { }
