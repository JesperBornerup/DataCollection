import Link from "next/link";
import Login from "./login";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-8 px-12">
      <div className="pb-14">
        <h1 className="text-lg py-2">
          Velkommen til min hjemmeside. Du kan læse mere om projektet{" "}
          <Link href="/om">
            <u>her</u>
          </Link>
          .
        </h1>
        <p className="pt-4">
          Hvis du vil deltage i projektet, skal du indtaste et navn og vælge,
          hvorfra du har fået linket. Navnet kommer til at fremgå på en
          highscoreliste, så hvis du vil være anonym, skal du indtaste et
          tilfældigt navn.
        </p>
        <p className="pt-4">
          Hvis du allerede har deltaget i projektet, men gerne vil bidrage med
          mere, kan du prøve at gå direkte til{" "}
          <Link href="/survey">
            <u>undersøgelsen</u>
          </Link>
          .
        </p>
        <p className="pt-4">
          Hvis det ikke virker, skal du indtaste et nyt navn.
        </p>
      </div>
      <Login />
    </main>
  );
}
