import { lazy } from "react";

export const chooseWay = "/",
  createWallet = "/create-wallet",
  balance = "/balance",
  profile = "/profile",
  requests = "/requests",
  search = "/search",
  unlockWallet = "/unlock-wallet",
  walletCreationTutorial = "/wallet-creation-tutorial",
  openedResume = "/opened-resume/:id";

const ChooseWay = lazy(() => import("../pages/ChooseWay"));
const CreateWallet = lazy(() => import("../pages/CreateWallet"));
const Profile = lazy(() => import("../pages/Profile"));
const Balance = lazy(() => import("../pages/Balance"));
const Requests = lazy(() => import("../pages/Requests"));
const Search = lazy(() => import("../pages/SearchFilter"));
const UnlockWallet = lazy(() => import("../pages/UnlockWallet"));
const WalletCreationTutorial = lazy(() =>
  import("../pages/WalletCreationTutorial")
);
const OpenedResume = lazy(() => import("../pages/OpenedResume"));

export const ROUTES = [
  { path: chooseWay, component: ChooseWay, needAuth: false },
  { path: createWallet, component: CreateWallet, needAuth: false },
  { path: balance, component: Balance, needAuth: true },
  { path: profile, component: Profile, needAuth: true },
  { path: requests, component: Requests, needAuth: true },
  { path: search, component: Search, needAuth: true },
  { path: unlockWallet, component: UnlockWallet, needAuth: false },
  {
    path: walletCreationTutorial,
    component: WalletCreationTutorial,
    needAuth: false,
  },
  { path: openedResume, component: OpenedResume, needAuth: true },
];
