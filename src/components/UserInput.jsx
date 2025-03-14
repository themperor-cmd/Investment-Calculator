import Inputgrp from "./Inputgrp";

export default function UserInput({ onUserInput }) {
  return (
    <div id="user-input">
      <Inputgrp onUserInput={onUserInput} name="initialInvestment" label="Initial Investment" />
      <Inputgrp onUserInput={onUserInput} name="annualInvestment" label="Annual Investment" />
      <Inputgrp onUserInput={onUserInput} name="expectedReturn" label="Expected Return" />
      <Inputgrp onUserInput={onUserInput} name="duration" label="Duration" />
    </div>
  );
}