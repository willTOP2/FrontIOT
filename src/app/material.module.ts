import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

const materialModules = [
    MatCardModule,
    MatInputModule,
    MatIconModule
];

@NgModule({
    imports: [materialModules],
    exports: [materialModules]
})

export class MaterialModule { }