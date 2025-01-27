// get component
import Entry from "./Entry.jsx";
// get data
import journalData from "../data.js";
// build section component
export default function Section() {
  // iterate over data to
  // create dynamic props for Entry component/s
  //
  const journalEntries = journalData.map((journalEntry) => {
    return (
      <Entry
        id={journalEntry.id}
        img={{
          src: journalEntry.img.src,
          alt: journalEntry.img.alt,
        }}
        title={journalEntry.title}
        country={journalEntry.country}
        googleMapsLink={journalEntry.googleMapsLink}
        dates={journalEntry.dates}
        text={journalEntry.text}
      />
    );
  });
  // console.log("debug section", journalEntries);

  // render Entry component/s
  return <section className="container">{journalEntries}</section>;
}
