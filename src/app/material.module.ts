import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatTabsModule } from "@angular/material/tabs";
import { MatStepperModule } from "@angular/material/stepper";
import { MatCardModule } from "@angular/material/card";
import { MatRadioModule } from "@angular/material/radio";

const mods = [
  MatButtonModule,
  MatTabsModule,
  MatStepperModule,
  MatCardModule,
  MatRadioModule,
];
@NgModule({
  imports: [mods],
  exports: [mods],
})
export class MaterialModule {}
