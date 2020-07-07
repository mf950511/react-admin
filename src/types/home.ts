
export interface SideBar{
  breadcrumbName: string;
  children?: Array<SideBar>,
  [propName: string]: any;
}

export interface IconObject { // 处理icon的类型
  [PropName: string]: any
}

export interface RouteInfo{
  [PropName: string]: string
}