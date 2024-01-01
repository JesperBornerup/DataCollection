export default function Om() {
    return (
    <main className="flex justify-center items-center pt-8">
    <div className="text-lg px-12">
  <h1 className="mb-4">Denne hjemmeside indgår i mit specialeprojekt</h1>
  <p className="mb-4">
    Projektet går kort fortalt ud på at uddrive brugbar data fra opdigtede sygeplejerskefaglige notater. Det gør jeg ved at træne en sprogmodel, som skal lære at læse sygeplejefaglige notater og kategorisere data ud fra disse.
  </p>
  <p className="mb-4">
    Baggrunden for projektet er, at det er lettere at skrive noget sygeplejerskefaglig dokumentation som fritekst, end det er at klikke bokse af (som man gør i Sundhedsplatformen). Derudover er det generelt lettere at læse sygeplejerskefaglig dokumentation, hvis det er skrevet som fritekst frem for afkrydsede skemaer (som i Sundhedsplatformen). Dette projekt sigter efter at muliggøre en kombination de to dokumentationsformer.
  </p>
  <p className="mb-4">
    Årsagen til, at notaterne skal opdigtes, er, at sundhedssdata er underlagt en række begrænsninger og krav, der gør det komplekst at arbejde med. Først og fremmest er det utilgængeligt for ”almindelige mennesker”, og desuden skal alt data anonymiseres i en sådan grad, at det kan risikere at ødelægge dataen.
  </p>
  <p className="mb-4">
    I fremtiden vil man kunne videreudvikle modellen, så den kan bruges til at konvertere tale-til-tekst til kategorier. Ideelt set skal man som sygeplejerske kunne stå hos en patient, tage en håndholdt enhed op og indtale en udført handling, hvorefter systemet automatisk registrerer det i et format, der kan bruges i en statistikmæssig sammenhæng. I princippet vil den også kunne lære at lave en fri-tekst rapport ud fra det indsamlede data i løbet af vagten.
  </p>
</div>

    
    </main>
    );
    }