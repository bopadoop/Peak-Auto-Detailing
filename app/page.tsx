"use client";

import { useState } from "react";

const services = [
  {
    name: "Interior Detail",
    price: 89,
    description: "Deep clean for seats, carpets, dashboard, and interior surfaces.",
  },
  {
    name: "Exterior Detail",
    price: 79,
    description: "Hand wash, wheels, glass, tires, and exterior finish.",
  },
  {
    name: "Full Detail",
    price: 149,
    description: "Our complete interior and exterior detailing package.",
  },
];

const addons = [
  {
    name: "Pet Hair Removal",
    price: 25,
  },
  {
    name: "Odor Treatment",
    price: 20,
  },
  {
    name: "Engine Bay",
    price: 35,
  },
  {
    name: "Headlight Restoration",
    price: 40,
  },
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [quoteMessage, setQuoteMessage] = useState("");
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="text-xl font-bold tracking-tight">
          PEAK<span className="text-cyan-400">.</span>
        </div>

        <div className="hidden gap-8 text-sm text-zinc-300 sm:flex">
          <a href="#services" className="transition hover:text-cyan-400">
            Services
          </a>
          <a href="#parts" className="transition hover:text-cyan-400">
            Parts
          </a>
          <a href="#builder" className="transition hover:text-cyan-400">
            Build Your Service
          </a>
        </div>

        <a
          href="#builder"
          className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-bold text-zinc-950 transition hover:bg-cyan-300"
        >
          Book Now
        </a>
      
      </nav>

      {/* Hero */}
      {/* Hero */}
<section className="relative overflow-hidden">
  <div className="absolute left-1/2 top-0 -z-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />

  <div className="relative mx-auto grid max-w-6xl gap-14 px-6 pb-20 pt-24 lg:grid-cols-2 lg:items-center lg:pb-28 lg:pt-32">

    {/* Left side */}
    <div>
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-cyan-400">
        <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
        Now accepting bookings
      </div>

      <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
        Premium Mobile Auto Detailing
      </p>

      <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
        Your car deserves to
        <span className="block text-cyan-400">
          look its best.
        </span>
      </h1>

      <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-400">
        Professional interior and exterior detailing brought directly to
        your driveway. We handle the dirty work. You enjoy the results.
      </p>

      <div className="mt-9 flex flex-col gap-4 sm:flex-row">
        <a
          href="#builder"
          className="rounded-full bg-cyan-400 px-7 py-4 text-center font-bold text-zinc-950 shadow-lg shadow-cyan-400/10 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300"
        >
          Get a Free Quote
        </a>

        <a
          href="#services"
          className="rounded-full border border-zinc-700 px-7 py-4 text-center font-bold text-white transition duration-300 hover:border-cyan-400/50 hover:bg-white/5"
        >
          Explore Services
        </a>
      </div>

      {/* Trust stats */}
      <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-zinc-800 pt-7">
        <div>
          <p className="text-2xl font-black text-white">100%</p>
          <p className="text-sm text-zinc-500">Attention to detail</p>
        </div>

        <div>
          <p className="text-2xl font-black text-white">Mobile</p>
          <p className="text-sm text-zinc-500">We come to you</p>
        </div>

        <div>
          <p className="text-2xl font-black text-white">5★</p>
          <p className="text-sm text-zinc-500">Service experience</p>
        </div>
      </div>
    </div>

    {/* Right side visual */}
    <div className="relative mx-auto w-full max-w-lg">
      <div className="absolute -inset-4 rounded-[2.5rem] bg-cyan-400/10 blur-2xl" />

      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-zinc-700 bg-zinc-900 shadow-2xl">

        {/* Visual background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(34,211,238,0.18),transparent_35%),linear-gradient(145deg,#18181b,#09090b)]" />

        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:40px_40px]" />

        {/* Center graphic */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[75%]">

            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-32 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl" />

            {/* Stylized car */}
            <div className="relative w-full min-h-[320px] overflow-hidden rounded-3xl bg-zinc-950 sm:min-h-[380px] lg:min-h-[450px]">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(34,211,238,0.16),transparent_55%)]" />

  <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(to_top,rgba(34,211,238,0.08),transparent)]" />

  <img
    src="/peak-car.png"
    alt="Black sports car in a premium garage"
    className="absolute inset-0 z-10 h-full w-full object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.8)]"
  />
</div>
          </div>
        </div>

        {/* Floating badge */}
        <div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-black/60 px-5 py-4 backdrop-blur-md">
          <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Peak Standard
          </p>
          <p className="mt-1 text-sm font-semibold text-white">
            Showroom finish. Every time.
          </p>
        </div>

        
      </div>
    </div>
  </div>
</section>

      {/* Services */}
{/* Services */}
<section id="services" className="border-t border-zinc-800 bg-zinc-900/50">
  <div className="mx-auto max-w-6xl px-6 py-24">

    {/* Section heading */}
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
        Our services
      </p>

      <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
        Pick your level of clean.
      </h2>

      <p className="mt-5 leading-7 text-zinc-400">
        Whether your vehicle needs a quick refresh or the full Peak
        treatment, we've got a package built for it.
      </p>
    </div>

    {/* Service cards */}
    <div className="mt-14 grid gap-6 lg:grid-cols-3">

      {/* Interior */}
      <article className="group relative rounded-3xl border border-zinc-800 bg-zinc-950 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-400/5">
        <div className="mb-8 flex items-start justify-between">
          <div>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl">
              ✨
            </div>

            <h3 className="text-2xl font-bold">
              Interior Detail
            </h3>
          </div>

          <div className="text-right">
            <p className="text-3xl font-black text-white">$89</p>
            <p className="text-xs text-zinc-500">starting at</p>
          </div>
        </div>

        <p className="leading-7 text-zinc-400">
          Bring your interior back to life with a deep clean designed
          to remove dirt, dust, stains, and everyday buildup.
        </p>

        <ul className="mt-7 space-y-3 text-sm text-zinc-300">
          <li>✓ Full vacuum &amp; wipe-down</li>
          <li>✓ Dashboard &amp; console cleaning</li>
          <li>✓ Seats &amp; carpets cleaned</li>
          <li>✓ Windows &amp; mirrors</li>
        </ul>

        <a
          href="#builder"
          className="mt-8 block rounded-2xl border border-zinc-700 px-5 py-3 text-center font-bold transition hover:border-cyan-400/50 hover:bg-white/5"
        >
          Choose Interior
        </a>
      </article>

      {/* Full Detail */}
      <article className="group relative rounded-3xl border border-cyan-400/40 bg-zinc-950 p-7 shadow-2xl shadow-cyan-400/5 transition duration-300 hover:-translate-y-2">

        {/* Popular badge */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cyan-400 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-zinc-950">
          Most Popular
        </div>

        <div className="mb-8 flex items-start justify-between">
          <div>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl">
              🚗
            </div>

            <h3 className="text-2xl font-bold">
              Full Detail
            </h3>
          </div>

          <div className="text-right">
            <p className="text-3xl font-black text-cyan-400">$149</p>
            <p className="text-xs text-zinc-500">starting at</p>
          </div>
        </div>

        <p className="leading-7 text-zinc-400">
          The complete Peak experience. Interior deep cleaning
          combined with a meticulous exterior detail.
        </p>

        <ul className="mt-7 space-y-3 text-sm text-zinc-300">
          <li>✓ Everything in Interior Detail</li>
          <li>✓ Hand wash &amp; dry</li>
          <li>✓ Wheels &amp; tires detailed</li>
          <li>✓ Exterior finish treatment</li>
        </ul>

        <a
          href="#builder"
          className="mt-8 block rounded-2xl bg-cyan-400 px-5 py-3 text-center font-bold text-zinc-950 transition hover:bg-cyan-300"
        >
          Book Full Detail
        </a>
      </article>

      {/* Exterior */}
      <article className="group relative rounded-3xl border border-zinc-800 bg-zinc-950 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-400/5">
        <div className="mb-8 flex items-start justify-between">
          <div>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl">
              💎
            </div>

            <h3 className="text-2xl font-bold">
              Exterior Detail
            </h3>
          </div>

          <div className="text-right">
            <p className="text-3xl font-black text-white">$79</p>
            <p className="text-xs text-zinc-500">starting at</p>
          </div>
        </div>

        <p className="leading-7 text-zinc-400">
          Restore that clean, glossy finish with a careful exterior
          wash focused on the details that make your vehicle shine.
        </p>

        <ul className="mt-7 space-y-3 text-sm text-zinc-300">
          <li>✓ Hand wash &amp; dry</li>
          <li>✓ Wheels &amp; tires cleaned</li>
          <li>✓ Exterior glass cleaned</li>
          <li>✓ Tire shine applied</li>
        </ul>

        <a
          href="#builder"
          className="mt-8 block rounded-2xl border border-zinc-700 px-5 py-3 text-center font-bold transition hover:border-cyan-400/50 hover:bg-white/5"
        >
          Choose Exterior
        </a>
      </article>

    </div>

    {/* Bottom note */}
    <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-950/60 px-6 py-5 text-center">
      <p className="text-sm text-zinc-400">
        Need something specific?
        <a
          href="#builder"
          className="ml-1 font-bold text-cyan-400 hover:text-cyan-300"
        >
          Tell us what your vehicle needs →
        </a>
      </p>
    </div>

  </div>
</section>
{/* Parts & Accessories */}
<section id="parts" className="border-t border-zinc-800 bg-zinc-950">
  <div className="mx-auto max-w-6xl px-6 py-24">

    {/* Section heading */}
    <div className="max-w-2xl">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
        Peak Garage
      </p>

      <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
        Parts & accessories.
      </h2>

      <p className="mt-5 leading-7 text-zinc-400">
        Upgrade your ride with quality parts, accessories, and
        essentials. Need help installing something? We can handle
        that too.
      </p>
    </div>

    {/* Product cards */}
    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {/* Product 1 */}
      <article className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40">
        <div className="flex h-48 items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-950">
          <span className="text-6xl transition duration-300 group-hover:scale-110">
            💡
          </span>
        </div>

        <div className="p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Lighting
          </p>

          <h3 className="mt-2 text-xl font-bold">
            LED Headlight Kit
          </h3>

          <p className="mt-3 text-sm leading-6 text-zinc-400">
            Bright, modern LED lighting for a cleaner look and
            improved visibility.
          </p>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-2xl font-black">
              $79
            </span>

            <button className="rounded-xl bg-white/5 px-4 py-2 text-sm font-bold transition hover:bg-cyan-400 hover:text-zinc-950">
              View
            </button>
          </div>
        </div>
      </article>

      {/* Product 2 */}
      <article className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40">
        <div className="flex h-48 items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-950">
          <span className="text-6xl transition duration-300 group-hover:scale-110">
            🛞
          </span>
        </div>

        <div className="p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Accessories
          </p>

          <h3 className="mt-2 text-xl font-bold">
            Premium Floor Mats
          </h3>

          <p className="mt-3 text-sm leading-6 text-zinc-400">
            Durable all-weather mats designed to keep your
            interior looking fresh.
          </p>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-2xl font-black">
              $59
            </span>

            <button className="rounded-xl bg-white/5 px-4 py-2 text-sm font-bold transition hover:bg-cyan-400 hover:text-zinc-950">
              View
            </button>
          </div>
        </div>
      </article>

      {/* Product 3 */}
      <article className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40">
        <div className="flex h-48 items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-950">
          <span className="text-6xl transition duration-300 group-hover:scale-110">
            📱
          </span>
        </div>

        <div className="p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Tech
          </p>

          <h3 className="mt-2 text-xl font-bold">
            Magnetic Phone Mount
          </h3>

          <p className="mt-3 text-sm leading-6 text-zinc-400">
            A clean, low-profile mount that keeps your phone
            secure while you're on the road.
          </p>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-2xl font-black">
              $34
            </span>

            <button className="rounded-xl bg-white/5 px-4 py-2 text-sm font-bold transition hover:bg-cyan-400 hover:text-zinc-950">
              View
            </button>
          </div>
        </div>
      </article>

      {/* Product 4 */}
      <article className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40">
        <div className="flex h-48 items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-950">
          <span className="text-6xl transition duration-300 group-hover:scale-110">
            🧼
          </span>
        </div>

        <div className="p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Care
          </p>

          <h3 className="mt-2 text-xl font-bold">
            Peak Cleaning Kit
          </h3>

          <p className="mt-3 text-sm leading-6 text-zinc-400">
            Everything you need to keep that freshly detailed
            look between appointments.
          </p>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-2xl font-black">
              $45
            </span>

            <button className="rounded-xl bg-white/5 px-4 py-2 text-sm font-bold transition hover:bg-cyan-400 hover:text-zinc-950">
              View
            </button>
          </div>
        </div>
      </article>

    </div>

    {/* Store CTA */}
    <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl border border-zinc-800 bg-zinc-900/60 p-7 sm:flex-row">
      <div>
        <h3 className="text-xl font-bold">
          Looking for something specific?
        </h3>

        <p className="mt-1 text-sm text-zinc-400">
          Tell us what you're looking for and we'll help you find it.
        </p>
      </div>

      <a
        href="#conact"
        className="rounded-2xl bg-cyan-400 px-6 py-3 font-bold text-zinc-950 transition hover:bg-cyan-300"
      >
        Ask About Parts →
      </a>
    </div>

  </div>
</section>
{/* Service Builder */}
<section
  id="builder"
  className="border-t border-zinc-800 bg-zinc-900/40"
>
  <div className="mx-auto max-w-6xl px-6 py-24">

    {/* Heading */}
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
        Build your service
      </p>

      <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
        Your car. Your service.
      </h2>

      <p className="mt-5 leading-7 text-zinc-400">
        Choose a package and customize it with the extras your
        vehicle actually needs.
      </p>
    </div>

    <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_360px]">

      {/* Options */}
      <div className="space-y-8">

        {/* Services */}
        <div>
          <div className="mb-4">
            <h3 className="text-xl font-bold">
              1. Choose a service
            </h3>

            <p className="mt-1 text-sm text-zinc-500">
              Select the package you'd like to start with.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {services.map((service) => {
              const selected = selectedService === service.name;

              return (
                <button
                  key={service.name}
                  type="button"
                  onClick={() => setSelectedService(service.name)}
                  className={`rounded-2xl border p-5 text-left transition duration-200 ${
                    selected
                      ? "border-cyan-400 bg-cyan-400/10 shadow-lg shadow-cyan-400/5"
                      : "border-zinc-800 bg-zinc-950 hover:-translate-y-1 hover:border-cyan-400/40"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="font-bold">
                      {service.name}
                    </h4>

                    <span className="font-black text-cyan-400">
                      ${service.price}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    {service.description}
                  </p>

                  <div className="mt-4 text-xs font-bold uppercase tracking-wider text-cyan-400">
                    {selected ? "Selected ✓" : "Select"}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Add-ons */}
        <div>
          <div className="mb-4">
            <h3 className="text-xl font-bold">
              2. Add some extras
            </h3>

            <p className="mt-1 text-sm text-zinc-500">
              Optional upgrades for an even deeper clean.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {addons.map((addon) => {
              const selected = selectedAddons.includes(addon.name);

              return (
                <button
                  key={addon.name}
                  type="button"
                  onClick={() => {
                    setSelectedAddons((current) =>
                      selected
                        ? current.filter((name) => name !== addon.name)
                        : [...current, addon.name]
                    );
                  }}
                  className={`flex items-center justify-between rounded-2xl border p-5 text-left transition ${
                    selected
                      ? "border-cyan-400 bg-cyan-400/10"
                      : "border-zinc-800 bg-zinc-950 hover:border-cyan-400/40"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-6 w-6 items-center justify-center rounded-md border text-xs font-black ${
                        selected
                          ? "border-cyan-400 bg-cyan-400 text-zinc-950"
                          : "border-zinc-700"
                      }`}
                    >
                      {selected ? "✓" : ""}
                    </div>

                    <span className="font-semibold">
                      {addon.name}
                    </span>
                  </div>

                  <span className="font-bold text-cyan-400">
                    +${addon.price}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Price Summary */}
      <aside className="h-fit rounded-3xl border border-cyan-400/30 bg-zinc-950 p-7 shadow-2xl shadow-cyan-400/5 lg:sticky lg:top-8">

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
          Your build
        </p>

        <h3 className="mt-2 text-2xl font-black">
          Service estimate
        </h3>

        <div className="my-6 border-t border-zinc-800" />

        <div className="space-y-4 text-sm">

          {selectedService ? (
            <div className="flex justify-between gap-4">
              <span className="text-zinc-400">
                {selectedService}
              </span>

              <span className="font-bold">
                $
                {
                  services.find(
                    (service) => service.name === selectedService
                  )?.price
                }
              </span>
            </div>
          ) : (
            <p className="text-zinc-500">
              Choose a service to get started.
            </p>
          )}

          {selectedAddons.map((addonName) => {
            const addon = addons.find(
              (item) => item.name === addonName
            );

            if (!addon) return null;

            return (
              <div
                key={addon.name}
                className="flex justify-between gap-4"
              >
                <span className="text-zinc-400">
                  {addon.name}
                </span>

                <span className="font-bold">
                  +${addon.price}
                </span>
              </div>
            );
          })}

        </div>

        <div className="my-6 border-t border-zinc-800" />

        <div className="flex items-end justify-between">
          <span className="text-sm text-zinc-500">
            Estimated total
          </span>

          <span className="text-4xl font-black text-cyan-400">
            $
            {(
              (services.find(
                (service) => service.name === selectedService
              )?.price ?? 0) +
              selectedAddons.reduce((total, addonName) => {
                const addon = addons.find(
                  (item) => item.name === addonName
                );

                return total + (addon?.price ?? 0);
              }, 0)
            ).toFixed(0)}
          </span>
        </div>

       <button
  type="button"
  onClick={() => {
    const total =
      (services.find(
        (service) => service.name === selectedService
      )?.price ?? 0) +
      selectedAddons.reduce((sum, addonName) => {
        const addon = addons.find(
          (item) => item.name === addonName
        );

        return sum + (addon?.price ?? 0);
      }, 0);

    const addonText =
      selectedAddons.length > 0
        ? selectedAddons.join(", ")
        : "None";

    setQuoteMessage(
      `Service: ${selectedService}\nAdd-ons: ${addonText}\nEstimated Total: $${total}`
    );

    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  disabled={!selectedService}
  className={`mt-7 block w-full rounded-2xl px-5 py-4 text-center font-black transition ${
    selectedService
      ? "bg-cyan-400 text-zinc-950 hover:bg-cyan-300"
      : "cursor-not-allowed bg-zinc-800 text-zinc-600"
  }`}
>
  Request My Quote →
</button>

        <p className="mt-4 text-center text-xs leading-5 text-zinc-600">
          Final pricing may vary depending on vehicle size,
          condition, and service requirements.
        </p>

      </aside>

    </div>
  </div>
</section>
      {/* About */}
      <section id="about">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
              Why Peak
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              The details matter.
            </h2>

            <p className="mt-6 leading-8 text-zinc-400">
              We believe a professional detail should feel different from a
              basic car wash. Every vehicle gets careful attention, quality
              products, and a finish we're proud to put our name on.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-7">
              <p className="text-4xl font-black text-cyan-400">5★</p>
              <p className="mt-2 text-sm text-zinc-400">Customer service</p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-7">
              <p className="text-4xl font-black text-cyan-400">100%</p>
              <p className="mt-2 text-sm text-zinc-400">Attention to detail</p>
            </div>

            <div className="col-span-2 rounded-3xl border border-zinc-800 bg-zinc-900 p-7">
              <p className="text-2xl font-bold">We come to you.</p>
              <p className="mt-2 text-zinc-400">
                No waiting rooms. No wasting your Saturday at a car wash.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-zinc-800 bg-zinc-900/50">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            Ready when you are
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Get your car looking brand new.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-zinc-400">
            Tell us what you drive and what you need. We'll get back to you
            with a quote.
          </p>

          <form className="mx-auto mt-10 grid max-w-xl gap-4 text-left"
         onSubmit={async (e) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  const response = await fetch("/api/send-quote", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: formData.get("name"),
      email: formData.get("email"),
      vehicle: formData.get("vehicle"),
      message: formData.get("message"),
    }),
  });

  if (response.ok) {
    setSubmitted(true);
    form.reset();
    setQuoteMessage("");
  } else {
    alert("Something went wrong sending your quote. Please try again.");
  }
}}
          >
          

            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="rounded-2xl border border-zinc-700 bg-zinc-950 px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="rounded-2xl border border-zinc-700 bg-zinc-950 px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-400"
            />

            <input
              type="text"
              name="vehicle"
              placeholder="Vehicle (e.g. 2022 Honda Civic)"
              className="rounded-2xl border border-zinc-700 bg-zinc-950 px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-400"
            />

            <textarea
            name="message"
  value={quoteMessage}
  onChange={(e) => setQuoteMessage(e.target.value)}
  placeholder="What service are you interested in?"
  rows={5}
  className="resize-none rounded-2xl border border-zinc-700 bg-zinc-950 px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-400"
/>

            <button
              type="submit"
              className="rounded-2xl bg-cyan-400 px-6 py-4 font-bold text-zinc-950 transition hover:bg-cyan-300"
            >
              Request a Quote
            </button>
          </form>
          {submitted && (
  <div className="mx-auto mt-6 max-w-xl rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-center text-cyan-300">
    Thanks! Your quote request has been received.
  </div>
)}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 px-6 py-8">
  <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-zinc-500 sm:flex-row">
    <p>© 2026 Peak Auto Detailing</p>

    <p className="text-xs italic text-white">
      Name: ########### • Phone# +1 (720) 340-9287 • Email: ????????
    </p>

    <p>Professional detailing. Wherever you are.</p>
  </div>
</footer>
    </main>
  );
}