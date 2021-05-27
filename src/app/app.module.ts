import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { InputFieldWrapperModule } from './components/input-field-wrapper/input-field-wrapper.module';
import { ButtonModule } from './components/button/button.module';
import { StringInputModule } from './components/string-input/string-input.module';
import { LabelModule } from './components/label/label.module';
import { RegisterComponent } from './views/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    LabelModule,
    StringInputModule,
    CommonModule,
    InputFieldWrapperModule,
    ReactiveFormsModule,
    ButtonModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
