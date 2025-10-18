/**
 * TypeScript definitions for filter functions
 */

export interface BlogPostItem {
  title: string;
  link: string;
  author?: string;
  pubDate?: string;
  [key: string]: any;
}

/**
 * Filter function to ignore Stack Overflow comments
 * @param item - Blog post item to filter
 * @returns true if item should be included, false if it should be filtered out
 */
export function ignoreStackOverflowComments(item: BlogPostItem): boolean;

/**
 * Filter function to ignore Stack Exchange comments
 * @param item - Blog post item to filter
 * @returns true if item should be included, false if it should be filtered out
 */
export function ignoreStackExchangeComments(item: BlogPostItem): boolean;

/**
 * Filter function to ignore Medium comments
 * @param item - Blog post item to filter
 * @returns true if item should be included, false if it should be filtered out
 */
export function ignoreMediumComments(item: BlogPostItem): boolean;

/**
 * Filter function based on publication date
 * @param item - Blog post item to filter
 * @returns true if item should be included, false if it should be filtered out
 */
export function dateFilter(item: BlogPostItem): boolean;