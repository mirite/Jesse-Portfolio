"use client";
import { useForm, ValidationError } from "@formspree/react";
import React, { type ReactElement } from "react";

import { Button, TextWrapper } from "@/app/components/";
import Field from "@/app/contact/ContactForm/Field";

export default function ContactForm(): ReactElement {
	const [state, handleSubmit] = useForm("mgebderg");
	if (state.succeeded) {
		return <p>Thanks for joining!</p>;
	}
	return (
		<TextWrapper>
			<form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
				<Field id="email" label="Email Address:">
					<input id="email" type="email" name="email" />
					<ValidationError prefix="Email" field="email" errors={state.errors} />
				</Field>
				<Field id={"message"} label={"Message:"}>
					<textarea id="message" name="message" rows={5} />
					<ValidationError
						prefix="Message"
						field="message"
						errors={state.errors}
					/>
				</Field>
				<Button type="submit" disabled={state.submitting}>
					Send Message
				</Button>
			</form>
		</TextWrapper>
	);
}
