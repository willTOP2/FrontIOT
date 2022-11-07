import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';

const materialModules = [
    MatCardModule,
    MatInputModule,
    MatIconModule,  
    MatSortModule,
    MatProgressSpinnerModule];

@NgModule({
    imports: [materialModules],
    exports: [materialModules]
})

export class MaterialModule { }