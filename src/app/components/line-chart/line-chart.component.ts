import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Observable } from "rxjs";
import { GraphTimeService } from "../../graph-time.service";
import { CHART_TIME_FRAMES } from "../../utils/time-frames";

// import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
    selector: 'app-line-chart',
    templateUrl: './line-chart.component.html',
    styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
    @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
    public barChartOptions: ChartConfiguration['options'] = {
        responsive: true,
        maintainAspectRatio: true,
        layout: {
            autoPadding: true
        },
        scales: {
            x: {},
            y: {
                min: 0,
                max: 24
            }
        },
        plugins: {
            legend: {
                display: true,
            },
        }
    };
    public barChartType: ChartType = 'bar';
    public barChartData: ChartData<'bar'> = {
        labels: [],
        datasets: [
            {data: []},
            {data: []}
        ]
    };

    constructor(private graphTimeService: GraphTimeService) {
    }

    ngOnInit() {
        this.graphTimeService.graphData.subscribe(res => {
            this.barChartData = {
                ...this.barChartData,
                labels: res.dates,
                datasets: [
                    {data: res.notWorking, label: 'Not Working'},
                    {data: res.working, label: 'Working'}
                ]
            }
        })
    }
}
