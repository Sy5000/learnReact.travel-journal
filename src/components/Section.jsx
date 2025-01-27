// get component
import Entry from "./Entry.jsx";
// get data
import journalData from "../data.js";
// build section component
export default function Section() {
  // iterate over **object** data to
  // create dynamic props for Entry component/s
  //
  const journalEntries = journalData.map((journalEntry) => {
    return (
      <Entry
        key={journalEntry.id}
        // possible to pass data object directly into props
        // only if elements directly match
        journalEntry={journalEntry}
      />
    );
  });
  // console.log("debug section", journalEntries);

  // render Entry component/s
  return <section className="container">{journalEntries}</section>;
}

// iterate over **array** data to
// create dynamic props for Entry component/s
//
// const journalEntries = journalData.map((journalEntry) => {
//   return (
//     <Entry
//       key={journalEntry.id}
//       img={journalEntry.img} //object with same props as data
//       title={journalEntry.title}
//       country={journalEntry.country}
//       googleMapsLink={journalEntry.googleMapsLink}
//       dates={journalEntry.dates}
//       text={journalEntry.text}
//     />
//   );
// });
// // console.log("debug section", journalEntries);

// // render Entry component/s
// return <section className="container">{journalEntries}</section>;
