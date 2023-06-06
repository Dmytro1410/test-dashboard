import { LiveAnnouncer } from "@angular/cdk/a11y";
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from "@angular/material/paginator";
import { MatSort, Sort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { GraphTimeService } from "../../graph-time.service";

@Component({
    selector: 'app-table-graph',
    templateUrl: './table-graph.component.html',
    styleUrls: ['./table-graph.component.css']
})
export class TableGraphComponent implements OnInit, AfterViewInit {
    displayedColumns: string[] = ['days', 'working', 'notWorking'];
    dataSource = new MatTableDataSource<DataTable>([{days: '1/11', working: 1, notWorking: 2}]);

    @ViewChild(MatPaginator) paginator: MatPaginator | undefined
    @ViewChild(MatSort) sort: MatSort | undefined;

    constructor(private graphTimeService: GraphTimeService, private _liveAnnouncer: LiveAnnouncer) {
    }

    ngOnInit() {
        this.graphTimeService.graphData.subscribe(res => {
            this.dataSource = new MatTableDataSource<DataTable>(res.dates.map((val: string, index: number) => {
                return ({
                    days: new Date(val),
                    working: res.working[index],
                    notWorking: res.notWorking[index]
                })
            }))
            this.dataSource.paginator = this.paginator!
        })
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator!
        this.dataSource.sort = this.sort!;
    }

    announceSortChange(sortState: Sort) {
        if (sortState.direction) {
            this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
        } else {
            this._liveAnnouncer.announce('Sorting cleared');
        }
    }
}

export interface DataTable {
    days: string
    working: number
    notWorking: number
}
