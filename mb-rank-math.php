<?php
/**
 * Plugin Name: MB Rank Math
 * Plugin URI:  https://metabox.io/plugins/mb-rank-math/
 * Description: Add content of custom fields to Rank Math Content Analysis.
 * Author:      MetaBox.io
 * Version:     1.0.0
 * Author URI:  https://metabox.io
 */

if ( ! class_exists( 'MB_Rank_Math' ) ) {
	require_once __DIR__ . '/class-mb-rank-math.php';
	$mb_rank_math = new MB_Rank_Math;
	add_action( 'rwmb_enqueue_scripts', [ $mb_rank_math, 'enqueue' ] );
}