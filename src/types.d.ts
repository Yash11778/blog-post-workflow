/**
 * TypeScript definitions for Blog Post Workflow
 */

export interface BlogPost {
  /** The title of the blog post */
  title: string;
  /** The URL link to the blog post */
  url: string;
  /** The description/content of the blog post */
  description: string;
  /** The publication date of the blog post */
  date?: Date;
  /** Categories associated with the blog post */
  categories: string[];
  /** Name of the RSS feed source */
  feedName?: string;
  /** Custom tags as key-value pairs */
  [customTag: string]: any;
}

export interface WorkflowConfig {
  /** GitHub access token with Repo scope */
  gh_token?: string;
  /** Comma separated paths of the readme files you want to update */
  readme_path?: string;
  /** Maximum number of posts you want to show on your readme, all feeds combined */
  max_post_count?: string;
  /** Comma separated list of RSS feed urls */
  feed_list: string;
  /** Disables the sorting of list based on publish date */
  disable_sort?: string;
  /** Sort order: 'asc' (ascending) or 'desc' (descending) */
  sort_order?: 'asc' | 'desc';
  /** Reverse the order of posts */
  reverse_order?: string;
  /** Template for formatting posts */
  template?: string;
  /** Custom date format */
  date_format?: string;
  /** User agent for RSS requests */
  user_agent?: string;
  /** Accept header for RSS requests */
  accept_header?: string;
  /** Custom tags in format tag_name/start_tag/end_tag/ */
  custom_tags?: string;
  /** Maximum length for post titles */
  title_max_length?: string;
  /** Maximum length for post descriptions */
  description_max_length?: string;
  /** JavaScript code to manipulate post data */
  item_exec?: string;
  /** Committer username for git commits */
  committer_username?: string;
  /** Committer email for git commits */
  committer_email?: string;
  /** Message for dummy commits */
  dummy_commit_message?: string;
  /** Number of retry attempts for failed requests */
  retry_count?: string;
  /** Wait time between retries in seconds */
  retry_wait_time?: string;
  /** Comment filters to exclude (e.g., 'medium,stackoverflow') */
  filter_comments?: string;
  /** Date filters to apply */
  filter_dates?: string;
  /** Feed names corresponding to feed_list */
  feed_names?: string;
  /** Template for category formatting */
  categories_template?: string;
  /** Disable HTML encoding in output */
  disable_html_encoding?: string;
  /** Remove duplicate posts */
  remove_duplicates?: string;
  /** Only output results without committing */
  output_only?: string;
  /** Enable keepalive commits */
  enable_keepalive?: string;
  /** Add newline before post tags */
  tag_post_pre_newline?: string;
  /** Disable item validation */
  disable_item_validation?: string;
  /** Random seed for emoji selection */
  rand_seed?: string;
  /** Skip committing changes */
  skip_commit?: string;
  /** Skip items without titles */
  skip_items_without_title?: string;
}

export interface WorkflowResult {
  /** Array of processed blog posts */
  posts: BlogPost[];
  /** Whether any errors occurred during processing */
  hasErrors: boolean;
  /** Error messages if any */
  errors?: string[];
}

export interface WorkflowModule {
  /** Main workflow function */
  runWorkflow(): Promise<void>;
}

declare const workflow: WorkflowModule;
export default workflow;