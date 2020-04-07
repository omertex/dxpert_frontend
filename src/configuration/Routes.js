import { lazy } from 'react';

export const chooseWay = "/",
  createWallet = "/create-wallet",
  employerBalance = "/balance",
  employerProfile = "/employer/profile",
  employerRequests = "/employer/requests",
  employerSearch = "/employer/search",
  applicantProfile = "/applicant/profile",
  applicantRequests = "/applicant/requests",
  unlockWallet = "/unlock-wallet",
  walletCreationTutorial = "/wallet-creation-tutorial";

const ChooseWay = lazy(() => import("../pages/ChooseWay"));
const CreateWallet = lazy(() => import("../pages/CreateWallet"));
const EmployerBalance = lazy(() => import("../pages/EmployerBalance"));
const EmployerProfile = lazy(() => import("../pages/EmployerProfile"));
const EmployerRequests = lazy(() => import("../pages/EmployerRequests"));
const EmployerSearch = lazy(() => import("../pages/SearchFilter"));
const ApplicantProfile = lazy(() => import("../pages/ApplicantProfile"));
const ApplicantRequests = lazy(() => import("../pages/ApplicantRequests"));
const UnlockWallet = lazy(() => import("../pages/UnlockWallet"));
const WalletCreationTutorial = lazy(() => import("../pages/WalletCreationTutorial"));

export const ROUTES = [
  { path: chooseWay,
    component: ChooseWay,
    needAuth: false
  },
  { path: createWallet,
    component: CreateWallet,
    needAuth: false
  },
  { path: employerBalance,
    component: EmployerBalance,
    needAuth: true
  },
  { path: employerProfile,
    component: EmployerProfile,
    needAuth: true
  },
  { path: employerRequests,
    component: EmployerRequests,
    needAuth: true
  },
  { path: employerSearch,
    component: EmployerSearch,
    needAuth: true
  },
  { path: applicantProfile,
    component: ApplicantProfile,
    needAuth: true
  },
  { path: applicantRequests,
    component: ApplicantRequests,
    needAuth: true
  },
  { path: unlockWallet,
    component: UnlockWallet,
    needAuth: false
  },
  { path: walletCreationTutorial,
    component: WalletCreationTutorial,
    needAuth: false
  },
]