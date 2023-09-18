import { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { COLORS } from "./colors";

type Icon = {
  color?: string;
};

export const AddUserIcon: FC<Icon> = ({ color = COLORS.white }) => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M10.8333 6.66668C10.8333 4.82501 9.34167 3.33334 7.5 3.33334C5.65834 3.33334 4.16667 4.82501 4.16667 6.66668C4.16667 8.50834 5.65834 10 7.5 10C9.34167 10 10.8333 8.50834 10.8333 6.66668ZM9.16667 6.66668C9.16667 7.58334 8.41667 8.33334 7.5 8.33334C6.58334 8.33334 5.83334 7.58334 5.83334 6.66668C5.83334 5.75001 6.58334 5.00001 7.5 5.00001C8.41667 5.00001 9.16667 5.75001 9.16667 6.66668ZM0.833336 15V16.6667H14.1667V15C14.1667 12.7833 9.725 11.6667 7.5 11.6667C5.275 11.6667 0.833336 12.7833 0.833336 15ZM2.5 15C2.66667 14.4083 5.25 13.3333 7.5 13.3333C9.74167 13.3333 12.3167 14.4 12.5 15H2.5ZM16.6667 12.5V10H19.1667V8.33334H16.6667V5.83334H15V8.33334H12.5V10H15V12.5H16.6667Z"
        fill={color}
      />
    </Svg>
  );
};

export const AccountIcon: FC<Icon> = ({ color = COLORS.white }) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 6C13.1 6 14 6.9 14 8C14 9.1 13.1 10 12 10C10.9 10 10 9.1 10 8C10 6.9 10.9 6 12 6ZM12 16C14.7 16 17.8 17.29 18 18H6C6.23 17.28 9.31 16 12 16ZM12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
        fill={color}
      />
    </Svg>
  );
};

export const ProfileInfoIcon: FC<Icon> = ({ color = COLORS.white }) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M16 12.5C13.24 12.5 11 14.74 11 17.5C11 20.26 13.24 22.5 16 22.5C18.76 22.5 21 20.26 21 17.5C21 14.74 18.76 12.5 16 12.5ZM17.65 19.85L15.5 17.7V14.5H16.5V17.29L18.35 19.14L17.65 19.85ZM17 3.5H13.82C13.4 2.34 12.3 1.5 11 1.5C9.7 1.5 8.6 2.34 8.18 3.5H5C3.9 3.5 3 4.4 3 5.5V20.5C3 21.6 3.9 22.5 5 22.5H11.11C10.52 21.93 10.04 21.25 9.69 20.5H5V5.5H7V8.5H15V5.5H17V10.58C17.71 10.68 18.38 10.89 19 11.18V5.5C19 4.4 18.1 3.5 17 3.5ZM11 5.5C10.45 5.5 10 5.05 10 4.5C10 3.95 10.45 3.5 11 3.5C11.55 3.5 12 3.95 12 4.5C12 5.05 11.55 5.5 11 5.5Z"
        fill={color}
      />
    </Svg>
  );
};

export const FingerprintIcon: FC<Icon> = ({ color = COLORS.white }) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M17.815 4.47C17.735 4.47 17.655 4.45 17.585 4.41C15.665 3.42 14.005 3 12.015 3C10.035 3 8.155 3.47 6.445 4.41C6.205 4.54 5.905 4.45 5.765 4.21C5.635 3.97 5.725 3.66 5.965 3.53C7.825 2.52 9.865 2 12.015 2C14.145 2 16.005 2.47 18.045 3.52C18.295 3.65 18.385 3.95 18.255 4.19C18.165 4.37 17.995 4.47 17.815 4.47ZM3.505 9.72C3.405 9.72 3.305 9.69 3.215 9.63C2.985 9.47 2.935 9.16 3.095 8.93C4.085 7.53 5.345 6.43 6.845 5.66C9.985 4.04 14.005 4.03 17.155 5.65C18.655 6.42 19.915 7.51 20.905 8.9C21.065 9.12 21.015 9.44 20.785 9.6C20.555 9.76 20.245 9.71 20.085 9.48C19.185 8.22 18.045 7.23 16.695 6.54C13.825 5.07 10.155 5.07 7.295 6.55C5.935 7.25 4.795 8.25 3.895 9.51C3.815 9.65 3.665 9.72 3.505 9.72ZM9.755 21.79C9.625 21.79 9.495 21.74 9.405 21.64C8.535 20.77 8.065 20.21 7.395 19C6.705 17.77 6.345 16.27 6.345 14.66C6.345 11.69 8.885 9.27 12.005 9.27C15.125 9.27 17.665 11.69 17.665 14.66C17.665 14.94 17.445 15.16 17.165 15.16C16.885 15.16 16.665 14.94 16.665 14.66C16.665 12.24 14.575 10.27 12.005 10.27C9.435 10.27 7.345 12.24 7.345 14.66C7.345 16.1 7.665 17.43 8.275 18.51C8.915 19.66 9.355 20.15 10.125 20.93C10.315 21.13 10.315 21.44 10.125 21.64C10.015 21.74 9.885 21.79 9.755 21.79ZM16.925 19.94C15.735 19.94 14.685 19.64 13.825 19.05C12.335 18.04 11.445 16.4 11.445 14.66C11.445 14.38 11.665 14.16 11.945 14.16C12.225 14.16 12.445 14.38 12.445 14.66C12.445 16.07 13.165 17.4 14.385 18.22C15.095 18.7 15.925 18.93 16.925 18.93C17.165 18.93 17.565 18.9 17.965 18.83C18.235 18.78 18.495 18.96 18.545 19.24C18.595 19.51 18.415 19.77 18.135 19.82C17.565 19.93 17.065 19.94 16.925 19.94ZM14.915 22C14.875 22 14.825 21.99 14.785 21.98C13.195 21.54 12.155 20.95 11.065 19.88C9.665 18.49 8.895 16.64 8.895 14.66C8.895 13.04 10.275 11.72 11.975 11.72C13.675 11.72 15.055 13.04 15.055 14.66C15.055 15.73 15.985 16.6 17.135 16.6C18.285 16.6 19.215 15.73 19.215 14.66C19.215 10.89 15.965 7.83 11.965 7.83C9.125 7.83 6.525 9.41 5.355 11.86C4.965 12.67 4.765 13.62 4.765 14.66C4.765 15.44 4.835 16.67 5.435 18.27C5.535 18.53 5.405 18.82 5.145 18.91C4.885 19.01 4.595 18.87 4.505 18.62C4.015 17.31 3.775 16.01 3.775 14.66C3.775 13.46 4.005 12.37 4.455 11.42C5.785 8.63 8.735 6.82 11.965 6.82C16.515 6.82 20.215 10.33 20.215 14.65C20.215 16.27 18.835 17.59 17.135 17.59C15.435 17.59 14.055 16.27 14.055 14.65C14.055 13.58 13.125 12.71 11.975 12.71C10.825 12.71 9.895 13.58 9.895 14.65C9.895 16.36 10.555 17.96 11.765 19.16C12.715 20.1 13.625 20.62 15.035 21.01C15.305 21.08 15.455 21.36 15.385 21.62C15.335 21.85 15.125 22 14.915 22Z"
        fill={color}
      />
    </Svg>
  );
};

export const WalletIcon: FC<Icon> = ({ color = COLORS.white }) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M18 4H6C3.79 4 2 5.79 2 8V16C2 18.21 3.79 20 6 20H18C20.21 20 22 18.21 22 16V8C22 5.79 20.21 4 18 4ZM16.14 13.77C15.9 13.97 15.57 14.05 15.26 13.97L4.15 11.25C4.45 10.52 5.16 10 6 10H18C18.67 10 19.26 10.34 19.63 10.84L16.14 13.77ZM6 6H18C19.1 6 20 6.9 20 8V8.55C19.41 8.21 18.73 8 18 8H6C5.27 8 4.59 8.21 4 8.55V8C4 6.9 4.9 6 6 6Z"
        fill={color}
      />
    </Svg>
  );
};

export const CurrencyIcon: FC<Icon> = ({ color = COLORS.white }) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24">
      <Path
        d="M12.89 11.1C11.11 10.51 10.25 10.14 10.25 9.2C10.25 8.18 11.36 7.81 12.06 7.81C13.37 7.81 13.85 8.8 13.96 9.15L15.54 8.48C15.39 8.03 14.72 6.56 13 6.24V5H11V6.26C8.52 6.82 8.51 9.12 8.51 9.22C8.51 11.49 10.76 12.13 11.86 12.53C13.44 13.09 14.14 13.6 14.14 14.56C14.14 15.69 13.09 16.17 12.16 16.17C10.34 16.17 9.82 14.3 9.76 14.08L8.1 14.75C8.73 16.94 10.38 17.53 11 17.71V19H13V17.76C13.4 17.67 15.9 17.17 15.9 14.54C15.9 13.15 15.29 11.93 12.89 11.1ZM3 21H1V15H7V17H4.52C6.13 19.41 8.88 21 12 21C16.97 21 21 16.97 21 12H23C23 18.08 18.08 23 12 23C8.28 23 4.99 21.15 3 18.33V21ZM1 12C1 5.92 5.92 1 12 1C15.72 1 19.01 2.85 21 5.67V3H23V9H17V7H19.48C17.87 4.59 15.12 3 12 3C7.03 3 3 7.03 3 12H1Z"
        fill={color}
      />
    </Svg>
  );
};

export const ClockIcon: FC<Icon> = ({ color = COLORS.white }) => {
  return (
    <Svg width="21" height="21" viewBox="0 0 24 24" fill="none">
      <Path
        d="M15 1.5H9V3.5H15V1.5ZM11 14.5H13V8.5H11V14.5ZM19.03 7.89L20.45 6.47C20.02 5.96 19.55 5.48 19.04 5.06L17.62 6.48C16.07 5.24 14.12 4.5 12 4.5C7.03 4.5 3 8.53 3 13.5C3 18.47 7.02 22.5 12 22.5C16.98 22.5 21 18.47 21 13.5C21 11.38 20.26 9.43 19.03 7.89ZM12 20.5C8.13 20.5 5 17.37 5 13.5C5 9.63 8.13 6.5 12 6.5C15.87 6.5 19 9.63 19 13.5C19 17.37 15.87 20.5 12 20.5Z"
        fill={color}
      />
    </Svg>
  );
};

export const RightArrowIcon: FC<Icon> = ({ color = COLORS.white }) => {
  return (
    <Svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <Path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill={color} />
    </Svg>
  );
};

export const StarIcon: FC<Icon> = ({ color = COLORS.white }) => {
  return (
    <Svg width="20" height="20" viewBox="0 0 16 16" fill="none">
      <Path
        d="M7.99992 11.8467L12.1199 14.3333L11.0266 9.64666L14.6666 6.49332L9.87325 6.08666L7.99992 1.66666L6.12659 6.08666L1.33325 6.49332L4.97325 9.64666L3.87992 14.3333L7.99992 11.8467Z"
        fill={color}
      />
    </Svg>
  );
};

export const ShieldIcon: FC<Icon> = ({ color = COLORS.white }) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.6644 2.55316C12.9896 2.02686 12.0106 2.02687 11.337 2.5547C9.7819 3.7733 7.885 4.57831 5.81638 4.80361C5.10853 4.88071 4.48383 5.36769 4.39103 6.07365C4.298 6.78138 4.25 7.50325 4.25 8.23631C4.25 14.0219 7.23981 19.1106 11.7616 22.0475C12.211 22.3394 12.789 22.3394 13.2384 22.0475C17.7602 19.1106 20.75 14.0219 20.75 8.23631C20.75 7.50325 20.702 6.78138 20.609 6.07365C20.5162 5.36769 19.8915 4.88063 19.1838 4.80167C17.1753 4.57758 15.2546 3.7935 13.6644 2.55316ZM12.5 20.7381C16.5706 18.0579 19.25 13.4584 19.25 8.23631C19.25 7.5887 19.2089 6.95138 19.1292 6.32668C19.1227 6.32299 19.1148 6.31898 19.1053 6.31496C19.0805 6.30443 19.0505 6.2961 19.0175 6.29242C16.7328 6.03751 14.5504 5.14653 12.7418 3.73594C12.6752 3.68395 12.5874 3.65836 12.5 3.65863L12.5 12.1984L12.5 20.7381Z"
        fill={color}
      />
    </Svg>
  );
};

export const TwitterIcon: FC<Icon> = ({ color = COLORS.white }) => {
  return (
    <Svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <Path
        d="M3.04473 3L10.1414 12.4887L3 20.2036H4.60737L10.8598 13.449L15.9114 20.2036H21.3809L13.8848 10.1812L20.5321 3H18.9247L13.1667 9.22065L8.51428 3H3.04473ZM5.40843 4.18386H7.92112L19.0169 19.0197H16.5042L5.40843 4.18386Z"
        fill={color}
      />
    </Svg>
  );
};

export const TikTokIcon: FC<Icon> = ({ color = COLORS.white }) => {
  return (
    <Svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <Path
        d="M20.3334 10.653C18.7283 10.6568 17.1625 10.1562 15.8574 9.22198V15.7378C15.8569 16.9446 15.4881 18.1225 14.8001 19.114C14.1121 20.1055 13.1379 20.8634 12.0076 21.2862C10.8773 21.7091 9.64483 21.7768 8.47502 21.4803C7.30521 21.1838 6.2538 20.5372 5.46137 19.627C4.66895 18.7168 4.17329 17.5864 4.04066 16.3869C3.90804 15.1874 4.14477 13.976 4.71921 12.9147C5.29365 11.8534 6.17841 10.9927 7.25519 10.4478C8.33197 9.90294 9.54944 9.69976 10.7448 9.86547V13.1427C10.1978 12.9707 9.61043 12.9758 9.06654 13.1575C8.52266 13.3392 8.05009 13.6881 7.71633 14.1544C7.38256 14.6207 7.20466 15.1805 7.20804 15.7539C7.21142 16.3273 7.3959 16.885 7.73513 17.3473C8.07437 17.8096 8.55101 18.1529 9.097 18.3282C9.64299 18.5035 10.2304 18.5017 10.7753 18.3232C11.3203 18.1448 11.7949 17.7986 12.1314 17.3343C12.4679 16.87 12.649 16.3112 12.649 15.7378V3H15.8574C15.8551 3.27094 15.8778 3.5415 15.9252 3.80828C16.0367 4.40382 16.2685 4.97036 16.6064 5.47324C16.9444 5.97612 17.3814 6.40477 17.8906 6.73297C18.6152 7.21207 19.4647 7.46742 20.3334 7.46724V10.653Z"
        fill={color}
      />
    </Svg>
  );
};

export const YoutubeIcon: FC<Icon> = ({ color = COLORS.white }) => {
  return (
    <Svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <Path
        d="M20.9262 7.24112C20.7099 6.43277 20.0727 5.79614 19.2636 5.58009C17.7971 5.1875 11.9166 5.1875 11.9166 5.1875C11.9166 5.1875 6.0362 5.1875 4.56966 5.58009C3.7606 5.79617 3.12338 6.43277 2.90711 7.24112C2.51416 8.7063 2.51416 11.7633 2.51416 11.7633C2.51416 11.7633 2.51416 14.8202 2.90711 16.2854C3.12338 17.0938 3.7606 17.7039 4.56966 17.9199C6.0362 18.3125 11.9166 18.3125 11.9166 18.3125C11.9166 18.3125 17.7971 18.3125 19.2636 17.9199C20.0727 17.7039 20.7099 17.0938 20.9262 16.2854C21.3191 14.8202 21.3191 11.7633 21.3191 11.7633C21.3191 11.7633 21.3191 8.7063 20.9262 7.24112ZM9.99339 14.5388V8.98777L14.9083 11.7633L9.99339 14.5388Z"
        fill={color}
      />
    </Svg>
  );
};

export const FacebookIcon: FC<Icon> = ({ color = COLORS.white }) => {
  return (
    <Svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <Path
        d="M16.177 13.5L16.6954 10.1218H13.4539V7.92953C13.4539 7.00531 13.9067 6.10443 15.3585 6.10443H16.8321V3.22823C16.8321 3.22823 15.4948 3 14.2163 3C11.5468 3 9.80188 4.61802 9.80188 7.54708V10.1218H6.83453V13.5H9.80188V21.6667H13.4539V13.5H16.177Z"
        fill={color}
      />
    </Svg>
  );
};

export const InstagramIcon: FC<Icon> = ({ color = COLORS.white }) => {
  return (
    <Svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <Path
        d="M12.3375 6.78354C9.68751 6.78354 7.55001 8.88765 7.55001 11.4962C7.55001 14.1048 9.68751 16.2089 12.3375 16.2089C14.9875 16.2089 17.125 14.1048 17.125 11.4962C17.125 8.88765 14.9875 6.78354 12.3375 6.78354ZM12.3375 14.5601C10.625 14.5601 9.22501 13.1861 9.22501 11.4962C9.22501 9.8064 10.6208 8.43237 12.3375 8.43237C14.0542 8.43237 15.45 9.8064 15.45 11.4962C15.45 13.1861 14.05 14.5601 12.3375 14.5601ZM18.4375 6.59077C18.4375 7.2019 17.9375 7.68999 17.3208 7.68999C16.7 7.68999 16.2042 7.1978 16.2042 6.59077C16.2042 5.98374 16.7042 5.49155 17.3208 5.49155C17.9375 5.49155 18.4375 5.98374 18.4375 6.59077ZM21.6083 7.7064C21.5375 6.23394 21.1958 4.92964 20.1 3.85503C19.0083 2.78042 17.6833 2.44409 16.1875 2.37026C14.6458 2.28413 10.025 2.28413 8.48335 2.37026C6.99168 2.43999 5.66668 2.77632 4.57085 3.85093C3.47501 4.92554 3.13751 6.22983 3.06251 7.70229C2.97501 9.21987 2.97501 13.7685 3.06251 15.2861C3.13335 16.7585 3.47501 18.0628 4.57085 19.1374C5.66668 20.2121 6.98751 20.5484 8.48335 20.6222C10.025 20.7083 14.6458 20.7083 16.1875 20.6222C17.6833 20.5525 19.0083 20.2162 20.1 19.1374C21.1917 18.0628 21.5333 16.7585 21.6083 15.2861C21.6958 13.7685 21.6958 9.22397 21.6083 7.7064ZM19.6167 16.9144C19.2917 17.7183 18.6625 18.3376 17.8417 18.6617C16.6125 19.1416 13.6958 19.0308 12.3375 19.0308C10.9792 19.0308 8.05835 19.1374 6.83335 18.6617C6.01668 18.3417 5.38751 17.7224 5.05835 16.9144C4.57085 15.7044 4.68335 12.8333 4.68335 11.4962C4.68335 10.1591 4.57501 7.28394 5.05835 6.07808C5.38335 5.27417 6.01251 4.65483 6.83335 4.33081C8.06251 3.85093 10.9792 3.96167 12.3375 3.96167C13.6958 3.96167 16.6167 3.85503 17.8417 4.33081C18.6583 4.65073 19.2875 5.27007 19.6167 6.07808C20.1042 7.28804 19.9917 10.1591 19.9917 11.4962C19.9917 12.8333 20.1042 15.7085 19.6167 16.9144Z"
        fill={color}
      />
    </Svg>
  );
};

export const SearchIcon: FC<Icon> = ({ color = COLORS.white }) => {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <Path
        d="M11.8162 10.6913H11.2237L11.0137 10.4888C11.7487 9.63378 12.1912 8.52378 12.1912 7.31628C12.1912 4.62378 10.0087 2.44128 7.31622 2.44128C4.62372 2.44128 2.44122 4.62378 2.44122 7.31628C2.44122 10.0088 4.62372 12.1913 7.31622 12.1913C8.52372 12.1913 9.63372 11.7488 10.4887 11.0138L10.6912 11.2238V11.8163L14.4412 15.5588L15.5587 14.4413L11.8162 10.6913ZM7.31622 10.6913C5.44872 10.6913 3.94122 9.18378 3.94122 7.31628C3.94122 5.44878 5.44872 3.94128 7.31622 3.94128C9.18372 3.94128 10.6912 5.44878 10.6912 7.31628C10.6912 9.18378 9.18372 10.6913 7.31622 10.6913Z"
        fill="white"
        fillOpacity={color}
      />
    </Svg>
  );
};
