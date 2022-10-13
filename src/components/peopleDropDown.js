import { RefObject } from "react";

const PeopleDropdown = ({
  people,
  inputRef,
  exclude,
  hideLabel,
}) => {
  return (
    <div>
      <div>
        {!hideLabel && (
          <label htmlFor="people" className="mr-2">
            Choose a Person:{" "}
          </label>
        )}

        <select
          name="people"
          id="people"
          ref={inputRef}
          className="px-2 rounded-sm"
        >
          {people &&
            people.map((person) => {
              if (exclude === person) return null;
              else
                return (
                  <option value={person} key={person}>
                    {person}
                  </option>
                );
            })}
        </select>
      </div>
    </div>
  );
};

export default PeopleDropdown;