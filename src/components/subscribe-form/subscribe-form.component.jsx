import React, { useState } from "react";
import { Form, FormButton, FormInput, FormInputContainer } from './subscribe-form.styles';

const SubscribeForm = () => {
    const [email, setEmail] = useState("")

    const handleSubmit = async (e) => {
        // TODO when implementing GraphQL
        e.preventDefault()
    }

    const handleEmailChange = (event) => {
        const { value } = event.target
        setEmail(value)
    }

    return (
        <Form data-input-wrapper="true" onSubmit={handleSubmit}>
            <FormInputContainer>
                <FormInput
                    aria-label="Enter your email"
                    placeholder="you@domain.com"
                    onChange={handleEmailChange}
                    data-1p-ignore="true"
                    value={email}
                    type="email"
                    name="email"
                    required
                />
                <FormButton type="submit">Subscribe</FormButton>
            </FormInputContainer>
        </Form>
    )
}

export default SubscribeForm