<?php
/**
 * Plugin Name: MB Rank Math
 * Plugin URI:  https://metabox.io/plugins/mb-rank-math/
 * Description: Add content of Meta Box custom fields to Rank Math content analysis.
 * Author:      MetaBox.io
 * Version:     1.0.1
 * Author URI:  https://metabox.io
 */

if ( ! function_exists( 'mb_rank_math_load' ) ) {
	add_action( 'admin_init', 'mb_rank_math_load' );

	function mb_rank_math_load(){
		if ( ! class_exists( 'RankMath' ) ) {
			return;
		}
		require_once __DIR__ . '/class-mb-rank-math.php';
		$mb_rank_math = new MB_Rank_Math;
		add_action( 'rwmb_enqueue_scripts', [ $mb_rank_math, 'enqueue' ] );
	}
}