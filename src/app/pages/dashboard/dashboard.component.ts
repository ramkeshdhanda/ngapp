import { Component } from '@angular/core';
import { TreeModel } from "ng2-tree";

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  tree1: TreeModel = {

    value: '',
    children: [
      {
        value: '<div><a href="">1. Open Order Business Report</a></div>',
      },
      {
        value: '<div><a href="">2. Sales Order Report </a></div>',
      }, {
        value: '<div><a href="">3. Order Shipping Update Report </a></div>',
      }, {
        value: '<div><a href="">4. Order Pending in Fraud Status Report </a></div>',
      }, {
        value: '<div><a href="">5. Order Pending in Shipment Acknowledgment Status Report </a></div>',
      }, {
        value: '<div><a href="">6. Order Pending With Fulfillment Report </a></div>',
      }, {
        value: '<div><a href="">7. GSI Open Order Report </a></div>',
      }, {
        value: '<div><a href="">8. Cancellation Report </a></div>',
      }
    ],
  };
  tree2: TreeModel = {

    value: '',
    children: [
      {
        value: '<div><a href="">1. Recreate Order</a></div>',
      },
      {
        value: '<div><a href="">2. Duplicate Order </a></div>',
      }, {
        value: '<div><a href="">3. Cancel Order </a></div>',
      }, {
        value: '<div><a href="">4. Close Ordert </a></div>',
      }, {
        value: '<div><a href="">5. Acknowledge ATG Orders </a></div>',
      }, {
        value: '<div><a href="">6. Resend Orders </a></div>',
      }, {
        value: '<div><a href="">7. Resend Ship Confirmation </a></div>',
      }
    ],
  };
  tree3: TreeModel = {

    value: '',
    children: [
      {
        value: '<div><a href="">1. NYCO Emails </a></div>',
      }, {
        value: '<div><a href="">2. Catalog Feed Email </a></div>',
      }, {
        value: '<div><a href="">3. GSI Sync Email </a></div>',
      }, {
        value: '<div><a href="">4. Store Sync Email </a></div>',
      }, {
        value: '<div><a href="">5. RTAM Email </a></div>',
      }
    ],
  };
  tree4: TreeModel = {

    value: '',
    children: [
      {
        value: '<div><a href="">1. RMonitoring GSI Sync </a></div>',
      },
      {
        value: '<div><a href="">2. Monitoring Store Sync </a></div>',
      }, {
        value: '<div><a href="">3. RTAM Monitoring </a></div>',
      }, {
        value: '<div><a href="">4. Monitoring Purge Process </a></div>',
      }, {
        value: '<div><a href="">5. Catalog Monitor </a></div>',
      }
    ],
  };
  tree5: TreeModel = {

    value: '',
    children: [
      {
        value: '<div><a href="">1. Clearing Alert Queues </a></div>',
      },
      {
        value: '<div><a href="">2. Close Alerts </a></div>',
      }, {
        value: '<div><a href="">3. Load Test Alerts </a></div>',
      }
    ],
  };
  tree6: TreeModel = {

    value: '',
    children: [
      {
        value: '<div><a href="">1. SFS Store Adds </a></div>',
      },
      {
        value: '<div><a href="">2. SFS Store Delete  </a></div>',
      }, {
        value: '<div><a href="">3. Store Capacity Update </a></div>',
      }, {
        value: '<div><a href="">4. Store Priority Update </a></div>',
      }, {
        value: '<div><a href="">5. Outlet Ask Us Add </a></div>',
      }, {
        value: '<div><a href="">6. Omni Program Adds </a></div>',
      }
    ],
  };
  tree7: TreeModel = {

    value: '',
    children: [
      {
        value: '<div><a href="">1. Agent Server Restart </a></div>',
      },  {
        value: '<div><a href="">2. Agent Restart Issue </a></div>',
      }
    ],
  };
  tree8: TreeModel = {

    value: '',

  };
  tree9: TreeModel = {

    value: "",
  };
}
