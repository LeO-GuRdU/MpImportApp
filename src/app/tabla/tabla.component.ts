import { Component, OnInit } from '@angular/core';
import data from '../../downloads/Reporte.json';
import * as XLSX from 'xlsx';
import { ReporteAnual } from './interfaces/reporte-dto';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
})
export class TablaComponent implements OnInit {
  /*name of the excel-file which will be downloaded. */
  fileName = 'ResumenMP.xlsx';
  reporteAnual: ReporteAnual[] = data;
  displayedColumns: string[] = ['date', 'time', 'description', 'raw'];
  dataSource = this.reporteAnual;

  ngOnInit(): void {}

  exportexcel(): void {
    /* table id is passed over here */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }
}
