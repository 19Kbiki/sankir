import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  aboutsList = [
    {
      parentList: 'Accelerating Data Engineering Solution on Cloud ',

      samiParentList: 'Expertise in Data Engineering on Cloud – AWS/Azure/GCP',

      childLists: [
        {
          childList:
            'Data Engineering pipeline – Architecture, Orchestration, Optimization and Monitoring',
        },
        {
          childList: 'Databricks, Apache Airflow',
        },
        {
          childList: 'Big Data – Apache Spark, Hadoop, HDFS',
        },
        {
          childList: 'DWH – Google BigQuery, Snowflake and DBT',
        },
      ],
    },
    {
      parentList: 'Accelerating Data Engineering Solution on Cloud ',

      samiParentList: 'Expertise in Data Engineering on Cloud – AWS/Azure/GCP',

      childLists: [
        {
          childList:
            'Data Engineering pipeline – Architecture, Orchestration, Optimization and Monitoring',
        },
        {
          childList: 'Databricks, Apache Airflow',
        },
        {
          childList: 'Big Data – Apache Spark, Hadoop, HDFS',
        },
        {
          childList: 'DWH – Google BigQuery, Snowflake and DBT',
        },
      ],
    },
  ];

  selfInfo = [
    {
      name: 'Kiran Hiremath, Director',
      experince: 'IT Professional with 27+ years of Experience',
    },
  ];

  ngOnInit(): void {}
}
