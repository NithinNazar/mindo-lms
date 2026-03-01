"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import FormInput from "@/components/FormHelper/FormInput";

const LoginSchema = z.object({
	identifier: z.string().email("Enter a valid email"),
	password: z.string().min(1, "Password is required"),
	remember: z.boolean().optional(),
});

type LoginValues = z.infer<typeof LoginSchema>;

const LoginClient = () => {
	const router = useRouter();
	const params = useSearchParams();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const err = params.get("error");
		if (err) {
			// Map common NextAuth errors to friendlier text
			const message =
				err === "CredentialsSignin"
					? "Invalid email or password"
					: "Authentication error";
			toast.error(message);
		}
	}, [params]);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginValues>({
		resolver: zodResolver(LoginSchema),
		defaultValues: { identifier: "", password: "", remember: false },
	});

	const onSubmit = async (values: LoginValues) => {
		try {
			setLoading(true);
			const res = await signIn("credentials", {
				email: values.identifier,
				password: values.password,
				redirect: false,
			});

			// Treat undefined/null result as failure; only proceed on explicit success
			if (!res || res.error || res.ok === false) {
				toast.error("Invalid email or password");
				return;
			}

			// Success path
			toast.success("Welcome back!");
			const callbackUrl = params.get("callbackUrl") || "/dashboard";
			router.push(callbackUrl);
		} catch (err: unknown) {
			const message =
				err instanceof Error ? err.message : "Unable to sign in";
			toast.error(message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} noValidate>
			<FormInput
				id="login-identifier"
				type="email"
				label="Email *"
				placeholder="you@example.com"
				className="form-control"
				autoComplete="email"
				{...register("identifier")}
				error={errors.identifier}
			/>

			<FormInput
				id="login-password"
				type="password"
				label="Password *"
				placeholder="Your password"
				className="form-control"
				autoComplete="current-password"
				{...register("password")}
				error={errors.password}
			/>

			<div className="d-flex justify-content-between align-items-center">
				{/* <FormCheckbox
					id="remember"
					label="Remember Me"
					{...register("remember")}
				/> */}
				<Link href="/forgot-password">Forgot password?</Link>
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
							Signing in...
						</span>
					) : (
						<>
							Log In
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
						</>
					)}
				</button>
			</div>
		</form>
	);
};

export default LoginClient;
