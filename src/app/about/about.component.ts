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
      name: 'Kiran Hiremath - Director and Co-Founder of Sankir Technologies Pvt Ltd. ',
      experince: '28 years of Experience (Last 4.5 years as Start-up Founder) in Business Leadership, Program Management, Solution Engineering, Pre-Sales, Software Development and Management',
      subExperinces: [
        {
          subExperince:
            'Experience Summary',
          natedEx: [
            {
              name: 'Program Management – Multi-million-dollar P&L Management, Delivery Head, Strategy Planning and IT Partner for Client’s New Platform, Tools, and Technology Roadmap.',
            },
           
            {
              name: 'Pre-Sales Head and Solution Architect – Bid Management, Alliance Management, Go-To-Market Strategy, Due Diligence, Consultancy, Technical Solution, CoE, PoC, and Asset Development. ',
            },
           
            {
              name: 'Software Development, Solution Architecture, Framework & Assets, Consultancy in the following areas: ',

              sublistEx:[
                {
                  list: 'Data Engineering - Design & Development of Data Pipeline on Cloud - ELT/ETL, Spark, DWH ',
                },
                {
                  list: 'Cloud Services on AWS, GCP and Azure',
                },
                {
                  list: 'Distributed Computing Framework – Apache Spark - Scala/PySpark ',
                },   {
                  list: 'Data Engineering Toolset – Apache Airflow (MWAA), Snowflake, Azure Databricks',
                },   {
                  list: 'IT Transformation Programs - CRM Application Upgrades and Data Migration',
                },
               
              ]
            },
            {
              name: 'Engineering Graduate in Electronics & communication from University of Mysore',
            },
              
          ],
        },
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
            {
              name: 'Programming Languages - Java, PySpark, Scala, PL/SQL, Spark SQL, C ',
            },
            {
              name: 'Source code management - Git, github and Maven Build',
            },
         
          ],
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
              name: 'Data Migration, ETL to Salesforce.com application from Siebel CRM',
            },
            {
              name: 'IT Transformation Programs',
            },
            {
              name: 'Voice Technology - Genesys Contact Center, IVR/CTI Framework, IP PBX Voice Solution',
            },{
              name: 'Telecom Technology - SS7 CallP/Billing, Wireless, Unified Messaging system, V5.2 protocol',
            },
          ],
        },
      ],
    },
  ];
  sanjayselfInfo = [
    {
      name: 'Sanjay Bheemasenarao is Director and Co-Founder of Sankir Technologies Pvt Ltd.',
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
              name: 'Big Data Technologies: Hadoop, HDFS, Spark, Scala, Python, Hivea',
            },
            {
              name: 'Architecting Distributed Computing solutions using Apache Spark, Hive, BigQuery, AWS Athena, RedShift, DBT, AWS Lambda, Cloud Watch, Cloud Build and Apache Airflow.',
            },
          ],
        },
       
        {
          subExperince: 'Worked in Oracle India for 16+ years',
          natedEx: [
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
