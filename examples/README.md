# Blog Post Workflow Examples

This directory contains example configurations for the blog-post-workflow action to help you get started quickly.

## Basic Examples

### 1. Simple RSS Feed Display

```yaml
name: Latest blog post workflow
on:
  schedule:
    - cron: '0 * * * *' # Runs every hour
  workflow_dispatch:

permissions:
  contents: write

jobs:
  update-readme-with-blog:
    name: Update this repo's README with latest blog posts
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Pull in blog posts
        uses: gautamkrishnar/blog-post-workflow@v1
        with:
          feed_list: "https://dev.to/feed/yourusername"
```

### 2. Multiple RSS Feeds

```yaml
- name: Pull in blog posts from multiple sources
  uses: gautamkrishnar/blog-post-workflow@v1
  with:
    feed_list: "https://dev.to/feed/yourusername,https://medium.com/feed/@yourusername,https://yourblog.com/rss"
    max_post_count: 6
```

### 3. Custom Template

```yaml
- name: Pull in blog posts with custom template
  uses: gautamkrishnar/blog-post-workflow@v1
  with:
    feed_list: "https://dev.to/feed/yourusername"
    template: "- 📝 [$title]($url) - $date"
    date_format: "mmm dd, yyyy"
```

## Advanced Examples

### 4. Custom Template with Categories and Feed Names

```yaml
- name: Advanced blog post display
  uses: gautamkrishnar/blog-post-workflow@v1
  with:
    feed_list: "https://dev.to/feed/yourusername,https://medium.com/feed/@yourusername"
    feed_names: "Dev.to,Medium"
    template: "- 🚀 **[$title]($url)** from *$feedName* $newline  📂 $categories $newline  📅 $date $newline"
    max_post_count: 8
    date_format: "mmmm dd, yyyy"
```

### 5. With Error Handling and Retries

```yaml
- name: Robust blog post workflow
  uses: gautamkrishnar/blog-post-workflow@v1
  with:
    feed_list: "https://dev.to/feed/yourusername"
    retry_count: 3
    retry_wait_time: 5
    disable_item_validation: false
    skip_items_without_title: true
```

### 6. Filter and Sorting Options

```yaml
- name: Filtered and sorted blog posts
  uses: gautamkrishnar/blog-post-workflow@v1
  with:
    feed_list: "https://dev.to/feed/yourusername"
    filter_comments: "medium,stackoverflow"
    filter_dates: "daysAgo:30"  # Only posts from last 30 days
    sort_order: "asc"  # Oldest first
    remove_duplicates: true
```

### 7. Custom Tags and JavaScript Manipulation

```yaml
- name: Advanced content manipulation
  uses: gautamkrishnar/blog-post-workflow@v1
  with:
    feed_list: "https://dev.to/feed/yourusername"
    custom_tags: "author/👤 /,reading_time/⏱️ /min"
    item_exec: |
      post.title = post.title.replace(/[\[\]]/g, '');
      if (post.description.length > 100) {
        post.description = post.description.substring(0, 100) + '...';
      }
    template: "- [$title]($url) $author $reading_time $newline  $description $newline"
```

### 8. Multiple README Files

```yaml
- name: Update multiple README files
  uses: gautamkrishnar/blog-post-workflow@v1
  with:
    feed_list: "https://dev.to/feed/yourusername"
    readme_path: "./README.md,./profile/README.md,./docs/README.md"
```

### 9. Output Only Mode (for further processing)

```yaml
- name: Generate blog post data
  uses: gautamkrishnar/blog-post-workflow@v1
  id: blog-posts
  with:
    feed_list: "https://dev.to/feed/yourusername"
    output_only: true

- name: Process blog post data
  run: |
    echo "Blog posts: ${{ steps.blog-posts.outputs.results }}"
    # Further processing...
```

### 10. Random Emoji and Custom Formatting

```yaml
- name: Fun blog post display with emojis
  uses: gautamkrishnar/blog-post-workflow@v1
  with:
    feed_list: "https://dev.to/feed/yourusername"
    template: "$randomEmoji(🚀,⭐,💫,🎯,🔥) [$title]($url) $newline"
    rand_seed: "my-unique-seed"  # For consistent randomness
```

## Platform-Specific Examples

### Dev.to
```yaml
feed_list: "https://dev.to/feed/yourusername"
```

### Medium
```yaml
feed_list: "https://medium.com/feed/@yourusername"
```

### Hashnode
```yaml
feed_list: "https://yourusername.hashnode.dev/rss.xml"
```

### WordPress
```yaml
feed_list: "https://yoursite.wordpress.com/feed/"
```

### Ghost
```yaml
feed_list: "https://yoursite.com/rss/"
```

### Jekyll/GitHub Pages
```yaml
feed_list: "https://yourusername.github.io/feed.xml"
```

### Hugo
```yaml
feed_list: "https://yoursite.com/index.xml"
```

## Troubleshooting Examples

### Handle Unreliable Feeds
```yaml
- name: Handle unreliable RSS feeds
  uses: gautamkrishnar/blog-post-workflow@v1
  with:
    feed_list: "https://unreliable-site.com/feed"
    retry_count: 5
    retry_wait_time: 10
    disable_item_validation: true
    max_post_count: 3
```

### Debug Mode
```yaml
- name: Debug blog post workflow
  uses: gautamkrishnar/blog-post-workflow@v1
  with:
    feed_list: "https://dev.to/feed/yourusername"
  env:
    ACTIONS_STEP_DEBUG: true
    ACTIONS_RUNNER_DEBUG: true
```

## Complete Workflow Examples

### Personal Profile README
```yaml
name: Update Blog Posts
on:
  schedule:
    - cron: '0 8 * * *'  # 8 AM UTC daily
  workflow_dispatch:

permissions:
  contents: write

jobs:
  update-readme:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Update README with latest blog posts
        uses: gautamkrishnar/blog-post-workflow@v1
        with:
          feed_list: "https://dev.to/feed/yourusername,https://medium.com/feed/@yourusername"
          feed_names: "Dev.to,Medium"
          max_post_count: 5
          template: "- 📝 [$title]($url) *($feedName)* - $date"
          date_format: "mmm dd, yyyy"
          committer_username: "blog-update-bot"
          committer_email: "blog-update-bot@users.noreply.github.com"
```

### Organization README
```yaml
name: Update Team Blog Posts
on:
  schedule:
    - cron: '0 */6 * * *'  # Every 6 hours
  workflow_dispatch:

permissions:
  contents: write

jobs:
  update-blog-posts:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Fetch team blog posts
        uses: gautamkrishnar/blog-post-workflow@v1
        with:
          feed_list: "https://company-blog.com/rss,https://dev.to/feed/company"
          max_post_count: 10
          template: "### [$title]($url) $newline $description $newline *Published: $date* $newline ---"
          title_max_length: 60
          description_max_length: 150
```

Remember to:
1. Replace `yourusername` with your actual username
2. Update RSS feed URLs to match your platforms
3. Adjust scheduling and configuration as needed
4. Test your configuration before deploying