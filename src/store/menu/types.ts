export const SET_MENU = 'SET_MENU'

export interface SideBar{
  breadcrumbName: string;
  children?: Array<SideBar>,
  [PropName: string]: any;
}

export interface SetMenu{
  type: typeof SET_MENU;
  menu: SideBar[]
}