import { useState } from "react";
import { measure, type Measurement } from "../../domain/quantum";

export function useMeasurement(random: () => number = Math.random) {
  const [outcome, setOutcome] = useState<Measurement | null>(null);
  return {
    outcome,
    begin: () => setOutcome(measure(0.5, random())),
    end: () => setOutcome(null),
  };
}
