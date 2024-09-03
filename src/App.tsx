import { Navigate, Route, Routes } from "react-router-dom";
import { CountryDetils } from "./pages/country/CountryDetils";
import { SearchPage } from "./pages/serach/SearchPage";

export const App = () => {
	return (
		<main>
			<Routes>
				<Route index path="/" element={<SearchPage />} />
				<Route path="/country/:id" element={<CountryDetils />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</main>
	);
};
