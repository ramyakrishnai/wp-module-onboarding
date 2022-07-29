import apiFetch from "@wordpress/api-fetch";
import { useDispatch, useSelect } from "@wordpress/data";
import { useEffect } from "@wordpress/element";
import { useNavigate } from "react-router-dom";
import { VIEW_NAV_ECOMMERCE_STORE_INFO } from "../../../../../constants";
import CommonLayout from "../../../../components/Layouts/Common";
import NewfoldLargeCard from "../../../../components/NewfoldLargeCard";
import { store as nfdOnboardingStore } from "../../../../store";
import constants from "./constants.json";

const StepAddress = () => {
	const {
		setDrawerActiveView,
		setIsDrawerOpened,
		setIsSidebarOpened,
	} = useDispatch(nfdOnboardingStore);

	useEffect(() => {
		setIsSidebarOpened(false);
		setIsDrawerOpened(true);
		setDrawerActiveView(VIEW_NAV_ECOMMERCE_STORE_INFO);
	}, []);

	const navigate = useNavigate();

	let currentData = useSelect((select) =>
		select(nfdOnboardingStore).getCurrentOnboardingData()
	);

	function handleFieldChange(event) {
		setCurrentOnboardingData({
			storeAddress: {
				...currentData.storeAddress,
				[event.target.name]: event.target.value,
			},
		});
	}

	return (
		<CommonLayout isCentered>
			<NewfoldLargeCard>
				<form
					onSubmit={async (event) => {
						event.preventDefault();
						event.stopPropagation();
						let { country, state, ...wcAddress } = currentData.storeAddress;
						await apiFetch({
							path: "/wc-admin/options",
							method: "POST",
							data: {
								...wcAddress,
								woocommerce_default_country: `${country}:${state}`,
								...(currentData.taxInfo?.saveTaxData && {
									wc_connect_taxes_enabled: "yes",
									woocommerce_calc_taxes: "yes",
								}),
							},
						});
						navigate(
							currentData.taxInfo?.saveTaxData
								? "/ecommerce/step/products"
								: "/ecommerce/step/tax"
						);
					}}
					style={{
						color: "black",
						display: "grid",
						justifyItems: "center",
						width: "800px",
					}}
				>
					<h1 className="store-address-title">
						Confirm your business or store address{" "}
					</h1>
					<p>
						Use the same address you provided for your Bluehost account or
						change it below:
					</p>

					<div className="store-address-form">
						<div>
							<label>Address line 1</label>
							<input
								name="woocommerce_store_address"
								type="text"
								required
								defaultValue={
									currentData.storeAddress?.woocommerce_store_address
								}
								onChange={handleFieldChange}
								onBlur={handleFieldChange}
							/>
						</div>
						<div>
							<label>Address line 2</label>
							<input
								name="woocommerce_store_address_2"
								type="text"
								defaultValue={
									currentData.storeAddress?.woocommerce_store_address_2
								}
								onChange={handleFieldChange}
								onBlur={handleFieldChange}
							/>
						</div>
						<div>
							<label>City</label>
							<input
								name="woocommerce_store_city"
								type="text"
								required
								defaultValue={currentData.storeAddress?.woocommerce_store_city}
								onChange={handleFieldChange}
								onBlur={handleFieldChange}
							/>
						</div>
						<div>
							<label>State</label>
							<input
								name="state"
								type="text"
								required
								defaultValue={currentData.storeAddress?.state}
								onChange={handleFieldChange}
								onBlur={handleFieldChange}
							/>
						</div>
						<div>
							<label>Postal Code</label>
							<input
								name="woocommerce_store_postcode"
								type="zip"
								required
								defaultValue={
									currentData.storeAddress?.woocommerce_store_postcode
								}
								onChange={handleFieldChange}
								onBlur={handleFieldChange}
							/>
						</div>
						<div>
							<label>Country</label>
							<select
								type="text"
								name="country"
								required
								defaultValue={currentData.storeAddress?.country}
								onChange={handleFieldChange}
								onBlur={handleFieldChange}
							>
								{constants.countries.map((country) => (
									<option
										key={country.country_short}
										value={country.country_short}
									>
										{country.country}
									</option>
								))}
							</select>
						</div>
					</div>
					<button className="nfd-nav-card-button nfd-card-button" type="submit">
						Continue Setup
					</button>
					<p>
						<em>
							Need help? <a>Hire our experts</a>
						</em>
					</p>
				</form>
			</NewfoldLargeCard>
		</CommonLayout>
	);
};

export default StepAddress;
