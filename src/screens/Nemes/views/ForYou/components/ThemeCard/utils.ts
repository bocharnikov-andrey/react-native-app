import { htmlToText } from "html-to-text";

export const normalizeDescription = (html: string): string => {
  html = html.replace(/<\/p>/g, "\n");
  html = stripeHTML(html);
  html = html.trim();

  return html;
};

const stripeHTML = (html: string): string => {
  return htmlToText(html);
}
