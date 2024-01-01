"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Start({ params }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    const isUpdated = localStorage.getItem("updated");
    if (isUpdated === "true") {
      setUpdated(true);
    }
  }, []);

  function buttonClick() {
    localStorage.setItem("updated", true);
    setUpdated(true);
    window.location.reload();
  }

  if (!updated) {
    return (
      <div className="text-center">
        <div className="text-center px-12 text-lg pt-4 pb-4">
          Alt data er anonymt og vil blive brugt til mit speciale. Hvis du
          ønsker at få slettet data kan du kontakte mig{" "}
          <Link href={`/kontakt`}>
            <u>her</u>
          </Link>
          .
        </div>

        <button
          onClick={buttonClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Tryk her for at acceptere
        </button>
      </div>
    );
  }
  if (currentStep === 0) {
    return (
      <div className="text-center pt-4 lg:px-40 text-lg">
        <h1 className="mb-4">Velkommen {params.uid}!</h1>
        <div className="flex flex-col">
          <div className="mb-8">
            <p>
              Du skal skrive sygeplejefaglige dokumentation med inspiration fra
              et billede/en video. Du skal herefter kategorisere din tekst. Tryk
              på Næste for at gå igennem en guide for de 3 trin.
            </p>
          </div>
        </div>
        <button
          onClick={() => setCurrentStep(1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Næste
        </button>
      </div>
    );
  }

  if (currentStep === 1) {
    return (
      <div className="text-center pt-4 lg:px-40 text-lg">
        <div className="flex flex-col">
          <div className="mb-8">
            <p className="mt-2 pb-8 text-xl font-bold">
              1) Se billede/video og tænk over hvad du vil skrive
            </p>
            <button
              onClick={() => setCurrentStep(2)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Næste
            </button>
            <img
              src="/inspiration.gif"
              alt="Image"
              className="w-full h-auto sm:border-4 sm:border-blue-500 lg:border-8 lg:border-blue-500 mt-4 "
            />
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 2) {
    return (
      <div className="text-center pt-4 lg:px-40 text-lg">
        <div className="flex flex-col">
          <div className="mb-8">
            <p className="mt-2 text-xl font-bold">
              2) Skriv/dokumenter i et passende felt.
            </p>
            <p className="pb-8">
              Det er helt frit hvor meget du skriver og hvad du skriver.
            </p>
            <button
              onClick={() => setCurrentStep(3)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-4 rounded"
            >
              Næste
            </button>
            <img
              src="/skriv.gif"
              alt="GIF"
              className="w-full h-auto sm:border-4 sm:border-blue-500 lg:border-8 lg:border-blue-500"
            />
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 3) {
    return (
      <div className="text-center pt-4 lg:px-40 text-lg">
        <div className="flex flex-col">
          <div className="mb-8">
            <p className="mt-2 text-xl font-bold">3) Kategoriser din tekst</p>
            <p className="pb-8">
              Naviger mellem menuerne og tilføj svar på den grønne knap. Tryk på
              den blå knap for at indsende dit/dine svar.
            </p>
            <p className="text-center mb-4 pt-6">
              Klik ”Begynd”, når du er klar til at starte.
            </p>
            <Link href={`/survey`}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
                Begynd
              </button>
            </Link>
            <img
              src="/kategoriser.gif"
              alt="GIF"
              className="w-full h-auto sm:border-4 sm:border-blue-500 lg:border-8 lg:border-blue-500"
            />
          </div>
        </div>
      </div>
    );
  }
}
