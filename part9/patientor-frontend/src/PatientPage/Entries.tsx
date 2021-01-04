import React from "react";
import Hospital from "./Hospital";
import HealthCheck from "./HealthCheck";
import OccupationalHealthCare from "./OccupationalHealthCare";
import { Entry } from "../types";
import { assertNever } from "../utils";

// const HealthRatingBar = ({ rating, showText }: BarProps) => {
// const Entries = ({ entry }: Entry) => {
const Entries: React.FC<{ entry: Entry }> = ({ children, entry }) => {
  switch (entry.type) {
    case "Hospital":
      return <Hospital entry={entry} />;
    case "HealthCheck":
      return <HealthCheck entry={entry} />;
    case "OccupationalHealthcare":
      return <OccupationalHealthCare entry={entry} />;
    default:
      return assertNever(entry);
  }
};

export default Entries;
