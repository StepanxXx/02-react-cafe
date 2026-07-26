import { useState } from "react";
// import reactLogo from "../../assets/react.svg";
import css from "./App.module.css";

import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions.tsx";
import VoteStats from "../VoteStats/VoteStats.tsx";
import Notification from "../Notification/Notification.tsx";

import type { Votes, VoteType } from "../types/votes.ts";

const initialVotes: Votes = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [votes, setVotes] = useState<Votes>(initialVotes);

  const handleVote = (type: VoteType) => {
    setVotes({
      ...votes,
      [type]: votes[type] + 1,
    });
  };

  const resetVotes = () => setVotes(initialVotes);

  const totalVotes = getTotalVotes(votes);
  const positiveRate = getPositiveRate(votes.good, totalVotes);

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={!!totalVotes}
      />
      {totalVotes ? (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;

function getTotalVotes({ good, neutral, bad }: Votes) {
  return good + neutral + bad;
}

function getPositiveRate(good: number, totalVotes: number) {
  return totalVotes ? Math.round((good / totalVotes) * 100) : 0;
}
