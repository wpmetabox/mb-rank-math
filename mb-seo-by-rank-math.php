<?php
/**
 * Plugin Name: Meta Box for SEO By Rank Math
 * Plugin URI:  https://metabox.io/plugins/meta-box-seo-by-rank-math/
 * Description: Add content of custom fields to Yoast SEO Content Analysis.
 * Author:      MetaBox.io
 * Version:     1.0.0
 * Author URI:  https://metabox.io
 */

if ( ! class_exists( 'MB_SEO_BY_RANK_MATH' ) ) {
	require_once __DIR__ . '/class-mb-seo-by-rank-math.php';
	$mb_seo_by_rank_math = new MB_SEO_BY_RANK_MATH;
	add_action( 'rwmb_enqueue_scripts', [ $mb_seo_by_rank_math, 'enqueue' ] );
}