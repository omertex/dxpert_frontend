import { lazy } from 'react';

export const chooseWay = "/",
  createWallet = "/create-wallet",
  employerBalance = "/employer/balance",
  employerProfile = "/employer/profile",
  employerRequests = "/employer/requests",
  employerSearch = "/employer/search",
  applicantProfile = "/applicant/profile",
  unlockWallet = "/unlock-wallet",
  walletCreationTutorial = "/wallet-creation-tutorial";

const ChooseWay = lazy(() => import("../pages/ChooseWay"));
const CreateWallet = lazy(() => import("../pages/CreateWallet"));
const EmployerBalance = lazy(() => import("../pages/EmployerBalance"));
const EmployerProfile = lazy(() => import("../pages/EmployerProfile"));
const EmployerRequests = lazy(() => import("../pages/EmployerRequests"));
const EmployerSearch = lazy(() => import("../pages/SearchFilter"));
const ApplicantProfile = lazy(() => import("../pages/Profile"));
const UnlockWallet = lazy(() => import("../pages/UnlockWallet"));
const WalletCreationTutorial = lazy(() => import("../pages/WalletCreationTutorial"));

export const ROUTES = [
  { path: chooseWay,
    component: ChooseWay
  },
  { path: createWallet,
    component: CreateWallet
  },
  { path: employerBalance,
    component: EmployerBalance
  },
  { path: employerProfile,
    component: EmployerProfile
  },
  { path: employerRequests,
    component: EmployerRequests
  },
  { path: employerSearch,
    component: EmployerSearch
  },
  { path: applicantProfile,
    component: ApplicantProfile
  },
  { path: unlockWallet,
    component: UnlockWallet
  },
  { path: walletCreationTutorial,
    component: WalletCreationTutorial
  },
]