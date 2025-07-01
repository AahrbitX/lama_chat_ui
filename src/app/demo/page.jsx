"use client";

import React, { useRef, useState } from "react";
import ChatModal from "../../components/chat/chatModal";
import Image from "next/image";

const plans = [
	{
		key: "file",
		title: "File-based Chat",
		desc: "Upload your docs, PDFs, or text files and let Ξxora answer questions from your content. Perfect for manuals, policies.",
		image: "/assets/images/meeting.png",
	},
	{
		key: "url",
		title: "URL-based Chat",
		desc: "Paste a website link and Ξxora will chat using the content from that page. Great for knowledge bases, blogs, or product pages.",
		image: "/assets/images/creative-team.png",
	},
];

export default function PremiumChatHome() {

	const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";
	const [phase, setPhase] = useState(1);
	const [selectedPlan, setSelectedPlan] = useState(null);
	const [showChat, setShowChat] = useState(false);
	const [uploading, setUploading] = useState(false);
	const [uploadError, setUploadError] = useState("");
	const [canChat, setCanChat] = useState(false);
	const [sessionId, setSessionId] = useState(null);
	const [selectedFile, setSelectedFile] = useState(null);		
	const [inputUrl, setInputUrl] = useState("");
	const phase1Ref = useRef(null);
	const phase2Ref = useRef(null);
	const phase3Ref = useRef(null);

	const scrollToPhase = (ref) => {
		setTimeout(() => {
			ref.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	};
	const renderPlanSelection = () => (
		<div className="relative min-h-screen flex flex-col" ref={phase1Ref}>
			<section className="flex-1 flex flex-col items-center justify-center relative z-10">
				<section className="flex-1 flex flex-col items-center justify-center relative z-10">
					<div className="absolute inset-0 flex items-center justify-center -z-10">
						<svg
							width="1200"
							height="600"
							viewBox="0 0 1200 600"
							fill="none"
							className="w-[1200px] h-[600px] rounded-3xl"
							style={{ filter: "blur(80px)", opacity: 0.6 }}
						>
							<defs>
								<linearGradient
									id="wave-gradient"
									x1="0"
									y1="0"
									x2="1200"
									y2="600"
									gradientUnits="userSpaceOnUse"
								>
									<stop stopColor="#a78bfa" />
									<stop offset="0.5" stopColor="#7c3aed" />
									<stop offset="1" stopColor="#3b0764" />
								</linearGradient>
							</defs>
							<path
								d="M0,400 Q300,300 600,400 T1200,400 V600 H0 Z"
								fill="url(#wave-gradient)"
							/>
						</svg>
					</div>
					<div className="px-6 py-20 w-full text-center">
						<span className="inline-block px-4 py-1 rounded-full border border-[#a78bfa] text-[#a78bfa] text-xs font-semibold bg-[#3b0764]/60 mb-6 tracking-widest">
							Demo: Try Ξxora AI Chat
						</span>
						<h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight drop-shadow-lg">
							Experience{" "}
							<span className="text-[#a78bfa]">Ξxora</span> in Action
							<br className="hidden md:block" />
							<span className="text-[#c4b5fd]">
								Choose your demo mode below
							</span>
						</h1>
						<p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto font-medium">
							Interact with Ξxora using your own files or any website link. See
							how our AI can instantly answer, assist, and engage—across every
							channel.
						</p>
						<div className="flex flex-col w-[800px] md:flex-row gap-10 justify-center mt-10">
							{plans.map((plan) => (
								<div
									key={plan.key}
									className="flex flex-col items-center bg-gradient-to-br from-[#3b0764]/30 to-[#3b0764]/30 rounded-2xl  w-full p-6 md:p-8 gap-6 transition"
								>
									<div className="flex-1 flex flex-col items-center justify-center">
										<Image
											src={plan.image}
											alt={plan.title}
											className=" mb-4 w-[220px]"
                      width={220}
                      height={220}
										/>
										<div className="font-extrabold text-2xl mb-2 text-white">
											{plan.title}
										</div>
										<div className="text-[#c4b5fd] text-base mb-5">
											{plan.desc}
										</div>
										<button
											onClick={() => {
												setSelectedPlan(plan.key);
												setPhase(2);
												scrollToPhase(phase2Ref);
											}}
											className="flex items-center gap-2 px-6 py-2 rounded-full bg-[#a78bfa] text-white font-semibold shadow-md hover:bg-[#7c3aed] transition"
										>
											Try Now
											<svg
												className="w-4 h-4 ml-1"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M17 7l-1.41-1.41a1 1 0 00-1.42 0L7 14.17V17h2.83l7.17-7.17a1 1 0 000-1.42z"
												/>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M19 5v6h-6"
												/>
											</svg>
										</button>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
			</section>
		</div>
	);
	const checkDataForSession = async (id) => {
		return new Promise((resolve) => setTimeout(() => resolve(id === "valid-session-id"), 800));
	};
	const handleUrlScrape = async () => {
	  if (!inputUrl.trim()) {
		setUploadError("Please enter a valid URL.");
		return;
	  }
	  setUploading(true);
	  setUploadError("");
	  try {
		const response = await fetch(`${BASE_URL}/deep-scrape`, {
		  method: "POST",
		  headers: { "Content-Type": "application/json", accept: "application/json" },
		  body: JSON.stringify({ url: inputUrl, max_depth: 2 }),
		});
		if (!response.ok) throw new Error("Scraping failed. Please try again.");
		const data = await response.json();
		const newSessionId = data.session_id;
		setSessionId(newSessionId);
		sessionStorage.setItem("session_id", newSessionId);
	
		// Optionally check data for session here if needed
		const hasData = await checkDataForSession(newSessionId);
		setCanChat(hasData);
	
		setUploading(false);
		setPhase(3);
		scrollToPhase(phase3Ref);
	  } catch (err) {
		setUploading(false);
		setUploadError(err.message || "Scraping failed. Please try again.");
	  }
	};
	const handleFileUpload = async (e) => {
		const file = e.target.files[0];
		if (!file) return;
		const allowedTypes = [
			"application/pdf",
			"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
			"text/plain",
		];
		if (!allowedTypes.includes(file.type)) {
			setUploadError("Only PDF, DOCX, or TXT files are allowed.");
			return;
		}
	
		setUploading(true);
		setUploadError("");
	
		try {
			const formData = new FormData();
			formData.append("file", file);
	
			const response = await fetch(`${BASE_URL}/upload`, {
				method: "POST",
				body: formData,
			});
	
			if (!response.ok) {
				throw new Error("Upload failed. Please try again.");
			}
	
			const data = await response.json();
			const newSessionId = data.session_id;
			setSessionId(newSessionId);
			sessionStorage.setItem("session_id", newSessionId);
	
			// Optionally check data for session here if needed
			const hasData = await checkDataForSession(newSessionId);
			setCanChat(hasData);
	
			setUploading(false);
			setPhase(3);
			scrollToPhase(phase3Ref);
		} catch (err) {
			setUploading(false);
			setUploadError(err.message || "Upload failed. Please try again.");
		}
	};
	const renderInputPhase = () => (
		<section
			ref={phase2Ref}
			className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
		>
			{/* Decorative Glow */}
			<div className="absolute top-0 right-0 w-[400px] h-[200px] bg-[#a78bfa]/20 blur-3xl rounded-full pointer-events-none z-0" />
			<div className="absolute left-0 bottom-0 w-[300px] h-[160px] bg-[#7c3aed]/20 blur-2xl rounded-full pointer-events-none z-0" />

			<div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-10 px-4 py-12">
				{/* Left: Info & Actions */}
				<div className="flex-1 flex flex-col items-start justify-center">
					<span className="mb-4 px-4 py-1 rounded-full text-[#a78bfa] text-xs font-semibold tracking-widest">
						{selectedPlan === "file" ? "File Chat" : "URL Chat"}
					</span>
					<h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight">
						{selectedPlan === "file"
							? "Upload a File to Chat Instantly"
							: "Paste a URL to Start Chatting"}
					</h2>
					<p className="text-[#c4b5fd] mb-6 text-lg max-w-lg">
						{selectedPlan === "file"
							? "Ξxora will read your document and answer any question you ask. Perfect for manuals, policies, or any document-driven support."
							: "Ξxora will fetch content from your link and become your smart assistant for that page. Great for blogs, help centers, or product docs."}
					</p>
					<div className="w-full flex flex-col items-start mb-6">
						{selectedPlan === "file" ? (
							<label className="w-full">
								<span className="block mb-2 text-[#a78bfa] font-semibold">
									Select File
								</span>
								<input
									type="file"
									accept=".pdf,.docx,.txt"
									className="block w-full px-5 py-3 rounded-xl border border-[#a78bfa]/40 bg-[#3b0764]/60 text-white focus:border-[#a78bfa] transition"
									onChange={e => setSelectedFile(e.target.files[0])}
									disabled={uploading}
								/>
								{uploadError && (
									<span className="block mt-2 text-xs text-red-400">
										{uploadError}
									</span>
								)}
								{uploading && (
									<span className="block mt-2 text-xs text-[#a78bfa]">
										Uploading...
									</span>
								)}
								<span className="block mt-2 text-xs text-[#c4b5fd]">
									Supported: PDF, DOCX, TXT
								</span>
							</label>
						) : (
							<label className="w-full">
								<span className="block mb-2 text-[#a78bfa] font-semibold">
								Paste Website URL
								</span>
								<input
								type="url"
								placeholder="https://example.com"
								value={inputUrl}
								onChange={e => setInputUrl(e.target.value)}
								className="block w-full px-5 py-3 rounded-xl border border-[#a78bfa]/40 bg-[#3b0764]/60 text-white focus:border-[#a78bfa] transition"
								disabled={uploading}
								/>
								{uploadError && (
								<span className="block mt-2 text-xs text-red-400">
									{uploadError}
								</span>
								)}
								{uploading && (
								<span className="block mt-2 text-xs text-[#a78bfa]">
									Scraping...
								</span>
								)}
								<span className="block mt-2 text-xs text-[#c4b5fd]">
								Ξxora will use the content from this page.
								</span>
							</label>
						)}
					</div>
					<div className="flex gap-4 mt-2">
						<button
						  onClick={() => {
							if (selectedPlan === "file") {
							  if (!selectedFile) {
								setUploadError("Please select a file before continuing.");
								return;
							  }
							  handleFileUpload({ target: { files: [selectedFile] } });
							} else {
							  handleUrlScrape();
							}
						  }}
						  disabled={uploading}
						  className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] text-white font-semibold text-lg shadow-lg hover:from-[#7c3aed] hover:to-[#a78bfa] transition"
						>
						  Create Knowledge base
						  {/* ...svg... */}
						</button>
						<button
							onClick={() => {
								setPhase(1);
								scrollToPhase(phase1Ref);
							}}
							className="px-6 py-3 rounded-full border border-[#a78bfa] text-[#a78bfa] font-semibold bg-transparent hover:bg-[#a78bfa]/10 transition"
						>
							← Back
						</button>
					</div>
				</div>
				{/* Right: Illustration or Preview */}
				<div className="flex-1 flex items-center justify-center">
					<div className="bg-[#1a102e]/80 rounded-2xl shadow-xl p-6 flex flex-col items-center w-full max-w-md">
						<Image
							src={
								selectedPlan === "file"
									? "/assets/images/meeting.png"
									: "/assets/images/creative-team.png"
							}
							alt={
								selectedPlan === "file" ? "File Chat" : "URL Chat"
							}
              className="w-full h-48 object-cover rounded-xl mb-4"
              width={ 300}
              height={200}
						/>
						<div className="text-white text-lg font-semibold mb-2">
							{selectedPlan === "file"
								? "Smart File Chat"
								: "Smart URL Chat"}
						</div>
						<div className="text-[#c4b5fd] text-sm text-center">
							{selectedPlan === "file"
								? "Upload a file and ask anything—Ξxora will instantly understand and answer."
								: "Paste a link and let Ξxora become your expert for that page."}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
	const renderStartPhase = () => (
		<section
			ref={phase3Ref}
			className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
		>
			{/* Decorative Glows */}
			<div className="absolute bottom-0 left-0 w-[350px] h-[180px] bg-[#a78bfa]/30 blur-3xl rounded-full pointer-events-none z-0" />
			<div className="absolute top-0 right-0 w-[250px] h-[120px] bg-[#7c3aed]/20 blur-2xl rounded-full pointer-events-none z-0" />

			<div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-8 px-4 py-12">
				{/* Illustration */}
				<div className="hidden md:flex flex-1 items-center justify-center">
					<div className="rounded-2xl p-6 flex flex-col items-center w-full">
						{selectedPlan === "file" ? (
							// File Chat SVG
							<svg
								width="120"
								height="120"
								viewBox="0 0 120 120"
								fill="none"
								className="mb-4"
							>
								<rect
									x="20"
									y="20"
									width="80"
									height="100"
									rx="12"
									fill="#a78bfa"
								/>
								<rect
									x="30"
									y="35"
									width="60"
									height="10"
									rx="3"
									fill="#ede9fe"
								/>
								<rect
									x="30"
									y="55"
									width="40"
									height="8"
									rx="2"
									fill="#ede9fe"
								/>
								<rect
									x="30"
									y="70"
									width="50"
									height="8"
									rx="2"
									fill="#ede9fe"
								/>
								<rect
									x="30"
									y="85"
									width="35"
									height="8"
									rx="2"
									fill="#ede9fe"
								/>
								<rect
									x="30"
									y="100"
									width="25"
									height="6"
									rx="2"
									fill="#ede9fe"
								/>
								<rect
									x="70"
									y="100"
									width="20"
									height="6"
									rx="2"
									fill="#ede9fe"
								/>
								<rect
									x="60"
									y="20"
									width="30"
									height="20"
									rx="6"
									fill="#7c3aed"
								/>
								<rect
									x="65"
									y="25"
									width="20"
									height="10"
									rx="3"
									fill="#ede9fe"
								/>
							</svg>
						) : (
							// URL Chat SVG
							<svg
								width="120"
								height="120"
								viewBox="0 0 120 120"
								fill="none"
								className="mb-4"
							>
								<rect
									x="18"
									y="30"
									width="84"
									height="60"
									rx="12"
									fill="#7c3aed"
								/>
								<rect
									x="28"
									y="45"
									width="64"
									height="8"
									rx="2"
									fill="#ede9fe"
								/>
								<rect
									x="28"
									y="60"
									width="40"
									height="8"
									rx="2"
									fill="#ede9fe"
								/>
								<rect
									x="28"
									y="75"
									width="50"
									height="8"
									rx="2"
									fill="#ede9fe"
								/>
								<circle cx="60" cy="30" r="18" fill="#a78bfa" />
								<path
									d="M52 30c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8"
									stroke="#ede9fe"
									strokeWidth="2"
									strokeLinecap="round"
								/>
								<rect
									x="80"
									y="80"
									width="18"
									height="8"
									rx="2"
									fill="#a78bfa"
								/>
							</svg>
						)}
						<div className="text-white text-lg font-semibold mb-1">
							{selectedPlan === "file" ? "File Chat Ready" : "URL Chat Ready"}
						</div>
						<div className="text-[#c4b5fd] text-sm text-center">
							{selectedPlan === "file"
								? "Your file is loaded. Start chatting now!"
								: "Your link is ready. Ask anything about this page!"}
						</div>
					</div>
				</div>
				{/* Content */}
				<div className="flex-1 flex flex-col items-center md:items-start justify-center">
					<span className="mb-4 px-4 py-1 rounded-full border border-[#a78bfa] text-[#a78bfa] text-xs font-semibold bg-[#3b0764]/60 tracking-widest shadow">
						Ready to Chat
					</span>
					<h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center md:text-left drop-shadow-lg leading-tight">
						Ξxora is{" "}
						<span className="text-[#a78bfa]">Ready!</span>
					</h2>
					<p className="text-[#c4b5fd] mb-8 text-lg text-center md:text-left max-w-lg font-medium">
						Your {selectedPlan === "file" ? "file" : "URL"} is now loaded.
						<br />
						Start a conversation with Ξxora and get instant, intelligent
						answers.
						<br />
						<span className="text-[#a78bfa] font-semibold">Tip:</span> Use the
						chat icon anytime.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 mt-2 w-full">
						<button
							onClick={() => setShowChat(true)}
							className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] text-white font-semibold text-lg shadow-xl hover:from-[#7c3aed] hover:to-[#a78bfa] transition w-full sm:w-auto"
						>
							<svg
								className="w-6 h-6 mr-1"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								viewBox="0 0 24 24"
							>
								<circle
									cx="12"
									cy="12"
									r="10"
									stroke="#ede9fe"
									strokeWidth="2"
									fill="#a78bfa"
								/>
								<path
									stroke="#fff"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M9 12l2 2 4-4"
								/>
							</svg>
							Open Chat
						</button>
						<button
							onClick={() => {
								setPhase(1);
								scrollToPhase(phase1Ref);
								sessionStorage.removeItem("session_id");
								setSessionId(null);
							}}
							className="px-8 py-3 rounded-full border border-[#a78bfa] text-[#a78bfa] font-semibold bg-transparent hover:bg-[#a78bfa]/10 transition w-full sm:w-auto"
						>
							← Start Over
						</button>
					</div>
				</div>
			</div>
		</section>
	);

	return (
		<div className="relative min-h-screen w-full overflow-x-hidden">
			{renderPlanSelection()}
			{phase > 1 && renderInputPhase()}
			{phase > 2 && renderStartPhase()}
			<ChatModal open={showChat} setOpen={setShowChat} />
		</div>
	);
}