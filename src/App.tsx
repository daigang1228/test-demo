import React from "react";
import {
  Layout as HxLayout,
  Menu as HxMenu,
  Collapse,
  Table,
  Button,
  Tabs,
} from "@hydraxtrader/web-component-library";

import './App.css'

function App() {
  const { TabPane } = Tabs;

  // Define columns for the Table
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  // Dummy data for the Table
  const dataSource = [
    {
      key: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      key: "2",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "User",
      status: "Inactive",
    },
    {
      key: "3",
      name: "Michael Johnson",
      email: "michael.johnson@example.com",
      role: "Manager",
      status: "Active",
    },
    {
      key: "4",
      name: "Emily Davis",
      email: "emily.davis@example.com",
      role: "User",
      status: "Pending",
    },
  ];

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <HxLayout
        menu={
          <HxMenu
            headerTitle={
              <div gap={10}>
                <div className="circle-ring" />
                <div style={{ fontWeight: 600, lineHeight: "24px" }}>
                  Operator UI V2
                </div>
              </div>
            }
            isSearch
            mode="inline"
            items={[
              {
                key: "dashboard",
                label: "Dashboard",
              },
              {
                type: "divider",
              },
              {
                key: "accountManagement",
                label: "Account Management",
              },
            ]}
            userName="demo"
          />
        }
        headerTitle={"title"}
        headerButtonGroup={<Button type="primary" label="Add New" />}
      >
        <div style={{ width: "100%", height: "100%", background: "#fff123" }}>
          <Tabs>
            <TabPane tab="Entities" key="entities">
              <div>1</div>
            </TabPane>
            <TabPane tab="Account Groups" key="account-groups">
              <div>2</div>
            </TabPane>
            <TabPane tab="Accounts" key="accounts">
              <div>3</div>
            </TabPane>
          </Tabs>
          <Collapse
            defaultActiveKey={["1"]}
            expandIconPosition="end"
            className="Account"
            items={[
              {
                key: "1",
                label: <span style={{ fontWeight: 600 }}>Account</span>,
                children: (
                  <Table
                    sticky={true}
                    scroll={{ y: "300px" }}
                    columns={columns}
                    dataSource={dataSource}
                  />
                ),
              },
            ]}
          />
          <Collapse
            defaultActiveKey={["1"]}
            expandIconPosition="end"
            className="Account"
            items={[
              {
                key: "1",
                label: <span style={{ fontWeight: 600 }}>Account</span>,
                children: <div>demo div</div>,
              },
            ]}
          />
        </div>
      </HxLayout>
    </div>
  );
}

export default App;
