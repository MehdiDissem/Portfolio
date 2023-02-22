import React, { Suspense, lazy } from "react";
import Default from "./Default";
import Loader from "../elements/Loader/Loader";
const PythonVSCodeContent = lazy(() => import("../elements/PythonVSCode/PythonVSCode"));

const VSCodePython = () => {
	return (
		<Default height="90%" heading="Visual Studio Code" resizable={false} programName="Code">
			<Suspense fallback={<Loader />}>
				<PythonVSCodeContent />
			</Suspense>
		</Default>
	);
};

export default VSCodePython;
