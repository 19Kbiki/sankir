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
      subExperinces: [
        {
          subExperince:
            'Expert in Data Engineering, Cloud Services and Distributed Computing using Apache Spark',
          natedEx: [
            {
              name: 'Data Engineering Pipeline – Architecture, Orchestration, Optimization and Monitoring',
            },
            {
              name: 'Spark Cluster sizing – AWS EMR, Google Cloud Dataproc',
            },
            {
              name: 'Cloud Storage and Datawarehouse – AWS S3, Athena, ADLS, GCS, BigQuery',
            },
            {
              name: 'Big Data Technologies: Hadoop, HDFS, Spark, Scala, pySpark',
            },
            {
              name: 'Databricks on Azure & AWS',
            },
          ],
        },

        {
          subExperince:
            'Experience in Pre-Sales, CoE, Alliance, Software Development & Management',
        },
        {
          subExperince:
            'Worked for TCS, Wipro and has interfaced with MNCs like Nortel, Motorola and Alcatel-Lucent',
          natedEx: [
            {
              name: 'Feature design in Network-Switches',
            },
            {
              name: 'Data-driven Contact Centre solution in Healthcare, Banking and Telcos',
            },
            {
              name: 'Cloud Storage and Datawarehouse – AWS S3, Athena, ADLS, GCS, BigQuery',
            },
            {
              name: 'Data Migration, ETL to Salesforce.com application from Siebel CRM',
            },
            {
              name: 'IT Transformation Programs',
            },
          ],
        },
      ],
    },
  ];
  sanjayselfInfo = [
    {
      name: 'Sanjay Bheemasenrao, Director',
      experince: '27+ years of experience in building products and services',
      subExperinces: [
        {
          subExperince:
            'Demonstrated leadership in building focused teams to achieve excellence',
        },
        {
          subExperince:
            'Functioned in various capacities and has held many important positions in India and US. Has worked for reputed companies like Oracle, Tata Elxsi, GE and Prentice Hall. ',
        },
        {
          subExperince:
            'Expert in Data Engineering covering all the Data Management aspects',
          natedEx: [
            {
              name: 'Data Engineering Pipeline – Architecture, Orchestration, Optimization and Monitoring',
            },
            {
              name: 'Architecting Distributed Computing solutions using Apache Spark, Hive, BigQuery and AWS Athena',
            },
            {
              name: 'Databricks on Azure & AWS',
            },
          ],
        },
        {
          subExperince:
            'Experience in Pre-Sales, CoE, Alliance, Software Development & Management',
        },
        {
          subExperince:
            'Worked for TCS, Wipro and has interfaced with MNCs like Nortel, Motorola and Alcatel-Lucent',
          natedEx: [
            {
              name: 'Worked in Oracle India for 16+ years',
            },
            {
              name: 'Oracle E-Business Release Management expert - 11i to R12.2 ',
            },
            {
              name: 'Developed SaaS solutions for Manufacturing industry on Oracle Cloud',
            },
          ],
        },
      ],
    },
  ];
  ngOnInit(): void {}
}
