import { BarChartOutlined, GroupOutlined, InfoCircleOutlined, ProjectOutlined, SettingOutlined, UserOutlined, UsergroupAddOutlined, WindowsOutlined } from "@ant-design/icons";

export const URLst='http://172.16.32.113:3000/api';
export const DASHBOARD_SIDEBAR_LINKS = [
    {
      key: "Dashboard",
      label: "Dashboard",
      path: "dashboard",
      icon: <WindowsOutlined />,
    },
    {
      key: "Users",
      label: "Users",
      path: "users",
      icon: <UsergroupAddOutlined />,
    },
    {
      key: "project",
      label: "Projects",
      path: "projects",
      icon: <ProjectOutlined />,
    },
    // {
    //   key: "user-management",
    //   label: "user_management",
    //   path: "user-managment",
    //   icon: <WindowsOutlined />,
    // },
    {
      key: "Tasks",
      label: "Tasks",
      path: "tasks",
      icon: <BarChartOutlined/>,
    },
    {
      key: "Setting",
      label: "Setting",
      path: "setting",
      icon: <SettingOutlined />,
    },
    {
      key: "about",
      label: "About",
      path : "about",
      icon :<InfoCircleOutlined />
    }
  ];

  export const CLIENT_SIDEBAR_LINKS=[
    {
      key: "Dashboard",
      label: "Dashboard",
      path: "client/dashboard",
      icon: <WindowsOutlined />,
    },
    {
      key: "project",
      label: "Projects",
      path: "client/projects",
      icon: <ProjectOutlined />,
    },
    {
      key: "Tasks",
      label: "Task",
      path: "client/tasks",
      icon: <BarChartOutlined/>,
    },
    {
      key: "board",
      label: "Board",
      path: "client/board",
      icon: <UsergroupAddOutlined />,
    },
    {
      key: "Setting",
      label: "Setting",
      path: "client/setting",
      icon: <SettingOutlined />,
    },
    {
      key: "about",
      label: "About",
      path : "client/about",
      icon :<InfoCircleOutlined />
    }
  ];
  