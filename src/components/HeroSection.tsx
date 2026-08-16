"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BigHeroTruck } from "@/components/MovingTruck";
import { IconArrow } from "@/components/Icons";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const play = async () => {
      try {
        video.muted = true;
        await video.play();
        setReady(true);
      } catch {
        setReady(false);
      }
    };

    play();
  }, []);

  return (
    <section className="hero-stage relative min-h-[100svh] overflow-hidden">
      {/* Video / poster backdrop */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className={`hero-video absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/videos/hero-poster.jpg"
          aria-label="Semi truck driving on highway"
          aria-hidden="true"
        >
          <source src="/videos/hero-highway.mp4" type="video/mp4" />
        </video>
        {/* Fallback still if video blocked */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
            ready ? "opacity-0" : "opacity-100"
          }`}
          style={{ backgroundImage: "url(/videos/hero-poster.jpg)" }}
          aria-hidden="true"
        />
        <div className="hero-video-overlay absolute inset-0" />
        <div className="hero-grid absolute inset-0" />
        <div className="hero-orbs absolute inset-0 overflow-hidden" aria-hidden="true">
          <span className="hero-orb hero-orb-a" />
          <span className="hero-orb hero-orb-b" />
        </div>
        <div className="grain" />
      </div>

      {/* Content — brand + headline + support + CTAs only */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pb-40 pt-28 sm:px-5 sm:pb-44 lg:px-8">
        <div className="animate-fade-up mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-orange/35 bg-orange/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-orange backdrop-blur-md sm:text-sm">
          <span className="pulse-dot h-2 w-2 rounded-full bg-orange" />
          Smart Dispatch. Stronger Growth.
        </div>

        <h1 className="animate-fade-up delay-100 max-w-4xl font-display text-[2.75rem] font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
          <span className="block">Powering Freight.</span>
          <span className="hero-title-accent mt-1 block sm:mt-2">Driving Growth.</span>
        </h1>

        <p className="animate-fade-up delay-200 mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:mt-7 sm:text-xl">
          All-in-one dispatch &amp; carrier solutions to maximize your revenue across the USA.
        </p>

        <div className="animate-fade-up delay-300 mt-9 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row">
          <Link href="/carrier-signup" className="btn-primary !px-8 !py-4 !text-base">
            Become a Carrier
            <IconArrow />
          </Link>
          <Link href="/contact" className="btn-secondary !px-8 !py-4 !text-base">
            Contact Us
          </Link>
        </div>

        <div className="animate-fade-up delay-400 mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/65 sm:mt-12">
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            24/7 Dispatch
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            AI Chatbot
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            ELD Service Provider
          </span>
        </div>
      </div>

      <BigHeroTruck tone="light" />

      <div className="absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 sm:block">
        <div className="animate-float flex h-10 w-6 items-start justify-center rounded-full border border-white/30 p-1.5">
          <span className="h-2 w-1 rounded-full bg-orange" />
        </div>
      </div>
    </section>
  );
}
