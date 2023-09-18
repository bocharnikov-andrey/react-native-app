import {
  AccountIcon,
  CurrencyIcon,
  FingerprintIcon,
  ProfileInfoIcon,
  WalletIcon,
} from "../../../../constants/icons";
import { COLORS } from "../../../../constants/colors";

export type StepType = {
  id: string;
  title: string;
};

export const STEPS: StepType[] = [
  { id: "1", title: "Create your account" },
  { id: "2", title: "Complete your profile" },
  { id: "3", title: "Verify your identity" },
  { id: "4", title: "Make your first deposit" },
  { id: "5", title: "Make your first investment" },
];

export const getStepIcon = (stepNumber: number, isActiveSteep: boolean) => {
  switch (stepNumber) {
    case 1:
      return <AccountIcon color={isActiveSteep ? COLORS.white : COLORS.grey} />;
    case 2:
      return <ProfileInfoIcon color={isActiveSteep ? COLORS.white : COLORS.grey} />;
    case 3:
      return <FingerprintIcon color={isActiveSteep ? COLORS.white : COLORS.grey} />;
    case 4:
      return <WalletIcon color={isActiveSteep ? COLORS.white : COLORS.grey} />;
    case 5:
      return <CurrencyIcon color={isActiveSteep ? COLORS.white : COLORS.grey} />;
    default:
      return null;
  }
};
