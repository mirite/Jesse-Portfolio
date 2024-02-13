import React from "react";
import { TextWrapper } from "@/app/components";
import MaxWidthContainer from "@/app/layout/MaxWidthContainer";
const Footer = () => {
	return (
		<MaxWidthContainer className={"mt-2"}>
			<footer className="p-4 text-center">
				<TextWrapper>
					Copyright ©{new Date().getFullYear()} Jesse Conner
				</TextWrapper>
			</footer>
		</MaxWidthContainer>
	);
};

export default Footer;
