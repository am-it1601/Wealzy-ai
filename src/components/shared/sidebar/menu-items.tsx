import { LayoutDashboard, WalletMinimal } from 'lucide-react';

const MENU_GROUP = [
  {
    name: "Home",
    menu: [
      {
        label: "Dashboard",
        icon: LayoutDashboard,
        submenu: [],
        url: "/",
      },
    ],
  },
  {
    name: "Assets",
    menu: [
      {
        label: "Accounts",
        icon: WalletMinimal,
        submenu: [],
        url: "/assets/accounts",
      },
    ],
  },
  {
    name: "Libilities",
    menu: [
      {
        label: "Loans",
        icon: WalletMinimal,
        submenu: [],
        url: "/liabilities/loans",
      },
      {
        label: "Credit Cards",
        icon: WalletMinimal,
        submenu: [],
        url: "/liabilities/credit-cards",
      },
    ],
  },
  {
    name: "Planning",
    menu: [
      {
        label: "Budgets",
        icon: WalletMinimal,
        submenu: [],
        url: "/planning/budgets",
      },
      {
        label: "Goals",
        icon: WalletMinimal,
        submenu: [],
        url: "/planning/goals",
      },
    ],
  },
  {
    name: "Reports",
  },
];

export default MENU_GROUP;
