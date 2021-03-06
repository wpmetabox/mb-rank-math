=== MB Rank Math ===
Contributors: metabox, rilwis, elightup, anhdoanmis
Donate link: https://metabox.io/pricing/
Tags: meta-box, custom-fields, custom-field, meta, meta-boxes, rank-math, seo, seo-analysis, content-analysis
Requires at least: 5.0
Tested up to: 5.8
Stable tag: 1.0.1
License: GPL-2.0

Add content of Meta Box custom fields to Rank Math Content Analysis.

== Description ==

**MB Rank Math** is a free extension for [Meta Box](https://metabox.io) plugin which allows developers to add content of custom fields to Rank Math Content Analysis to have better SEO score.

There are situations when we create custom fields to store real content for the posts. They are actually displayed in the frontend. Search engines such as Google or Bing see them and analyze them. But by default, Rank Math plugin takes only post content to analyze for SEO score and gives us feedback based on the post content. The plugin doesn't analyze the all the content that appears to the search engine, which is a big missing part and that sometimes confuses us in SEO term.

So, the plugin *MB Rank Math* fixes that problem by allowing us to add custom fields to the content analyzed by Rank Math plugin. This way, the Rank Math plugin and search engine will see the same content and we will have a correct advice for SEO content as well as correct SEO score.

### Plugin Links

- [Homepage](https://metabox.io/plugins/mb-rank-math/)
- [Github repo](https://github.com/rilwis/mb-yoast-seo)
- [View other extensions](https://metabox.io/plugins/)

== Installation ==

You need to install [**Meta Box**](https://metabox.io) first

1. Go to **Plugins | Add New** and search for **Meta Box**
1. Click **Install** to install the plugin

Install **MB Rank Math extension**

1. Go to **Plugins | Add New** and search for **MB Rank Math**
1. Click **Install** to install the plugin

To make a field analyzable, add the following parameter to fields:

`'rank_math_analysis' => true,`

== Frequently Asked Questions ==

== Screenshots ==

== Changelog ==

= 1.0.1 - 2021-08-20 =

- Fix script not enqueued for post types with no cloneable fields.

= 1.0.0 - 2021-08-20 =

- First release

== Upgrade Notice ==
