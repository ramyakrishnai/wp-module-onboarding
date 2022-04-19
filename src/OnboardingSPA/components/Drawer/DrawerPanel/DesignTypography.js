import { __ } from '@wordpress/i18n';

const DesignTypography = () => {
	return (
		<div style={{ padding: '0 16px' }}>
			<h2>{__('Pick Fonts & Text Sizes', 'wp-module-onboarding')}</h2>
			<p>
				{__(
					'If user has opted for custom design, panel will show type treatments to affect preview pane.',
					'wp-module-onboarding'
				)}
			</p>
		</div>
	);
};

export default DesignTypography;
