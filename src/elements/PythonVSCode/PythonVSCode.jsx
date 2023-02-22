import React from "react";
import styled from "styled-components";
import BodyContent from "@elements/Window/BodyContent";

const Iframe = styled.iframe`
	width: 100%;
	height: 95%;
	border: none;
`;

const VSCodeContentPython = () => {
	return (
		<BodyContent>
			<Iframe
				src="https://github1s.com/MehdiDissem/Python-ProblemSolving/blob/HEAD/guessingGame.py"
				frameBorder="0"
				title="VsCode"
			></Iframe>
		</BodyContent>
	);
};

export default VSCodeContentPython;
