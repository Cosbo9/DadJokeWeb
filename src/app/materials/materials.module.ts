import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';

let MatComponents = [
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule
]

@NgModule ({
    imports: [
        CommonModule,
        ...MatComponents
    ],
    exports: [
        MatComponents
    ]
})

export class Materials {}