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
        },
        {
          subExperince:
            'Data Engineering Pipeline – Architecture, Orchestration, Optimization and Monitoring',
        },
        {
          subExperince: 'Spark Cluster sizing – AWS EMR, Google Cloud Dataproc',
        },
        {
          subExperince:
            'Cloud Storage and Datawarehouse – AWS S3, Athena, ADLS, GCS, BigQuery',
        },
        {
          subExperince:
            'Big Data Technologies: Hadoop, HDFS, Spark, Scala, pySpark',
        },
        {
          subExperince: 'Databricks on Azure & AWS',
        },
        {
          subExperince:
            'Experience in Pre-Sales, CoE, Alliance, Software Development & Management',
        },
        {
          subExperince:
            'Worked for TCS, Wipro and has interfaced with MNCs like Nortel, Motorola and Alcatel-Lucent',
        },
        {
          subExperince: 'Feature design in Network-Switches',
        },
        {
          subExperince:
            'Data-driven Contact Centre solution in Healthcare, Banking and Telcos',
        },
        {
          subExperince:
            'Data Migration, ETL to Salesforce.com application from Siebel CRM',
        },
        {
          subExperince: 'IT Transformation Programs',
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
        },
        {
          subExperince:
            'Data Engineering Pipeline – Architecture, Orchestration, Optimization and Monitoring',
        },
        {
          subExperince:
            'Architecting Distributed Computing solutions using Apache Spark, Hive, BigQuery and AWS Athena, RedShift, DBT, AWS Lambda, Cloud Watch, Cloud Build, Apache Airflow.',
        },
        {
          subExperince: 'Databricks on Azure & AWS',
        },
        {
          subExperince:
            'Experience in Pre-Sales, CoE, Alliance, Software Development & Management',
        },
        {
          subExperince:
            'Worked for TCS, Wipro and has interfaced with MNCs like Nortel, Motorola and Alcatel-Lucent',
        },
        {
          subExperince: 'Worked in Oracle India for 16+ years',
        },
        {
          subExperince:
            'Oracle E-Business Release Management expert - 11i to R12.2 ',
        },
        {
          subExperince:
            'Developed SaaS solutions for Manufacturing industry on Oracle Cloud',
        },
      ],
    },
  ];
  ngOnInit(): void {}
}
