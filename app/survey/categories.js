export const categories = [
    {value: "ernæring", label: "Ernæring"},
    {value: "søvnoghvile", label: "Søvn og hvile"},
    {value: "kommunikation", label: "Kommunikation"},
    {value: "psykosocial", label: "Psykisk og social"},
    {value: "udskillelseIndgift", label: "Indgift/Udskillelse"},
    {value: "funktionsniveau", label: "Funktionsniveau"},
  ];
  
export const subCategories = {
    kommunikation: [
      {value: "barriere", label: "Barriere"},
      {value: "hjaelpkommunikation", label: "Hjælp til kommunikation"},
    ],
    udskillelseIndgift: [
        { value: "urin", label: "Registrer urin" },
        { value: "vanligAffoering", label: "Vanlig afføring" },
        { value: "registrerAffoering", label: "Registrer afføring" },
        { value: "opkast", label: "Opkast" },
        { value: "vækseIndgift", label: "Væske indgift" },
        { value: "registrerAfføringsStatus", label: "Registrer afførings status" },
        ],
    funktionsniveau: [
          { value: "vendinglejring", label: "Aktuel vending/lejring" },
          { value: "mobilisering", label: "Mobilisering handling" },
          { value: "aktueltfunktion", label: "Aktuelt funktionsniveau" },
          { value: "habituelfunktion", label: "Habituelt funktionsniveau" },

        ],
      ernæring: [
        { value: "registrerMåltid", label: "Registrer måltid" },
        { value: "ernæringstilstand", label: "Aktuel ernæringstilstand" },
        { value: "kostform", label: "Kostform" },
        { value: "problemstillinger", label: "Problemstillinger" },
        { value: "hjælptilatspiseogdrikke", label: "Hjælp til at spise og drikke" },
      ],
      søvnoghvile: [
        { value: "habituelSøvn", label: "Habituel søvn" },
        { value: "registrerSøvn", label: "Registrer søvn" },
        { value: "hvile", label: "Hvile" },
        { value: "soevnbesvær", label: "Søvn/Hvilebesvær" },
      ],
      psykosocial: [
        {value: "psykisk", label: "Psykisk"},
        {value: "social", label: "Social"},
      ],
  };
  
export const subSubCategories = {
   //psykosocial
   registrerAfføringsStatus: [
    { value: "afføringsstatus", label: "Afføringsstatus" },
   ],
    psykisk: [{value: "habituelPsykisk", label: "Habituel psykisk"},
      {value: "sygdomsindsigt", label: "Sygdomsindsigt"},
      {value: "helbredsopfattelse", label: "Helbredsopfattelse"},
      {value: "reaktionpåsygdom", label: "Reaktion på sygdom"},
      {value: "aktuelpsykisk", label: "Aktuel psykisk"},],
    social: [
      {value: "boligforhold", label: "Boligforhold"},
      {value: "netværk", label: "Netværk"},
      {value: "husdyr", label: "Husdyr"},
      {value: "hjemmehjælp", label: "Hjemmehjælp"},
    ],
  //søvnoghvile
    habituelSøvn: [
      { value: "søvnbesvær", label: "Søvnbesvær" },
      { value: "søvnmønster", label: "Søvnmønster" },
    ],
    registrerSøvn: [
      {value: "aktuelTilstand", label: "Aktuel tilstand"},
      {value: "antalTimer", label: "Antal timer søvn i vagten"},
      {value: "søvnKvalitet", label: "Søvnkvalitet"},
    ],
    hvile: [
      { value: "hviletilstand", label: "Hvile tilstand" },
    ],
   soevnbesvær: [
      {value: "problemer", label: "Problemer"},
       {value: "tiltag", label: "Tiltag"},
    ],

  //kommunikation
    barriere: [
      { value: "barriereSprog", label: "Sprog" },
      { value: "barriereHørelse", label: "Hørelse" },
      { value: "kognitiveBarriere", label: "Kognitiv" },
    ],
    hjaelpkommunikation: [
      { value: "tekniskeHjaelpemidler", label: "Tekniske hjælpemidler" },
      { value: "kommunikationpårørende", label: "Behov for pårørende" },
      { value: "tolk", label: "Behov for tolk" },
    ],
  //Ernæring
    registrerMåltid: [
      { value: "indtagetMængde", label: "Indtaget mængde procent" },
      { value: "konsistensMad", label: "Konsistens" },
      { value: "indtagetSonde", label: "Indtaget sonde ml" },
      { value: "indtagetsondePlan", label: "Indtaget sonde efter plan" },
      { value: "indtagetVæske", label: "Indtaget væske ml" },
      { value: "væskeType", label: "Væsketype" },
      { value: "problemerErnæring", label: "Problemer" },
    ],
    ernæringstilstand: [
      { value: "vægt", label: "Vægt i kg" },
      { value: "højde", label: "Højde i cm" },
    ],
    kostform: [
      { value: "konsistensMad", label: "Konsistens mad" },
      { value: "konsistensVæske", label: "Konsistens væske" },
      { value: "kosttype", label: "Kosttype" }
    ],
    problemstillinger: [
      { value: "tyggebesvær", label: "Tyggebesvær" },
      { value: "synkebesvær", label: "Synkebesvær" },
      { value: "kvalme", label: "Kvalme" },
      { value: "appetit", label: "Appetit"}
    ],
    hjælptilatspiseogdrikke: [
      { value: "hjaelpTilSpise", label: "Hjælp til spise" },
      { value: "hjaelpTilDrikke", label: "Hjælp til drikke" },
    ],
  //udskillelse + indguft
    vækseIndgift: [
      { value: "mængdeVæske", label: "Mængde væske" },
      { value: "typeVæske", label: "Type væske" },
      { value: "indgiftForm", label: "Indgift form" },
    ],
    urin: [
        { value: "mængdeUrin", label: "Antal ml" },
        { value: "farveUrin", label: "Farve" },
        { value: "lugt", label: "Lugt" },
        { value: "udseende", label: "Udseende" },
        { value: "kilde", label: "Kilde" },
        { value: "mængde", label: "Mængde" },
        ],
    vanligAffoering: [
        { value: "hyppighed", label: "Hyppighed" },
        { value: "konsistens", label: "Konsistens" },
        { value: "farveAffoering", label: "Farve" },
        ],
    registrerAffoering: [
        { value: "mængde", label: "Mængde" },
        { value: "konsistens", label: "Konsistens" },
        { value: "farveAffoering", label: "Farve" },
        { value: "antal", label: "Antal" },
        { value: "placering", label: "Placering" },
        ],
    opkast: [
      { value: "mængde", label: "Mængde" },
      { value: "farveOpkast", label: "Farve" },
      { value: "antal", label: "Antal" },
    ],
    //funktionsniveau
    vendinglejring:[
      { value: "hjaelpLejring", label: "Hjælp til vending/lejring" },
      { value: "lejring", label: "Lejring (hvordan patient er lejret)" },
      { value: "hjaelpemidlerLejring", label: "Hjælpemidler til lejring" }
    ],
    mobilisering: [
      { value: "hjaelpMobilisering", label: "Hjælp til mobilisering" },
      { value: "hjaelpemidlerTilMobilisering", label: "Hjælpemidler til mobilisering" },
      { value: "mobiliseringSted", label: "Mobilisering (hvor patienten er mobiliseret til)" },
      { value: "mobiliseringAntalGange", label: "Mobilisering (antal gange)" },
      { value: "mobiliseringTid", label: "Mobilisering (tid)" },
      { value: "mobiliseringDistance", label: "Mobilisering (distance) i m" },
    ],
    aktueltfunktion: [
      { value: "mobiliseringsrestriktioner", label: "Mobiliseringsrestriktioner" },
      { value: "hjaelpemidlerTilMobilisering", label: "Hjælpemidler til mobilisering" },
      { value: "hjaelpMobilisering", label: "Hjælp til mobilisering" },
      { value: "hjaelpPersonligHygiejne", label: "Hjælp til personlig hygiejne" },
      { value: "hjaelpUdskillelse", label: "Hjælp til udskillelse" },
      { value: "hjaelpTilSpise", label: "Hjælp til spise" },
      { value: "hjaelpTilDrikke", label: "Hjælp til drikke" },
    ],
    habituelfunktion: [
      { value: "habituelBevægelighed", label: "Habituel bevægelighed" },
      { value: "hjaelpemidlerTilMobilisering", label: "Hjælpemidler til mobilisering" },
      { value: "hjaelpMobilisering", label: "Hjælp til mobilisering" },
      { value: "hjaelpPersonligHygiejne", label: "Hjælp til personlig hygiejne" },
      { value: "hjaelpUdskillelse", label: "Hjælp til udskillelse" },
      { value: "hjaelpTilSpise", label: "Hjælp til spise" },
      { value: "hjaelpTilDrikke", label: "Hjælp til drikke" },
    ]
  };

  export const finalSelect = {
    søvnKvalitet: [{value: "normal", label: "Normal"}, {value: "urolig", label: "Uroligt"}, {value: "afbrudt", label: "Afbrudt"}],
    afføringsstatus: [{value: "normal", label: "Normal"}, {value: "obstiperet", label: "Obstiperet"}, {value: "incontinent", label: "Inkontinent"}],
    //psykosocial
    habituelPsykisk: [{value: "normal", label: "Normal"}, {value: "deprimeret", label: "Depressiv"}, {value: "angst", label: "Angst"}, {value: "forvirret", label: "Forvirret"}, {value: "dement", label: "Dement"}, {value: "psykose", label: "Psykose"}, {value: "kedAfDet", label: "Ked af det"},{value: "andet", label: "Andet"}, {value: "aggressiv", label: "Aggressiv"}],
    sygdomsindsigt: [{value: "Fuld sygdomsindsigt", label: "Fuld sygdomsindsigt"}, {value: "Delvis sygdomsindsigt", label: "Delvis sygdomsindsigt"}, {value: "Ingen sygdomsindsigt", label: "Ingen sygdomsindsigt"}],
    helbredsopfattelse: [{value: "god", label: "God"}, {value: "dårlig", label: "Dårlig"}],
    reaktionpåsygdom: [{value: "accepterende", label: "Accepterende"}, {value: "benægtende", label: "Benægtende"}, {value: "angst", label: "Angst"}, {value: "depressiv", label: "Depressiv"}, {value: "aggressiv", label: "Aggressiv"}, {value: "andet", label: "Andet"}, {value: "kedAfDet", label: "Ked af det"}, {value: "vred", label: "Vred"},{value: "frustreret", label: "frustreret"} ],
    aktuelpsykisk: [{value: "normal", label: "Normal"}, {value: "glad", label: "Glad"}, {value: "tryg", label:"Tryg"},{value: "deprimeret", label: "Depressiv"}, {value: "angst", label: "Angst"}, {value: "forvirret", label: "Forvirret"}, {value: "dement", label: "Dement"}, {value: "psykose", label: "Psykose"}, {value: "agiteret", label: "Agiteret"}, {value: "vred", label: "Vred"},{value: "frustreret", label: "frustreret"}, {value: "aggresiv", label: "Aggresiv"}, {value: "selvskadende", label: "Selvskadende"}, {value: "kedAfDet", label: "Ked af det"}],
    boligforhold: [{value: "egetHjem", label: "Eget hjem"}, {value: "plejehjem", label: "Plejehjem"}, {value: "andenBolig", label: "Anden bolig"}],
    netværk: [{value: "familie", label: "Familie"}, {value: "venner", label: "Venner"}, {value: "naboer", label: "Naboer"}, {value: "ingen", label: "Ingen"}],
    husdyr: [{value: "ja", label: "Ja"}, {value: "nej", label: "Nej"}],
    hjemmehjælp: [{value: "ja", label: "Ja"}, {value: "nej", label: "Nej"}],
    
    //søvn og hvile
    søvnbesvær: [{value: "ja", label: "Ja"}, {value: "nej", label: "Nej"}],
    søvnmønster: [{value: "normalt", label: "Normalt"}, {value: "afbrudt", label: "Afbrudt"}, {value: "soverDag", label: "Sover om dagen"}],
    aktuelTilstand: [{value: "sover", label: "Sover"}, {value: "vågen", label: "Vågen"}],
    antalTimer: [{value: "1-2", label: "1-2"}, {value: "3-4", label: "3-4"}, {value: "5-6", label: "5-6"}, {value: "7-8", label: "7-8"}, {value: "9-10", label: "9-10"}, {value: "11-12", label: "11-12"}],
    hviletilstand: [{value: "rolig", label: "Rolig"}, {value: "uro", label: "Uro"}, {value: "angst", label: "Angst"}, {value: "rastløs", label: "Rastløs"}, {value: "irritabel", label: "Irritabel"}, {value: "aggressiv", label: "Aggressiv"}],
    problemer: [{value: "soevnbesvær", label: "søvnbesvær"}, {value: "tankemmylder", label: "tankemylder"}, {value: "uro", label: "Uro"},{value: "abstinenser", label: "Abstinenser"}, {value: "delir", label:"Delir"}, {value: "smerter", label: "Smerter"}, {value: "åndenød", label: "Åndenød"}, {value: "kløe", label: "Kløe"}, {value: "hjertebanken", label: "Hjertebanken"}, {value: "hovedpine", label: "Hovedpine"}, {value: "svimmelhed", label: "Svimmelhed"}, {value: "hoste", label: "Hoste"}],
    tiltag: [{value: "enestue" , label: "Enestue"}, {value: "lukket dør", label: "Lukket dør"}, {value: "roPå", label: "Ro på stuen"}, {value: "mørklægning", label: "Mørklægning"} , {value: "medicinsk", label: "Medicinsk behandling"}],
    //kommunikation
    barriereSprog: [{value: "stum",label: "Stum"}, {value: "Engelsk", label: "Engelsk"}, {value: "Tysk", label: "Tysk"}, {value: "Fransk", label: "Fransk"}, {value: "Spansk", label: "Spansk"}, {value: "Arabisk", label: "Arabisk"}, {value: "Russisk", label: "Russisk"}, {value: "Polsk", label: "Polsk"} ,{value: "Andet", label: "Andet"}],
    barriereHørelse: [{value: "letNedsat", label: "Let nedsat"}, {value: "sværtNedsat", label: "Svært nedsat"}, {value: "døv", label: "Døv"}, {value: "højre", label: "Højre"}, {value: "venstre", label: "Venstre"}],
    kognitiveBarriere: [{value: "demens", label: "Demens"}, {value: "hukommelsesbesvær", label: "Hukommelsesbesvær"}, {value: "forvirring", label: "Forvirring"}, {value: "andet", label: "Andet"}],
    tekniskeHjaelpemidler: [{value: "høreapparat", label: "Høreapparat"}, {value: "tilpasset", label:"Høreapparat tilpasset/instrueret"},{value: "Telefon", label: "Telefon"}, {value: "skrift", label: "Skrift"}, {value: "tegn", label: "Tegn"}, {value: "pictogrammer", label: "Pictogrammer"}, {value: "andet", label: "Andet"}],
    kommunikationpårørende: [{value: "behovForPårørende", label: "Behov for pårøende stuegang"}, {value: "pårørendeTolk", label: "Pårørende som tolk"}],
    tolk: [{value: "tegnsprogstolk", label: "Tegnsprogstolk"}, {value: "tolk", label: "Tolk"}],
    //Ernæring
    //indtaget mængde i procent
    problemerErnæring: [{value: "ingen", label: "ingen"},{value: "madlede", label: "Madlede"} ,{value: "kvalme", label: "Kvalme" }, {value: "opkast", label: "Opkast"}, {value: "aspiraion", label: "Meget aspiraion i sonde"}],
    indtagetsondePlan: [{value: "ja", label: "Ja"},  {value: "nejReduceret", label: "Nej, givet reduceret mængde"}, {value: "nej", label: "Nej"}],
    indtagetMængde: [{value: "0", label: "0%"}, {value: "25", label: "25%"}, {value: "50", label: "50%"}, {value: "75", label: "75%"}, {value: "100", label: "100%"}],
    konsistensMad: [{value: "normal", label: "Normal"}, {value: "blød", label: "Blød"}, {value: "flydende", label: "Flydende"}, {value: "sondeernæring", label: "Sondeernæring"}, {value: "gratin", label: "Gratin"}],
    vægt: [{value: "", label: ""}],
    højde: [{value: "", label: ""}],
    konsistensVæske: [{value: "normal", label: "Normal"}, {value: "letfortykket", label: "Let fortykket"},{value: "mellemfortykket", label: "Mellem fortykket"}, {value: "tyktflydende", label: "Tyktflydende"}],
    kosttype: [{value: "normal", label: "Normal"}, {value: "sonde", label: "Sonde"},{value: "vegetar", label: "Vegetar"}, {value: "veganer", label: "Veganer"}, {value: "diabetiker", label: "Diabetiker"}, {value: "glutenfri", label: "Glutenfri"}, {value: "laktosefri", label: "Laktosefri"}, {value: "halalkost", label: "Halalkost"}, {value: "kosherkost", label: "Kosherkost"}],
    indtagetSonde: [{value: "", label: ""}],
    indtagetVæske: [{value: "", label: ""}],
    væskeType: [{value: "Vand", label: "Vand"}, {value: "Kaffe", label: "Kaffe"}, {value: "Te", label: "Te"}, {value: "Sodavand", label: "Sodavand"}, {value: "Juice", label: "Juice"}, {value: "Mælk", label: "Mælk"}, {value: "Saftevand", label: "Saftevand"}, {value: "IV-væske", label: "IV-væske"}],
    //udskillelse
    //indgift
    mængdeVæske: [{value: "", label: "Skriv mængde i ml"}],
    typeVæske: [{value: "vand", label: "Vand"}, {value: "kaffe", label: "Kaffe"}, {value: "te", label: "Te"}, {value: "sodavand", label: "Sodavand"}, {value: "juice", label: "Juice"}, {value: "mælk", label: "Mælk"}, {value: "saftevand", label: "Saftevand"}, {value: "iv-væske", label: "IV-væske"}],
    indgiftForm: [{value: "oral", label: "Oral"}, {value: "sonde", label: "Sonde"}, {value: "intravenøs", label: "Intravenøs"}],
    //urin
    mængde: [{value: "", label: ""}],
    farveUrin: [{value: "grøn", label: "Grøn"}, {value: "gul", label: "Gul"}, {value: "blodtilblandet", label: "Blodtilblandet"}, {value: "orange", label: "Orange"}, {value: "farveløs", label: "Farveløs"}],
    lugt: [{value: "lugter", label: "Lugter"}, {value: "lugter ikke", label: "Lugter ikke"}],
    udseende: [{value: "klar", label: "Klar"}, {value: "uklar", label: "Uklar"}, {value: "blodig", label: "Blodig"}],
    kilde: [{value: "kad", label: "KAD"}, {value: "kolbe", label: "Kolbe"}, {value: "ble", label: "Ble"}, {value: "sik", label: "SIK"}, {value: "bækken", label: "Bækken"}],
    tyggebesvær: [{value: "ja", label: "Ja"}, {value: "nej", label: "Nej"}],
    synkebesvær: [{value: "ja", label: "Ja"}, {value: "nej", label: "Nej"}],
    kvalme: [{value: "jaLidt", label: "Ja, lidt"},{value: "jaMeget", label: "Ja, meget"},{value: "ja", label: "Ja"}, {value: "nej", label: "Nej"}],
    appetit: [{value: "GodAppetit", label: "God appetit" }, {value: "ingenAppetit", label: "Ingen appetit"}],
    hjaelpTilSpise: [{value: "selvhjulpen", label: "Selvhjulpen"}, {value: "selvhjulpenOpstyn", label: "Selvhjulpen under opsyn"}, {value: "fuldHjælp", label: "Fuld hjælp"} , {value: "sonde", label: "Sonde"}, {value: "nødesSpise", label: "Skal nødes til at spise"}],
    hjaelpTilDrikke: [{value: "selvhjulpen", label: "Selvhjulpen"}, {value: "selvhjulpenOpstyn", label: "Selvhjulpen under opsyn"}, {value: "fuldHjælp", label: "Fuld hjælp"} , {value: "sonde", label: "Sonde"}, {value: "nødesDrikke", label: "Skal nødes til at drikke"}],
    //afføring
    antal: [{value: "", label: ""}],
    hyppighed: [
      { value: "daglig", label: "Daglig" },
      { value: "flere gange om dagen", label: "Flere gange om dagen" },
      { value: "en gang om ugen", label: "En gang om ugen" },
      { value: "sjældnere end en gang om ugen", label: "Sjældnere end en gang om ugen" },
      ],
    konsistens: [
      { value: "type1", label: "Type 1: Separate hårde klumper" },
      { value: "type2", label: "Type 2: Pølseformet, men klumperne er hårde og knudrede" },
      { value: "type3", label: "Type 3: Pølseformet med revner i overfladen" },
      { value: "type4", label: "Type 4: Pølseformet og glat overflade" },
      { value: "type5", label: "Type 5: Klumpet med bløde stykker" },
      { value: "type6", label: "Type 6: Blød og mudret konsistens" },
      { value: "type7", label: "Type 7: Væskeformet med ingen faste stykker" }
      ],
    farveAffoering: [
        { value: "brun", label: "Brun" },
        { value: "sort", label: "Sort" },
        { value: "rød", label: "Rød" },
        { value: "grøn", label: "Grøn" },
        {value: "gul", label: "Gul"},
        {value: "hvid", label: "Hvid"},
        {value: "melæna", label: "Melæna"},
      ],
    mængde: [
      { value: "stor", label: "Stor" },
      { value: "mellem", label: "Mellem" },
      { value: "lille", label: "Lille"},
      { value: "ingen", label: "Ingen"}
      ],
    //opkast
    farveOpkast: [
      { value: "brun", label: "Brun" },
      { value: "sort", label: "Sort" },
      { value: "rød", label: "Rød" },
      { value: "grøn", label: "Grøn" },
      {value: "gul", label: "Gul"},
    ],
    placering: [
      { value: "ble", label: "Ble" },
      { value: "toilet", label: "Toilet" },
      { value: "bækkenSeng", label: "Bækken i seng" },
      { value: "bækkenStol", label: "Bækkenstol" },
    ],
    //funktionsniveau
    //vendinglejring
    hjaelpLejring: [
      { value: "ja en person", label: "Ja en person" },
      { value: "ja to personer", label: "Ja to personer" },
      { value: "nej", label: "Nej"} 
    ],
    lejring: [
      { value: "rygleje", label: "Rygleje" },
      { value: "fowlersLeje", label: "Fowlersleje" },
      { value: "venstre side", label: "Venstre side" },
      { value: "højre side", label: "Højre side" },
      { value: "maveleje", label: "Maveleje" },
    ],
    hjaelpemidlerLejring: [
      { value: "glidestykke", label: "Glidestykke" },
    ],
    //personlig hygiejne
    hjaelpPersonligHygiejne: [
      { value: "selvhjulpen", label: "Selvhjulpen" },
      { value: "behovforhjælp", label: "Behov for hjælp" }
    ],
    hjaelpUdskillelse: [
      { value: "selvhjulpen", label: "Selvhjulpen"  },
      { value: "behovforhjælp", label: "Behov for hjælp" },
      { value: "RIK", label: "RIK" },
      { value: "KAD", label: "KAD" },
      { value: "Ble" , label: "Ble" },
    ],
    //mobilisering
    hjaelpMobilisering: [
      { value: "ja en person", label: "Ja en person" },
      { value: "ja to personer", label: "Ja to personer" },
      { value: "guidesVerbalt", label: "Guides verbalt" },
      { value: "selvhjulpen", label: "Selvhjulpen"} 
    ],
    mobiliseringsrestriktioner: [
      { value: "ingen", label: "Ingen" },
      { value: "delvis", label: "Delvis" },
      { value: "fuld", label: "Fuld" }
    ],
    hjaelpemidlerTilMobilisering: [
      { value: "ingen", label: "Ingen" },
      { value: "stok", label: "Stok" },
      { value: "krykker", label: "Krykker" },
      { value: "rollator", label: "Rollator" },
      { value: "gangstativ", label: "Gangstativ" },
      { value: "kørestol", label: "Kørestol" },
      { value: "komfortkørestol", label: "Komfortkørestol" },
      { value: "talerstol", label: "Talerstol (højgangramme)" },
      { value: "lift,", label: "Lift"},
      { value: "Sarasteady", label: "Sara Steady" },
    ],
    mobiliseringSted: [
      { value: "sengekant", label: "Sengekant" },
      { value: "kørestol", label: "Kørestol" },
      { value: "toilet", label: "Toilet" },
      { value: "ved sengen", label: "Ved sengen" },
      { value: "pågangen", label: "På gangen" },
      { value: "istuen", label: "I stuen" },
      { value: "patient ønsker ikke mobilisering", label: "Patient ønsker ikke mobilisering" }
    ],
    mobiliseringAntalGange: [
      { value: "1 gang", label: "1 gang" },
      { value: "2 gange", label: "2 gange" },
      { value: "3 gange", label: "3 gange" },
      { value: "4 gange", label: "4 gange" },
      { value: "5 gange", label: "5 gange" },
      { value: "6 gange", label: "6 gange" },
      { value: "7 gange", label: "7 gange" },
    ],
    mobiliseringTid: [
      { value: "5 minutter", label: "5 minutter" },
      { value: "10 minutter", label: "10 minutter" },
      { value: "15 minutter", label: "15 minutter" },
      { value: "20 minutter", label: "20 minutter" },
    ],
    mobiliseringDistance: [
      {value: "", label: ""}
    ],
    habituelBevægelighed: [
      { value: "bundettilsengen", label: "Bundet til sengen" },
      { value: "bundettilStolen", label: "Bundet til stol" },
      { value: "gårnogleganger", label: "Går en gang imellem" },
      { value: "gårhyppigt", label: "Går hyppigt" },
    ]
    };


  
export  const timeOptions = [
    { value: "ikkeITekst", label: "Ikke beskrevet i tekst/ikke relevant"},
    { value: "dagvagt", label: "Dagvagt"},
    { value: "aftenvagt", label: "Aftenvagt"},
    { value: "nattevagt", label: "Nattevagt"},
    { value: "08:00", label: "08:00" },
    { value: "09:00", label: "09:00" },
    { value: "10:00", label: "10:00" },
    { value: "11:00", label: "11:00" },
    { value: "12:00", label: "12:00" },
    { value: "13:00", label: "13:00" },
    { value: "14:00", label: "14:00" },
    { value: "15:00", label: "15:00" },
    { value: "16:00", label: "16:00" },
    { value: "17:00", label: "17:00" },
    { value: "18:00", label: "18:00" },
    { value: "19:00", label: "19:00" },
    { value: "20:00", label: "20:00" },
    { value: "21:00", label: "21:00" },
    { value: "22:00", label: "22:00" },
    { value: "23:00", label: "23:00" },
    { value: "00:00", label: "00:00" },
    { value: "01:00", label: "01:00" },
    { value: "02:00", label: "02:00" },
    { value: "03:00", label: "03:00" },
    { value: "04:00", label: "04:00" },
    { value: "05:00", label: "05:00" },
    { value: "06:00", label: "06:00" },
    { value: "07:00", label: "07:00" },
  ];
  