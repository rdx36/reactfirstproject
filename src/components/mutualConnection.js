import { useRef } from "react";
import Path from "./path.js";
import PeopleDropdown from "./peopleDropDown.js";
import React from "react";
const MutualConnection = ({ people, findMutualConnection, foundPaths, }) => {
    const person1Ref = useRef(null);
    const person2Ref = useRef(null);
    const handleFindConnection = () => {
        var _a, _b;
        if (!((_a = person1Ref.current) === null || _a === void 0 ? void 0 : _a.value))
            return;
        if (!((_b = person2Ref.current) === null || _b === void 0 ? void 0 : _b.value))
            return;
        findMutualConnection(person1Ref.current.value, person2Ref.current.value);
        // console.log(foundPaths);
    };
    return (React.createElement("div", { className: "border-2 border-gray-600 flex flex-col p-4 rounded-lg" },
        React.createElement("div", { className: "text-xl font-semibold" }, "Find connection"),
        React.createElement("div", { className: "flex items-center gap-2 mt-4" },
            React.createElement("div", { className: "" }, "How does"),
            React.createElement(PeopleDropdown, { people: people, inputRef: person1Ref, hideLabel: true }),
            React.createElement("div", { className: "" }, "knows"),
            React.createElement(PeopleDropdown, { people: people, inputRef: person2Ref, hideLabel: true }),
            React.createElement("div", null, "?"),
            React.createElement("button", { onClick: handleFindConnection, className: "border-2 border-gray-600 px-2 rounded-xl ml-4 hover:bg-gray-600 hover:text-gray-50 transition-all" }, "Find")),
        foundPaths && foundPaths.length > 0 && (React.createElement("div", { className: "p-4 flex flex-col gap-4" }, foundPaths.map((path, ind) => (React.createElement("div", { key: ind, className: "flex items-center" },
            React.createElement("div", { className: "mr-4" },
                ind + 1,
                ":"),
            React.createElement(Path, { path: path })))))),
        (foundPaths !== null && foundPaths === undefined) ||
            (foundPaths === null || foundPaths === void 0 ? void 0 : foundPaths.length) === 0 ? (React.createElement("div", { className: "p-2 underline" }, "No Connections")) : null));
};
export default MutualConnection;