import usePersonData from "./utils/usePersonData";

function App() {
  const { userDetails, refreshData } = usePersonData();
  if (userDetails === null) {
    return <div>Loading</div>;
  }

  const {
    email,
    name: { title: title, first: firstName, last: lastName },
  } = userDetails;

  return (
    <div className="text-white flex flex-col items-center m-28 border-2 rounded-lg p-6 bg bg-gradient-to-tr from-zinc-800 to-slate-500">
      <h1 className="font-semibold italic">
        {"Name: " + title + " " + firstName + " " + lastName}
      </h1>
      <h2 className="font-semibold italic">{"Email: " + email}</h2>
      <button
        className="bg-gradient-to-bl from-teal-600 to-teal-400 p-2 px-5 rounded-lg mt-5"
        onClick={refreshData}
      >
        Refresh
      </button>
    </div>
  );
}

export default App;
