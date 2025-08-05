"use client";
import { useForm, ValidationError } from "@formspree/react";
import React, { type ReactElement } from "react";

import { Button, TextWrapper } from "@/app/components/";
import Field from "@/app/contact/ContactForm/Field";

/**
 * The interactive contact form
 *
 * @returns The form component
 */
export default function ContactForm(): ReactElement {
	const [state, handleSubmit] = useForm("mgebderg");
	if (state.succeeded) {
		return <p>Thanks for joining!</p>;
	}
	return (
		<TextWrapper>
			<form
				className="flex flex-col space-y-2"
				onSubmit={(e) => {
					handleSubmit(e);
				}}
			>
				<Field id="email" label="Email Address:">
					<input id="email" name="email" type="email" />
					<ValidationError errors={state.errors} field="email" prefix="Email" />
				</Field>
				<Field id={"message"} label={"Message:"}>
					<textarea id="message" name="message" rows={5} />
					<ValidationError
						errors={state.errors}
						field="message"
						prefix="Message"
					/>
				</Field>
				<Button disabled={state.submitting} type="submit">
					Send Message
				</Button>
			</form>
		</TextWrapper>
	);
}
