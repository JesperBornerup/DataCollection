"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Start({ params }) {
  const [updated, setUpdated] = useState(false);
  const opts = {
    height: "390",
    width: "640",
  };

  useEffect(() => {
    const isUpdated = localStorage.getItem("updated");
    if (isUpdated === "true") {
      setUpdated(true);
    }
  }, []);

  function buttonClick() {
    localStorage.setItem("updated", true);
    setUpdated(true);
    location.reload();
  }
  if (updated) {
    return (
      <div className="text-center pt-4 px-4 md:px-52 text-lg">
        <h1 className="mb-4">Velkommen {params.uid}!</h1>
        <p className="mb-4 text-left">
          Du skal forestille dig, at du arbejder på et hospital. Du vil blive
          præsenteret for billede og videoer af mennesker i forskellige
          situationer, og du skal forestille dig, at disse er dine patienter.
        </p>
        <p className="text-left mb-2">Din opgave ligger da i at</p>
        <ol className="text-left">
          <li>
            <h2 className="pl-12 mb-2">
              a: Skrive sygeplejerskefaglig dokumentation til disse billeder og
              videoer
            </h2>
          </li>
          <li>
            <h2 className="pl-12 mb-2">b: Kategorisere disse tekster</h2>
          </li>
        </ol>
        <p className="mb-4 text-left">
          Billederne og videoerne er kun til inspiration, og det er helt op til
          dig, hvordan du vil fortolke situationen, og hvad du vil skrive. Et
          eksempel kunne være et billede af et sår. Dokumentation/et notat til
          dette billede kunne udforme sig på - men begrænser sig ikke til -
          følgende måder:
        </p>
        <div className="mb-4">
          <div className="mb-8">
            <p>
              <b>En hændelse: </b>
            </p>
            <i>
              "Plaster skiftet på pts. sår på ve. balle, der ses lille
              gennemsivning"
            </i>
          </div>
          <div className="mb-8">
            <p>
              <b>En oplysning:</b>
            </p>
            <i>"Patienten har kronisk sår på venstre balle"</i>
          </div>
          <div className="mb-8">
            <p>
              <b>En opsummering:</b>
            </p>
            <i>
              "Klaus har fået skiftet plaster på ve. balle fire gange i vagten
              pga gennemsivning. Såret er renset med NaCl. Har haft store
              smerter (NRS=7) i det meste af vagten, men efter smertestillende
              har han været smertefri. Der er anlagt pvk i højre arm. Pårørende
              kommer til stuegang kl 11. Dagvagt i morgen skal huske at give
              stuegangsgående læge besked "
            </i>
          </div>
        </div>

        <div className="flex flex-col mb-4">
          <p className="text-left mb-4">
            Visse sygeplejefaglige kategorier, herunder f.eks. smerter og sår,
            er dog ikke relevante for dette projekt og kan derfor ikke
            beskrives/vælges. Ovenstående eksempel med sår/smerter vil derfor
            ikke indgå i rækken af billeder og videoer.
          </p>
          <p className="text-left mb-4">
            For hvert billede eller video vil der være en tidsbegrænsning, der
            automatisk sætter dig videre i processen. Tidsbegrænsningen vil
            variere, og du behøver ikke bruge al tilgængelig tid.
          </p>
          <p className="text-left mb-4">
            Se evt videoen herunder for som guider dig igennem processen.
          </p>
          <div className="flex flex-col items-center">
            <video src={"/introvideo.mp4"} width="100%" controls>
              Dette virker åbenbart ikke, tryk bare videre
            </video>
          </div>
          <p className="text-center mb-4 pt-6">
            {" "}
            Klik ”Begynd”, når du er klar til at starte.{" "}
          </p>
          <Link href={`/survey`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Begynd
            </button>
          </Link>
        </div>
      </div>
    );
  }
  if (!updated) {
    return (
      <div className="text-center">
        <div className="text-center px-12 text-lg pt-4 pb-4">
          Alt data er anonymt og vil blive brugt til mit speciale. Hvis du
          ønsker at få slettet data kan du kontakte mig{" "}
          <Link href={`/kontakt`}>
            <u>her</u>.
          </Link>
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
}
