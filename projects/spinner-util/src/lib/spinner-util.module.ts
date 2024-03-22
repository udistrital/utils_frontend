import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SpinnerUtilComponent } from "./spinner-util.component";
import { SpinnerUtilService } from "./spinner-util.service";

@NgModule({
    declarations: [SpinnerUtilComponent],
    imports: [CommonModule],
    exports: [SpinnerUtilComponent],
    providers: [SpinnerUtilService]
})
export class SpinnerUtilModule {}