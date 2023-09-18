export const dimensions = (
  property: string,
  top: number,
  right = top,
  bottom = top,
  left = right
) => {
  let styles: Record<string, number> = {};

  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;

  return styles;
};

export const margin = (top: number, right?: number, bottom?: number, left?: number) => {
  return dimensions("margin", top, right, bottom, left);
};

export const padding = (top: number, right?: number, bottom?: number, left?: number) => {
  return dimensions("padding", top, right, bottom, left);
};

export const border = (width: number, color: string, style?: string) => {
  let styles: Record<string, string | number> = {};

  styles.borderWidth = width;
  styles.borderColor = color;
  styles.borderStyle = style || "solid";

  return styles;
};

export const center = (isColumn?: boolean) => {
  let styles: Record<string, string> = {};

  styles.flexDirection = isColumn ? "column" : "row";
  styles.alignItems = "center";
  styles.justifyContent = "center";

  return styles;
};
