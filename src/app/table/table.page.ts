// table.page.ts
import { Component } from '@angular/core';

interface Solicitud {
  nuae: string;
  fecha: string;
}

@Component({
  selector: 'app-table',
  templateUrl: 'table.page.html',
  styleUrls: ['table.page.scss'],
})
export class TablePage {
  solicitudes: Solicitud[] = [
    { nuae: 'A12345', fecha: '2023-09-16 13:55:09' },
    { nuae: 'A12345', fecha: '2023-09-16 13:55' },
    // Agrega más solicitudes aquí
  ];
}
