<?php

namespace NewfoldLabs\WP\Module\Onboarding\Data\Themes;

final class Colors
{


	/**
	 * This contains the different color variations for the theme.
	 *
	 * @var string
	 */
	protected static $theme_colors = array(
		'yith-wonder' => array(
			'calm'         => array(
				'header-background' 		=> '#1A4733',
				'header-foreground' 		=> '#FFF',
				'header-titles'				=> '#FFF',
				'secondary-background' 		=> '#1A4733',
				'secondary-foreground' 		=> '#FFF',
				'tertiary'   				=> '#C7DBFF',
				'secondary'  				=> '#E6EBEE',
				'primary'    				=> '#1A4733',
				'background' 				=> '#FFFFFF',
			),
			'cool'         => array(
				'header-background' 		=> '#C7DBFF',
				'header-foreground' 		=> '#21447B',
				'header-titles'				=> '#21447B',
				'secondary-background' 		=> '#C7DBFF',
				'secondary-foreground' 		=> '#21447B',
				'tertiary'   				=> '#C7DBFF',
				'secondary'  				=> '#EDF7FE',
				'primary'    				=> '#21447B',
				'background' 				=> '#FFFFFF',
			),
			'warm'         => array(
				'header-background' 		=> '#FDE5D0',
				'header-foreground' 		=> '#7A3921',
				'header-titles'				=> '#7A3921',
				'secondary-background' 		=> '#FDE5D0',
				'secondary-foreground' 		=> '#7A3921',
				'tertiary'   				=> '#FFEDED',
				'secondary'  				=> '#FEF7E8',
				'primary'    				=> '#7A3921',
				'background' 				=> '#FFFFFF',
			),
			'radiant'      => array(
				'header-background' 		=> '#63156A',
				'header-foreground' 		=> '#E3F7FF',
				'header-titles'				=> '#E3F7FF',
				'secondary-background' 		=> '#862C8E',
				'secondary-foreground' 		=> '#E3F7FF',
				'tertiary'   				=> '#C7F0FF',
				'secondary'  				=> '#FEF4FB',
				'primary'    				=> '#63156A',
				'background' 				=> '#FFFFFF',
			),
			'bold'         => array(
				'header-background' 		=> '#FFD7F1',
				'header-foreground' 		=> '#09857C',
				'header-titles'				=> '#09857C',
				'secondary-background' 		=> '#FFE4F5',
				'secondary-foreground' 		=> '#09857C',
				'tertiary'   				=> '#F2A3D6',
				'secondary'  				=> '#FFFBF5',
				'primary'    				=> '#09857C',
				'background' 				=> '#FFFFFF',
			),
			'retro'        => array(
				'header-background' 		=> '#096385',
				'header-foreground' 		=> '#F2E6A2',
				'header-titles'				=> '#F2E6A2',
				'secondary-background' 		=> '#096385',
				'secondary-foreground' 		=> '#F2E6A2',
				'tertiary'   				=> '#F2E6A2',
				'secondary'  				=> '#F5FFFF',
				'primary'    				=> '#096385',
				'background' 				=> '#FFFFFF',
			),
			'professional' => array(
				'header-background' 		=> '#6D8258',
				'header-foreground' 		=> '#F5FAFF',
				'header-titles'				=> '#D2E0F5',
				'secondary-background' 		=> '#6D8258',
				'secondary-foreground' 		=> '#F5FAFF',
				'tertiary'   				=> '#A2C1F2',
				'secondary'  				=> '#F5FAFF',
				'primary'    				=> '#669933',
				'background' 				=> '#FFFFFF',
			),
			'crisp' => array(
				'header-background' 		=> '#ccc',
				'header-foreground' 		=> '#333',
				'header-titles' 			=> '#234',
				'secondary-background' 		=> '#ccc',
				'secondary-foreground' 		=> '#333',
				'tertiary' 					=> '#777',
				'secondary' 				=> '#efefef',
				'primary' 					=> '#234',
				'background' 				=> '#FFFFFF',
			),
			'polished' => array(
				'header-background' 		=> '#313131',
				'header-foreground' 		=> '#fff',
				'header-titles' 			=> '#6B69EA',
				'secondary-background' 		=> '#444',
				'secondary-foreground' 		=> '#ddd',
				'tertiary' 					=> '#313131',
				'secondary' 				=> '#fff',
				'primary' 					=> '#5100FA',
				'background' 				=> '#FFFFFF',
			),
			'nightowl' => array(
				'header-background' 		=> '#06080A',
				'header-foreground' 		=> '#fff',
				'header-titles' 			=> '#FAAA14',
				'secondary-background' 		=> '#0A0C0E',
				'secondary-foreground' 		=> '#fff',
				'tertiary' 					=> '#FFDFA3',
				'secondary'					=> '#fff',
				'primary'	 				=> '#B97900',
				'background' 				=> '#FFFFFF',
			),
			'subtle' => array(
				'header-background' 		=> '#C7ADBB',
				'header-foreground' 		=> '#5A3C4B',
				'header-titles' 			=> '#5A3C4B',
				'secondary-background' 		=> '#C7ADBB',
				'secondary-foreground' 		=> '#5A3C4B',
				'tertiary' 					=> '#D4C9CF',
				'secondary' 				=> '#fff',
				'primary' 					=> '#5A3C4B',
				'background' 				=> '#FFFFFF',
			),
		),
	);

	/**
	 * Retrieves the active theme color variations.
	 *
	 * @return array|\WP_Error
	 */
	public static function get_colors_from_theme()
	{
		$active_theme  = (\wp_get_theme())->get('TextDomain');
		$pattern_slugs = self::$theme_colors[$active_theme];

		if (!isset($pattern_slugs)) {
			return new \WP_Error(
				'Theme Colors not found',
				'No WordPress Colors are available for this theme.',
				array('status' => 404)
			);
		}

		return $pattern_slugs;
	}
}
