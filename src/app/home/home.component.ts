import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import * as AOS from 'aos';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public sanitizer: DomSanitizer) {}

  // hero_wrap array
  ArchiName = 'Solution Architecture';
  ulInfo = [
    {
      ulName: 'Cloud Services and Solution',
    },
    {
      ulName: 'Architecting the Data Pipeline on Cloud',
      chilLi: [
        {
          Li: 'Multiple Solution options for a data problem',
        },
      ],
    },
    {
      ulName: 'Data Engineering Tools and Solution on Cloud',
      chilLi: [
        {
          Li: 'Optimizing the Data processing',
        },
        {
          Li: 'Best Practices in data & network security',
        },
      ],
    },
    { ulName: 'API development' },
  ];

  // Architecture arry end

  leveName = 'Leverage SanKir Services in';
  Services = [
    {
      name: 'End-to-End DE Automation using AWS CDK Toolkit and Terraform',
      childLi: [
        {
          nameLi:
            'AWS, Azure, GCP, Databricks, Snowflake, Airflow, Apache Spark',
        },
        {
          nameLi:
            'S3, EMR, Athena, BigQuery, ADLS, Azure Data Factory, Jupyter Notebook',
        },
      ],
    },

    {
      name: 'CI/CD – DevOps',
    },
    {
      name: 'Container Orchestration using Docker and Kubernetes',
    },
    {
      name: 'Streaming using Spark streaming and Kafka',
    },
    {
      name: 'API development using Golang',
    },
    {
      name: 'Spark Cluster - Sizing and Optimization for better performance of workloads',
    },
    {
      name: 'Quickly testing the solution on SanKir"s AWS/Azure/GCP Cloud Infrastructure',
    },
    {
      name: 'End-to-End UI Testing Automation using Cypress',
    },
    {
      name: 'Mobile App Development - Android, iOS',
    },
    {
      name: 'Desktop Apps',
    },
  ];

  clientTables = [
    {
      name: 'Orchestration using Airflow',
      products: [
        {
          productsName: 'Dynamic DAGs',
        },
        {
          productsName: 'Schedule and monitoring of task-groups and tasks',
        },
      ],

      video: 'https://player.vimeo.com/video/747633649?h=dd8c2698a0',
      image: 'Airflow-POC-Readme',
      url: 'https://www.sankir.com/wp-content/uploads/2022/09/readme_poc_Airflow.pdf',
    },

    {
      name: 'Data Engineering using built-in and scalable Azure Databricks platform',
      products: [
        {
          productsName: 'Infra creation ( Spark Cluster ) – compute sizing',
        },
        {
          productsName: 'Data Transformation, Best practice using Key vaults',
        },
        {
          productsName:
            'Data Profiling – Column profile detail & Data quality metrics',
        },
      ],
      video: 'https://player.vimeo.com/video/746319339?h=8732b35cd1',

      image: 'Databricks-POC-Readme',

      url: 'https://www.sankir.com/wp-content/uploads/2022/09/databricks-abfs-poc-README.pdf',
    },
    {
      name: 'Loading retail data from AWS S3 file storage into Snowflake tables',
      products: [
        {
          productsName: 'Loading data from AWS S3 files into Snowflake tables',
        },
        {
          productsName: 'Automate SQL actions like DDL & DML using SnowSQL',
        },
        {
          productsName:
            'Creation of Snowflake Objects like Database, Warehouse and Table',
        },
        {
          productsName:
            'Load data from S3 to Snowflake Tables using COPY INTO command',
        },
      ],

      video: 'https://player.vimeo.com/video/746053538?h=35e05ea07a',
      image: 'Snowflake-POC-Readme',
      url: 'https://www.sankir.com/wp-content/uploads/2022/09/snowflake-poc-README.pdf',
    },

    {
      name: 'Retail data transformation using Spark, S3, AWS EMR, Athena',
      products: [
        {
          productsName: 'End-to-End DE Automation using AWS CDK Toolkit',
        },
        {
          productsName:
            'EC2 creation, Airflow installation, EMR creation and Spark job submission',
        },
        {
          productsName:
            'Data Profiling – Column profile detail & Data quality metrics',
        },
      ],

      video:
        'https://i.vimeocdn.com/video/656988822-4dfdc935f3686c20ed284d388dfa2056c243349affef32fd44f991af5a01b763-d?mw=270&mh=130',
      image: 'AWS-CDK-POC-Readme',
      url: '',
    },
  ];

  // hero_wrap array end

  awsItames = [
    {
      prentList: 'Amazon S3',
    },
    {
      prentList: 'Spark Cluster – AWS EMR',
      childLists: [
        {
          childList: 'Cluster Sizing and Monitoring',
        },
      ],
    },
    {
      prentList: 'Cloud DWH - RedShift/Athena',
    },
    {
      prentList: 'AWS SDK using Boto3',
      childLists: [
        {
          childList: 'Cluster Sizing and Monitoring',
        },
      ],
    },
    {
      prentList: 'Orchestration',
      childLists: [
        {
          childList: 'AWS Cloud Formation',
        },
        {
          childList: 'AWS Lambda',
        },
        {
          childList: 'CloudWatch',
        },
      ],
    },
    {
      prentList: 'IAM and VPC',
    },
    {
      prentList: 'Secrets Manager, KMS',
    },
    {
      prentList: 'RDS - PostgrSQL, MySQL',
    },
    {
      prentList: 'Apache Airflow/MWAA',
    },
    {
      prentList: 'Databricks on AWS',
    },
    {
      prentList: 'Snowflake on AWS',
    },
    {
      prentList: 'CodeBuild, CodeDeploy',
    },
    {
      prentList: 'AWS Cost Management',
    },
  ];
  azureItames = [
    {
      prentList: 'ADLS',
    },
    {
      prentList: 'Spark Cluster - Azure Databricks',
    },
    {
      prentList: ' Cloud DWH',
      childLists: [
        {
          childList: 'Azure Synapse Analytics',
        },
        {
          childList: 'SQL Databases',
        },
      ],
    },

    {
      prentList: 'ABFS(S)/WASB(S) - API to access ADLS',
    },
    {
      prentList: 'IAM',
    },
    {
      prentList: 'Access Keys',
    },
    {
      prentList: 'Shared Access Signature',
    },
    {
      prentList: 'Azure Key Vaults, Keys & Secrets',
    },
    {
      prentList: 'Service Principal',
    },
    {
      prentList: 'Azure Data Factory',
    },
    {
      prentList: 'Snowflake on Azure',
    },
    {
      prentList: 'Azure Active Directory (AAD)',
    },
  ];
  gcpItames = [
    {
      prentList: 'Google Cloud Storage',
    },
    {
      prentList: 'Spark Cluster - Google Dataproc',
    },

    {
      prentList: 'Cloud DWH - Google BigQuery',
    },
    {
      prentList: ' Google Cloud SDK',
      childLists: [
        {
          childList: 'Google Cloud CLI',
        },
        {
          childList: 'cloud shell',
        },
      ],
    },
    {
      prentList: 'IAM',
    },
    {
      prentList: 'Cloud Functions',
    },
    {
      prentList: 'Secret Manager',
    },
    {
      prentList: 'Cloud Run',
    },

    {
      prentList: 'Cloud Build',
    },
    {
      prentList: 'Terraform on GCP',
    },
  ];

  ngOnInit(): void {
    AOS.init();
  }

  safeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    margin: 30,
    pullDrag: false,
    dots: false,
    navSpeed: 700,

    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
        margin: 10,
      },
      740: {
        items: 3,
        margin: 10,
      },
      940: {
        items: 3,
      },
    },
    nav: true,
  };

  mobileCustomOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    margin: 30,
    pullDrag: false,
    dots: false,
    navSpeed: 700,

    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 3,
      },
    },
    nav: true,
  };
}
