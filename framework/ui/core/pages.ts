import {
  BasePage,
  HomePage,
  ApplicationMenuView,
  CXonePage,
  LoginPage,
  ManageUser,  
} from "@pages";

export const pages: { [id: string]: BasePage } = {
  LoginPage: new LoginPage(),
  HomePage: new HomePage(),
  ApplicationMenu: new ApplicationMenuView(),
  CXonePage: new CXonePage(),
  ManageUser: new ManageUser(),
};
