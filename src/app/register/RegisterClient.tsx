"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import FormInput from "@/components/FormHelper/FormInput";

const RegisterSchema = z
	.object({
		fullname: z.string().min(2, "Name is too short"),
		email: z.string().email("Enter a valid email"),
		password: z
			.string()
			.min(8, "Password must be at least 8 characters")
			.regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/, {
				message: "Use upper, lower, and a number",
			}),
		confirmPassword: z.string().min(1, "Confirm your password"),
		agree: z.literal(true, { message: "You must accept the terms" }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		path: ["confirmPassword"],
		message: "Passwords do not match",
	});

type RegisterValues = z.infer<typeof RegisterSchema>;

const RegisterClient = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterValues>({
		resolver: zodResolver(RegisterSchema),
		defaultValues: {
			fullname: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	const onSubmit = async (values: RegisterValues) => {
		try {
			setLoading(true);

			const res = await fetch("/api/register", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: values.fullname,
					email: values.email,
					password: values.password,
				}),
			});

			if (!res.ok) {
				const data = await res.json().catch(() => ({}));
				throw new Error(data?.message || "Registration failed");
			}

			toast.success("Account created! Signing you in...");

			const signInRes = await signIn("credentials", {
				email: values.email,
				password: values.password,
				redirect: false,
			});

			if (signInRes?.error) {
				toast.error(
					"Registered, but auto login failed. Please sign in."
				);
				router.push("/login");
			} else {
				router.push("/dashboard");
			}
		} catch (err: unknown) {
			const message =
				err instanceof Error ? err.message : "Something went wrong";
			toast.error(message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} noValidate>
			<div className="form-group">
				<FormInput
					id="fullname"
					type="text"
					label="Full Name *"
					placeholder="John Doe"
					className="form-control"
					autoComplete="name"
					{...register("fullname")}
					error={errors.fullname}
				/>
			</div>

			<div className="form-group">
				<FormInput
					id="email"
					type="email"
					label="Email Address *"
					placeholder="you@example.com"
					className="form-control"
					autoComplete="email"
					{...register("email")}
					error={errors.email}
				/>
			</div>

			<div className="form-group">
				<FormInput
					id="password"
					type="password"
					label="Create Password *"
					placeholder="Enter Password"
					className="form-control"
					autoComplete="new-password"
					{...register("password")}
					error={errors.password}
				/>
			</div>

			<div className="form-group">
				<FormInput
					id="confirmPassword"
					type="password"
					label="Confirm Password *"
					placeholder="Confirm Password"
					className="form-control"
					autoComplete="new-password"
					{...register("confirmPassword")}
					error={errors.confirmPassword}
				/>
			</div>

			<div className="options d-flex justify-content-between align-items-start">
				<label
					className="m-0 d-flex align-items-center gap-2"
					htmlFor="agree"
				>
					<input id="agree" type="checkbox" {...register("agree")} />I
					agree to the Terms &amp; Conditions &amp; Privacy Policy
				</label>
				{errors.agree && (
					<small className="text-danger">
						{errors.agree.message}
					</small>
				)}
			</div>

			<div className="authentication-btn mt-4">
				<button
					type="submit"
					className="default-btn"
					disabled={loading}
				>
					{loading ? (
						<span className="d-inline-flex align-items-center gap-2">
							<span
								className="spinner-border spinner-border-sm"
								role="status"
								aria-hidden="true"
							/>
							Creating...
						</span>
					) : (
						<span className="d-inline-flex align-items-center gap-2">
							Create Account
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="14"
								viewBox="0 0 18 14"
								fill="none"
							>
								<path
									opacity="0.5"
									d="M16.25 6.75V7.25H1.25V6.75H16.25Z"
									fill="white"
									stroke="white"
								/>
								<path
									d="M10.75 1L16.75 7L10.75 13"
									stroke="white"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</span>
					)}
				</button>
			</div>
		</form>
	);
};

export default RegisterClient;
