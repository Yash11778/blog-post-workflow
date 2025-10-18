/**
 * TypeScript definitions for utility functions
 */

export interface CompoundParams {
  [key: string]: string;
}

/**
 * Updates and parses compound parameters
 * @param paramString - The parameter string to parse
 * @param paramObject - The object to update with parsed parameters
 * @returns The updated parameter object
 */
export function updateAndParseCompoundParams(
  paramString: string,
  paramObject: CompoundParams
): CompoundParams;

/**
 * Commits changes to README files
 * @param githubToken - GitHub authentication token
 * @param readmeFilePaths - Array of README file paths to commit
 * @returns Promise that resolves when commit is complete
 */
export function commitReadme(
  githubToken: string,
  readmeFilePaths: string[]
): Promise<void>;

/**
 * Truncates a string to specified length
 * @param str - The string to truncate
 * @param maxLength - Maximum length allowed
 * @returns Truncated string
 */
export function truncateString(str: string, maxLength: number): string;

/**
 * Builds the README content with blog posts
 * @param readmeContent - Original README content
 * @param postListMarkdown - Markdown content for blog posts
 * @returns Updated README content
 */
export function buildReadme(readmeContent: string, postListMarkdown: string): string;

/**
 * Executes a command with arguments
 * @param command - Command to execute
 * @param args - Command arguments
 * @param options - Execution options
 * @returns Promise with execution result
 */
export function exec(
  command: string,
  args: string[],
  options?: { stdio?: string[] }
): Promise<any>;

/**
 * Gets parameterised template values
 * @param template - Template string
 * @param parameterName - Parameter name to extract
 * @returns Array of parameter values
 */
export function getParameterisedTemplate(
  template: string,
  parameterName: string
): string[] | null;

/**
 * Escapes HTML characters in a string
 * @param text - Text to escape
 * @returns HTML-escaped text
 */
export function escapeHTML(text: string): string;

/**
 * Converts categories to array format
 * @param categories - Categories in various formats
 * @returns Array of category strings
 */
export function categoriesToArray(categories: any): string[];