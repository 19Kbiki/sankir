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
  ];

  clientTables = [
    {
      name: 'Retail data transformation using Spark, S3, AWS EMR, Athena',
      products: [
        {
          productsName:
            'End-to-End DE Automation using AWS CDK Toolkit EC2 creation, Airflow installation,',
        },
        {
          productsName: 'EMR creation and Spark job submission',
        },
        {
          productsName:
            'Data Profiling – Column profile detail & Data quality metrics',
        },
      ],

      video:
        'https://www.youtube.com/embed/XHOmBV4js_E?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.sankir.com&amp;widgetid=1',
      image: 'Airflow-POC-Readme',
      url: 'https://www.sankir.com/wp-content/uploads/2022/09/readme_poc_Airflow.pdf',
    },

    {
      name: 'Orchestration using Airflow for Ed-Fi operational store used in K-12 Education',
      products: [
        {
          productsName: 'Dynamic DAGs',
        },
        {
          productsName: 'Schedule and monitoring of task-groups and tasks',
        },
      ],

      video:
        'https://www.youtube.com/embed/XHOmBV4js_E?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.sankir.com&amp;widgetid=1',
      image: 'Databricks-POC-Readme',

      url: 'https://www.sankir.com/wp-content/uploads/2022/09/databricks-abfs-poc-README.pdf',
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
      video:
        'https://www.youtube.com/embed/XHOmBV4js_E?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.sankir.com&amp;widgetid=1',
      image: 'Snowflake-POC-Readme',
      url: 'https://www.sankir.com/wp-content/uploads/2022/09/snowflake-poc-README.pdf',
    },
    {
      name: 'Loading retail data from AWS S3 file storage into Snowflake tables',
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

      video:
        'https://www.youtube.com/embed/XHOmBV4js_E?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.sankir.com&amp;widgetid=1',
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
