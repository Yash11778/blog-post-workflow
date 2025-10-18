/**
 * Configuration validation and default values for blog-post-workflow
 * This file helps ensure proper configuration and provides documentation
 */

// Default configuration values
const DEFAULT_CONFIG = {
	max_post_count: '5',
	disable_sort: 'false',
	sort_order: 'desc',
	reverse_order: 'false',
	template: 'default',
	date_format: 'UTC:ddd mmm dd yyyy h:MM TT',
	user_agent: 'rss-parser',
	accept_header: 'application/rss+xml',
	title_max_length: '',
	description_max_length: '',
	item_exec: '',
	committer_username: 'blog-post-bot',
	committer_email: 'blog-post-bot@example.com',
	dummy_commit_message: 'dummy commit to keep the repository active, see https://git.io/Jtm4V',
	retry_count: '0',
	retry_wait_time: '1',
	filter_comments: 'medium,stackoverflow/Comment by $author/,stackexchange/Comment by $author/',
	filter_dates: '',
	feed_names: '',
	categories_template: 'default',
	disable_html_encoding: 'false',
	remove_duplicates: 'false',
	output_only: 'false',
	enable_keepalive: 'true',
	tag_post_pre_newline: 'false',
	disable_item_validation: 'false',
	rand_seed: '',
	skip_commit: 'false',
	skip_items_without_title: 'false',
};

// Input validation rules
const VALIDATION_RULES = {
	max_post_count: {
		type: 'number',
		min: 1,
		max: 100,
		description: 'Must be a number between 1 and 100',
	},
	disable_sort: {
		type: 'boolean',
		description: 'Must be "true" or "false"',
	},
	sort_order: {
		type: 'enum',
		values: ['asc', 'desc'],
		description: 'Must be either "asc" or "desc"',
	},
	reverse_order: {
		type: 'boolean',
		description: 'Must be "true" or "false"',
	},
	retry_count: {
		type: 'number',
		min: 0,
		max: 10,
		description: 'Must be a number between 0 and 10',
	},
	retry_wait_time: {
		type: 'number',
		min: 1,
		max: 60,
		description: 'Must be a number between 1 and 60 seconds',
	},
	title_max_length: {
		type: 'number',
		min: 10,
		max: 500,
		optional: true,
		description: 'If specified, must be between 10 and 500 characters',
	},
	description_max_length: {
		type: 'number',
		min: 10,
		max: 2000,
		optional: true,
		description: 'If specified, must be between 10 and 2000 characters',
	},
};

// Required inputs
const REQUIRED_INPUTS = ['feed_list'];

// Template variables documentation
const TEMPLATE_VARIABLES = {
	$title: 'The title of the blog post',
	$url: 'The URL link to the blog post',
	$description: 'The description/content of the blog post',
	$date: 'The publication date (formatted according to date_format)',
	$counter: 'Sequential number of the post (1, 2, 3, ...)',
	$feedName: 'Name of the RSS feed source (if feed_names is specified)',
	$categories: 'Categories associated with the post',
	$newline: 'Inserts a line break',
	'$randomEmoji(🚀,⭐,💫)': 'Random emoji from the provided list',
	'$emojiKey(🚀,⭐,💫)': 'Emoji selected by post index',
};

// Common RSS feed sources
const POPULAR_RSS_SOURCES = {
	'dev.to': 'https://dev.to/feed/{username}',
	medium: 'https://medium.com/feed/@{username}',
	hashnode: 'https://{username}.hashnode.dev/rss.xml',
	wordpress: 'https://{site}.wordpress.com/feed/',
	ghost: 'https://{site}/rss/',
	jekyll: 'https://{site}/feed.xml',
	hugo: 'https://{site}/index.xml',
};

module.exports = {
	DEFAULT_CONFIG,
	VALIDATION_RULES,
	REQUIRED_INPUTS,
	TEMPLATE_VARIABLES,
	POPULAR_RSS_SOURCES,
};
