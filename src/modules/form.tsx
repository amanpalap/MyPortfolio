"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function FormPage() {
    const [isChecked, setIsChecked] = useState(false);
    const [formValues, setFormValues] = useState({
        firstname: "",
        lastname: "",
        email: "",
        message: "",
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormValues({ ...formValues, [id]: value });
        setErrorMessage(""); // Clear error message when user types
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission

        const namePattern = /^[A-Za-z]+$/;
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let valid = true;

        if (!namePattern.test(formValues.firstname) || !namePattern.test(formValues.lastname) ||
            !emailPattern.test(formValues.email) || formValues.message.trim() === "" || !isChecked) {
            setErrorMessage("Please fill out the required(*) fields correctly");
            valid = false;
        }

        if (!valid) return;

        // If validation is successful, submit the form
        const formData = new FormData();
        Object.keys(formValues).forEach((key) => {
            formData.append(key, formValues[key as keyof typeof formValues]);
        });

        try {
            const response = await fetch("https://getform.io/f/bzylwdoa", {
                method: "POST",
                body: formData,
            });
            if (response.ok) {
                setIsSubmitted(true); // Set submission status to true upon successful submission
            } else {
                throw new Error("Network response was not ok");
            }
        } catch (error) {
            console.error("Error submitting form", error);
            setErrorMessage("Error submitting form, please try again.");
        }
    };

    return (
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                Fill This Form To <span className="text-blue-600 text-4xl mx-2">Contact</span>
            </h2>
            <form className="my-8" action="https://getform.io/f/bzylwdoa" method="POST" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="firstname">
                            First name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="firstname"
                            name="firstname"
                            placeholder="Tyler"
                            type="text"
                            value={formValues.firstname}
                            onChange={handleChange}
                        />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="lastname">
                            Last name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="lastname"
                            name="lastname"
                            placeholder="Durden"
                            type="text"
                            value={formValues.lastname}
                            onChange={handleChange}
                        />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">
                        Email Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id="email"
                        name="email"
                        placeholder="projectmayhem@fc.com"
                        type="email"
                        value={formValues.email}
                        onChange={handleChange}
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="message">
                        Message <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id="message"
                        name="message"
                        placeholder="Type your message here..."
                        type="text"
                        value={formValues.message}
                        onChange={handleChange}
                    />
                </LabelInputContainer>
                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        checked={isChecked}
                        onChange={(e) => {
                            setIsChecked(e.target.checked);
                            setErrorMessage(""); // Clear error message when user checks the checkbox
                        }}
                    />
                    <Label htmlFor="terms" className="ml-2">
                        I agree to the terms and conditions <span className="text-red-500">*</span>
                    </Label>
                </div>
                {errorMessage && (
                    <ErrorText>{errorMessage}</ErrorText>
                )}
                {isSubmitted && (
                    <SuccessText>Form submitted successfully!</SuccessText>
                )}
                <button
                    className="bg-gradient-to-br text-sm relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                >
                    Sign up &rarr;
                    <BottomGradient />
                </button>
            </form>
        </div>
    );
}

const BottomGradient = () => (
    <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
);

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
    </div>
);

const ErrorText = ({ children }: { children: React.ReactNode }) => (
    <div aria-live="assertive" className="text-sm text-red-500 mb-4">{children}</div>
);

const SuccessText = ({ children }: { children: React.ReactNode }) => (
    <div aria-live="polite" className="text-sm text-green-500 mb-4">{children}</div>
);
