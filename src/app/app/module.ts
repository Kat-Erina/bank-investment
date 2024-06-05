import {NgModule} from '@angular/core'
import { AppComponent } from '../app.component'
import { HeaderComponent } from '../header/header.component'
import { ResultsComponent } from '../results/results.component'
import { UserInputComponent } from '../user-input/user-input.component'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'


@NgModule({
    declarations:[AppComponent, HeaderComponent, ResultsComponent, UserInputComponent], 
    bootstrap:[AppComponent],
    imports:[FormsModule, BrowserModule]
})
export class AppModule{}