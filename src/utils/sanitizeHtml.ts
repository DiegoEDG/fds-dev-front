import DOMPurify from 'dompurify';

/**
 * Sanitizes an HTML string to prevent XSS attacks while preserving safe elements and attributes.
 * Uses default DOMPurify configuration which allows a safe set of HTML.
 *
 * @param html The raw HTML string.
 * @returns The sanitized HTML string perfectly safe for `dangerouslySetInnerHTML`.
 */
export const sanitizeHtml = (html: string): string => {
  if (!html) return '';
  return DOMPurify.sanitize(html);
};
