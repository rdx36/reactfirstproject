import { useEffect, useState } from "react";
import MutualConnection from "./components/mutualConnection";
import NetworkView from "./components/networkView";
import sampleData from "../src/sampleData";
import React from "react";
const NPerson = (name) => {
    return { name: name, connectionList: [] };
};
function App() {
    const [network, setNetwork] = useState({});
    const [paths, setPaths] = useState();
    useEffect(() => {
        if (!localStorage.getItem("networkData"))
            return;
        let data = JSON.parse(localStorage.getItem("networkData"));
        setNetwork(data);
    }, []);
    useEffect(() => {
        try {
            localStorage.setItem("networkData", JSON.stringify(network));
        }
        catch (err) {
            console.error(err);
        }
    }, [network]);
    const loadSampleData = () => {
        localStorage.setItem("networkData", JSON.stringify(network));
        setNetwork(sampleData);
    };
    const addPersonToNetwork = (personName) => {
        let newPerson = NPerson(personName);
        network[personName] = newPerson;
        setNetwork(Object.assign({}, network));
    };
    const connectTwoPeople = (person1, person2) => {
        let person1ConnectionList = network[person1].connectionList;
        if (person1ConnectionList.indexOf(person2) !== -1) {
            console.info("They are already connected!");
            return;
        }
        person1ConnectionList.push(person2);
        network[person2].connectionList.push(person1);
        setNetwork(Object.assign({}, network));
    };
    const findMutualConnection = (person1, person2, visited, path) => {
        let start = network[person1];
        let end = network[person2];
        // keep going until a leaf node or end node is found
        if (!path)
            return;
        if (!visited)
            return;
        visited.add(start.name);
        path.push(start.name);
        // base case
        if (start.name === end.name) {
            // console.log("Found");
            const tempPath = [...path];
            setPaths((prevPaths) => {
                if (!prevPaths) {
                    let arr = new Array();
                    arr.push([...tempPath]);
                    return arr;
                }
                return [...prevPaths, tempPath];
            });
        }
        else {
            // recursive case
            for (const connection of start.connectionList) {
                if (!visited.has(connection)) {
                    findMutualConnection(connection, end.name, visited, path);
                }
            }
        }
        path.pop();
        visited.delete(start.name);
    };
    const handleFindMutualConnection = (person1, person2) => {
        setPaths(undefined);
        let visited = new Set();
        let path = new Array();
        findMutualConnection(person1, person2, visited, path);
    };
    return (React.createElement("main", { className: "container mx-auto p-2 flex flex-col gap-2" },
        React.createElement(NetworkView, { networkData: network, addToNetwork: addPersonToNetwork, connectTwoPeople: connectTwoPeople, loadSampleData: loadSampleData }),
        React.createElement(MutualConnection, { people: Object.keys(network), findMutualConnection: handleFindMutualConnection, foundPaths: paths })));
}
export default App;