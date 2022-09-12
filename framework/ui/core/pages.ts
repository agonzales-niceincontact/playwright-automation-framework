import {
  BasePage,
  HomePage,
  ApplicationMenuView,
  CXonePage,
  LoginPage,
  ManageUser,
  CXSHeader,
  WSPLeftPanel,
  Workspace,
  WelcomePage,  
} from "@pages";

export const pages: { [id: string]: BasePage } = {
  LoginPage: new LoginPage(),
  HomePage: new HomePage(),
  ApplicationMenu: new ApplicationMenuView(),
  CXonePage: new CXonePage(),
  ManageUser: new ManageUser(),
  CXSHeader: new CXSHeader(),
  WSPLeftPanel: new WSPLeftPanel(),
  Workspace: new Workspace(),
  WelcomePage: new WelcomePage(),
};
