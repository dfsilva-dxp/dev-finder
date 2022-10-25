import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    grid: {
      container: string;
    };
    border: {
      radius: string;
      outlineOffiset: string;
    };

    font: {
      family: string;
      weight: {
        regular: number;
        medium: number;
        bold: number;
      };
      sizes: {
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
      };
    };

    spacings: {
      xxsmall: string;
      xsmall: string;
      small: string;
      medium: string;
      large: string;
    };
    transition: {
      default: string;
      fast: string;
    };

    colors: {
      primary: string;
      secondary: string;
      grayDark: string;
      text: string;
      light: string;
      panel: string;
    };
  }
}
