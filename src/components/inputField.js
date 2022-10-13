import React from "react";
const InputField = ({ type, id, label, name, placeholder, required, spaceToOccupy, className, datalist, inputRef, }) => {
    return (React.createElement("div", { className: `flex flex-col ${spaceToOccupy ? `md: ${spaceToOccupy}` : "w-full"} ${className}` },
        React.createElement("label", { htmlFor: name, className: "text-sm font-medium text-gray-900 block mb-2" }, label),
        datalist ? (React.createElement("datalist", { id: name }, datalist.map((dataItem) => (React.createElement("option", { value: dataItem, key: dataItem }))))) : null,
        inputRef ? (React.createElement("input", { ref: inputRef, type: type, name: name, id: id, className: "bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5", placeholder: placeholder, required: required, list: name })) : (React.createElement("input", { type: type, name: name, id: id, className: "bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5", placeholder: placeholder, required: required, list: name }))));
};
export default InputField;
