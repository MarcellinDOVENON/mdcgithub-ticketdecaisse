import React from "react";

type Props = {
  texte: string;
};

const Ticket: React.FC<Props> = ({ texte }) => {
  return (
    <div
      id="ticket"
      className="mt-5 font-mono whitespace-pre-wrap bg-[#f9f9f9] border border-dashed border-[#333] p-[10px]"
    >
      {texte}
    </div>
  );
};

export default Ticket;