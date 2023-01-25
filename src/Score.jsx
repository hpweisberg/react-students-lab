import { useState } from "react";

const Score = ({scores}) => {
  const [studuentScores, setstuduentScores] = useState(scores)
  return ( 
    <>
    {studuentScores.map(score =>
      // <Score score={score} key={score} />
      <ul>

      <li> 
          <p>Date: {score.date}</p>
          <p>Score: {score.score}</p>
        </li>
      </ul>
      )}
    </>
   );
}
 
export default Score;