import CommonLayout from '../../../components/Layouts/Common';
import StepOverview from '../../../components/StepOverview';
import { VIEW_DESIGN_COLORS } from '../../../../constants';
import { store as nfdOnboardingStore } from '../../../store';
import { useDispatch } from '@wordpress/data';
import { useEffect } from '@wordpress/element';

const StepDesignColors = () => {
	const { setDrawerActiveView, setIsDrawerOpened } =
		useDispatch(nfdOnboardingStore);

	useEffect(() => {
		setIsDrawerOpened(true);
		setDrawerActiveView(VIEW_DESIGN_COLORS);
	}, []);
	return (
		<CommonLayout isCentered>
			<StepOverview />
		</CommonLayout>
	);
};

export default StepDesignColors;
