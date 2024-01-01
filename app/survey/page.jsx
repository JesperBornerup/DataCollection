"use client";
import { CookiesProvider, useCookies } from "react-cookie";
import { useState } from "react";
import { useEffect } from "react";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import {
  categories,
  subCategories,
  subSubCategories,
  timeOptions,
  finalSelect,
} from "./categories";
import VideoStim from "./videoStim";
import ImageStim from "./imageStim";
import Highscore from "./highscore";

function Survey() {
  const [first, setFirst] = useState(true);
  //Her er diveser for stimuli
  const [uidCookies, setuidCookie] = useCookies(["userID"]);
  //initialisere pages array ud fra local storage
  const [pagesArray, setPagesArray] = useState([]);
  //state i forhold til at forklare kategorier
  const [showInfo, setShowInfo] = useState(true);
  console.log("parray:", pagesArray);
  //Initialisere pagesArray ud fra local storage
  useEffect(() => {
    const saved = localStorage.getItem("pagesArray");
    const initialValue = JSON.parse(saved);
    setPagesArray(initialValue || []);
  }, []);

  //source
  const pages = [
    { id: 1, type: "video", image: null, video: "/sovnoghvile/withdrawal.mp4" },
    { id: 2, type: "image", image: "/sovnoghvile/tællerFår.jpg", video: null },
    { id: 3, type: "video", image: null, video: "ernæring/dislikeFood.mp4" },
    { id: 4, type: "video", image: null, video: "ernæring/enjoyFood.mp4" },
    {
      id: 5,
      type: "image",
      image: "funktionsniveau/dameRollaorAlene.jpg",
      video: null,
    },
    {
      id: 6,
      type: "image",
      image: "funktionsniveau/liftTilKørestol.jpg",
      video: null,
    },
    {
      id: 7,
      type: "video",
      image: null,
      video: "funktionsniveau/løberUden.mp4",
    },
    {
      id: 8,
      type: "image",
      image: "funktionsniveau/RollatorMedHjælp.webp",
      video: null,
    },
    {
      id: 9,
      type: "image",
      image: "funktionsniveau/stokMedHjælp.webp",
      video: null,
    },
    {
      id: 10,
      type: "image",
      image: "kommunikation/høreApparat.jpg",
      video: null,
    },
    {
      id: 11,
      type: "video",
      image: null,
      video: "kommunikation/tegnsprogFinal.mp4",
    },
    { id: 12, type: "image", image: "kommunikation/tolk.jpg", video: null },
    { id: 13, type: "video", image: null, video: "kommunikation/tolk.mp4" },
    {
      id: 14,
      type: "image",
      image: "psykosocial/gladKvinde.jpeg",
      video: null,
    },
    {
      id: 15,
      type: "image",
      image: "psykosocial/KriseOgLæge.png",
      video: null,
    },
    {
      id: 16,
      type: "image",
      image: "psykosocial/mandGræderogLæge.png",
      video: null,
    },
    {
      id: 17,
      type: "image",
      image: "sovnoghvile/istockphoto-1156679499-612x612.jpg",
      video: null,
    },
    { id: 18, type: "image", image: "udskillelse/ble.jpg", video: null },
    {
      id: 20,
      type: "video",
      image: null,
      video: "udskillelse/Leslie Mann Puking.mp4",
    },
    { id: 21, type: "image", image: "ernæring/sonde.jpg", video: null },
    { id: 22, type: "image", image: "udskillelse/urinIPose.jpg", video: null },
    { id: 19, type: "image", image: "udskillelse/toilet.jpg", video: null },
  ];

  //diverse
  const [showTak, setShowTak] = useState(false);
  const [currentPageIndex, setCurrentPageIndex] = useState(-1);
  const [unseenPages, setUnseenPages] = useState(pages);
  const [uid, setUid] = useState(uidCookies.userID);
  const [showCats, setShowCats] = useState(false);
  const [onemore, setOnemore] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [showStim, setShowStim] = useState(true);
  const [notes, setNotes] = useState([]);

  //Her er diverse for cats
  const [selectedTime, setSelectedTime] = useState("Ikke relevant");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedSubSubCategory, setSelectedSubSubCategory] = useState(null);
  const [selectedFinalSelect, setSelectedFinalSelect] = useState(null);
  const [noteIndex, setNoteIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  //Timer funktioner
  const [timer, setTimer] = useState(60);
  const difTimes = [20, 30, 45, 60, 75, 90, 105, 120, 135];
  const [selectedTimer, setSelectedTimer] = useState(0);

  //Avoid hydration error
  useEffect(() => {
    setTimer(5);
  }, []);

  useEffect(() => {
    let interval;

    if (showStim || showNotes) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else setTimer(60);

    return () => {
      clearInterval(interval);
    };
  }, [showStim || showNotes]);

  useEffect(() => {
    if (showNotes) {
      const randomTime = difTimes[Math.floor(Math.random() * difTimes.length)];
      setTimer(randomTime);
      setSelectedTimer(randomTime);
    } else {
      setTimer(60);
    }
  }, [showNotes]);

  useEffect(() => {
    if (timer === 0) {
      if (showStim) {
        setShowStim(false);
        setShowNotes(true);
      }
      if (showNotes) {
        handleTimeoutNotes();
      }
    }
  }, [timer]);
  // Reac select funktioner

  const handleCategoryChange = (option) => {
    setSelectedCategory(option);
    setSelectedSubCategory(null);
    setSelectedSubSubCategory(null);
    setSelectedFinalSelect(null);
  };

  const handleSubCategoryChange = (option) => {
    setSelectedSubCategory(option);
    setSelectedSubSubCategory(null);
    setSelectedFinalSelect(null);
  };

  const handleSubSubCategoryChange = (option) => {
    setSelectedSubSubCategory(option);
    setSelectedFinalSelect(null);
  };

  const handleFinalSelectChange = (option) => {
    setSelectedFinalSelect(option);
  };

  //Den her sørger for synkronisering mellem localstorage og state
  useEffect(() => {
    localStorage.setItem("pagesArray", JSON.stringify(pagesArray));
  }, [pagesArray]);

  //Den her sørger for at der bliver valgt en ny tilfældig side
  useEffect(() => {
    const newUnseenPages = pages.filter(
      (page) => !pagesArray.includes(page.id)
    );
    setUnseenPages(newUnseenPages);

    if (newUnseenPages.length > 0) {
      const randomIndex = Math.floor(Math.random() * newUnseenPages.length);
      setCurrentPageIndex(randomIndex);
    } else {
      localStorage.setItem("pagesArray", JSON.stringify([]));
      setPagesArray([]);
      setUnseenPages(pages);
    }
  }, [pagesArray]);

  const splCats = [
    "Udskillelse",
    "Søvn og hvile",
    "Ernæring",
    "Funktionsniveau",
    "Kommunikation",
    "Psykosocial",
  ];

  //Den her sørger for at start bliver genstartet hvis man prøver igen:
  useEffect(() => {
    localStorage.removeItem("updated");
  }, []);

  function fElement(category) {
    return (
      <div key={category}>
        <label htmlFor={category}>{category}</label>
        <textarea
          id={category}
          name={category}
          className="border rounded-md h-40 w-full px-4 py-2"
        ></textarea>
      </div>
    );
  }

  function handleTimeoutNotes() {
    const textAreas = document.querySelectorAll("textarea");
    const texts = [];
    textAreas.forEach((text) => {
      if (text.value !== "") {
        texts.push(text.value);
        text.value = "";
      }
    });
    setPagesArray((prev) => [...prev, unseenPages[currentPageIndex].id]);
    setNotes(texts);
    setShowNotes(false);
    setShowCats(true);
  }
  function handleNotesClick(event) {
    event.preventDefault();
    const textAreas = document.querySelectorAll("textarea");
    const texts = [];
    textAreas.forEach((text) => {
      if (text.value !== "") {
        texts.push(text.value);
        text.value = "";
      }
    });
    setPagesArray((prev) => [...prev, unseenPages[currentPageIndex].id]);
    setNotes(texts);
    setShowNotes(false);
    setShowCats(true);
  }

  //Cats functionalitet
  const renderText = () => {
    if (notes.length > 0) {
      return (
        <div>
          <b>Tekst:</b>
          <div className="pt-6">{notes[noteIndex]}</div>
        </div>
      );
    } else {
      return <div>loading </div>;
    }
  };

  const renderAnswers = () => {
    const removeAnswer = (index) => {
      const newAnswers = [...answers];
      newAnswers.splice(index, 1);
      setAnswers(newAnswers);
    };

    return answers.map((answer, i) => (
      <div className="pt-4" key={i}>
        <div className="border-2">
          <p>
            <span className="font-bold">Kategori:</span> {answer.category.label}
          </p>
          <p>
            <span className="font-bold">Underkategori:</span>{" "}
            {answer.subCategory.label}
          </p>
          <p>
            <span className="font-bold">Underunderkategori:</span>{" "}
            {answer.subSubCategory.label}
          </p>
          <p>
            <span className="font-bold">Værdi:</span>{" "}
            {answer.finalSelect.map((item) => item.label).join(", ")}
          </p>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex justify-center items-center mb-4"
            onClick={() => removeAnswer(i)}
          >
            Remove
          </button>
        </div>
      </div>
    ));
  };

  function resetSelectBig() {
    setSelectedCategory(null);
    setSelectedSubCategory(null);
    setSelectedSubSubCategory(null);
    setSelectedFinalSelect(null);
  }

  function resetSelectSmall() {
    setSelectedSubSubCategory(null);
  }

  function handleAdd() {
    setAnswers([
      ...answers,
      {
        time: selectedTime,
        category: selectedCategory,
        subCategory: selectedSubCategory,
        subSubCategory: selectedSubSubCategory,
        finalSelect: selectedFinalSelect,
      },
    ]);
    resetSelectSmall();
  }

  async function postData(pid, note, category, timer) {
    try {
      const response = await fetch("/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pid: pid,
          note: note,
          category: category,
          timer: timer,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  }
  async function handleNext() {
    const note = notes[noteIndex];
    const stringedAnswers = JSON.stringify(answers);
    if (selectedFinalSelect != null && first && answers.length === 0) {
      setFirst(false);
      alert(
        "Husk at tilføje dit svar på den grønne knap. Hvis ikke du vil/kan tilføje noget, tryk på den blå knap igen"
      );
    } else if (selectedFinalSelect === null && first) {
      setFirst(false);
      alert(
        "Husk at vælge en eller flere kategorier. Hvis ikke du vil/kan tilføje noget, tryk på den blå knap igen"
      );
    } else if (noteIndex == notes.length - 1) {
      postData(uid, note, stringedAnswers, selectedTimer);
      setShowCats(false);
      setOnemore(true);
      setAnswers([]);
      setNoteIndex(0);
      resetSelectBig();
    } else if (noteIndex < notes.length - 1) {
      postData(uid, note, stringedAnswers, selectedTimer);
      setAnswers([]);
      setNoteIndex(noteIndex + 1);
      resetSelectBig();
    } else {
      setShowCats(false);
      setOnemore(true);
      setAnswers([]);
      setNoteIndex(0);
      resetSelectBig();
    }
  }
  const renderForm = () => {
    let addText = "Tilføj svar";

    if (answers.length > 0) {
      addText = "Tilføj et til svar";
    }

    let buttonText = "Ikke muligt at tilføje svar";

    if (answers.length > 0) {
      buttonText = "Indsend svar";
    }

    let buttonUnderText = "Husk at tilføje dit/dine svar hvis muligt";
    if (answers.length > 0) {
      buttonUnderText = "Husk du kan tilføje flere svar";
    }

    return (
      <div className="pt-6">
        <>
          <label>Overkategori:</label>
          <Select
            options={categories}
            value={selectedCategory}
            onChange={handleCategoryChange}
          />
        </>

        {selectedCategory && (
          <>
            <label>Underkategori:</label>
            <Select
              options={subCategories[selectedCategory.value]}
              value={selectedSubCategory}
              onChange={handleSubCategoryChange}
            />
          </>
        )}

        {selectedSubCategory && (
          <>
            <label>Underunderkategori:</label>
            <Select
              options={subSubCategories[selectedSubCategory.value]}
              value={selectedSubSubCategory}
              onChange={handleSubSubCategoryChange}
            />
          </>
        )}
        {selectedSubSubCategory && (
          <>
            <label>Vælg/indtast værdi:</label>
            <CreatableSelect
              isMulti={true}
              options={finalSelect[selectedSubSubCategory.value]}
              value={selectedFinalSelect}
              onChange={handleFinalSelectChange}
            />
            {selectedFinalSelect && (
              <div>
                <button
                  onClick={handleAdd}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex justify-center items-center mt-5 text-3xl"
                >
                  {addText}
                </button>
                <div className="pt-2">
                  <i>
                    <b>
                      HUSK AT DU KAN TILFØJE FLERE END ET SVAR. TILFØJ KUN SVAR
                      DER PASSER TIL TEKSTEN.
                    </b>
                  </i>
                </div>
              </div>
            )}
            <br />
          </>
        )}
        <div className="pt-16">
          <button
            onClick={handleNext}
            className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded flex justify-center items-center mt-15"
          >
            {buttonText}
          </button>
          <p>{buttonUnderText}</p>
        </div>
      </div>
    );
  };

  if (showCats) {
    if (showInfo) {
      return (
        <div className="text-center">
          <p className="px-8 pt-4">Du skal nu kategorisere dine tekster.</p>
          <p className="px-8 pt-4">
            Vælg den/de passende kategori/kategorier og naviger gennem
            underkategorierne.
          </p>
          <p className="px-8">
            Tilføj svaret, som herefter vil fremgå på højre side eller nederst
            på siden.
          </p>
          <p className="px-8 pt-4">
            <b>Du kan tilføje flere svar til hver tekst.</b>
          </p>
          <p className="px-8 pt-4">
            <b>
              Tilføj kun svar der er beskrevet i teksten. Eksempel: Hvis farve
              på urin ikke er nævnt i teksten, skal det ikke vælges som en
              kategori.
            </b>
          </p>

          <button className="px-8 pt-4">
            <p
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center items-center mb-4"
              onClick={() => setShowInfo(false)}
            >
              Forstået
            </p>
          </button>
        </div>
      );
    } else
      return (
        <div className="grid lg:grid-cols-2 sm:grid-cols-1">
          <div className="grid lg:grid-cols-2 sm:grid-cols-1">
            <div className="px-6 pt-6">{renderText()}</div>
            <div>{renderForm()}</div>
          </div>
          <div className="pl-14">
            <div className="pt-6">
              <h1>
                <b>Dine svar fremgår her:</b>
              </h1>
            </div>
            {renderAnswers()}
          </div>
        </div>
      );
  }

  if (onemore) {
    return (
      <div className="flex flex-col items-center pt-8">
        <div>
          Progress: {pages.length - unseenPages.length} of {pages.length}
        </div>
        <div>
          <h1 className="text-lg py-2 pb-12">En mere?</h1>
          <button
            onClick={() => {
              setOnemore(false);
              setShowStim(true);
            }}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex justify-center items-center"
          >
            Ja tak!
          </button>
          <br></br>
          <button
            onClick={() => {
              setOnemore(false);
              setShowTak(true);
            }}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex justify-center items-center"
          >
            Nej tak!
          </button>
        </div>
        <Highscore />
      </div>
    );
  }

  if (showStim) {
    return (
      <div className="flex flex-col items-center">
        <div>
          {currentPageIndex >= 0 && unseenPages.length > 0 && (
            <div>
              {unseenPages[currentPageIndex].type === "image" && (
                <ImageStim pathToImage={unseenPages[currentPageIndex].image} />
              )}
              {unseenPages[currentPageIndex].type === "video" && (
                <VideoStim source={unseenPages[currentPageIndex].video} />
              )}
            </div>
          )}
        </div>
        <br />
        <button
          onClick={() => {
            setShowStim(false);
            setShowNotes(true);
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center items-center mt-5"
        >
          Skriv noter
        </button>
        <div>{timer} sekunder tilbage</div>
      </div>
    );
  }

  if (showNotes) {
    return (
      <div className="pl-8 text-lg">
        <form>
          <div className="grid grid-cols-3 gap-4">
            {splCats.map((category) => fElement(category))}
          </div>
          <button
            onClick={(e) => handleNotesClick(e)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center items-center"
          >
            Næste
          </button>

          <div className="pt-4 text-4xl">{timer} sekunder tilbage</div>
        </form>
      </div>
    );
  }

  if (showTak) {
    return (
      <div className="flex flex-col items-center pt-8">
        <div>
          <h1 className="text-lg py-2 pb-12">Tak for at deltage!</h1>
        </div>
      </div>
    );
  }
}

export default Survey;
