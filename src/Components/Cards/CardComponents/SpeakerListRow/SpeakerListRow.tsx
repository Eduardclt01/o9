import React from "react";
import "./speakerListRow.scss";
import { SpeakerList } from "../../../../Types/AgendaTypes";
import ParagraphSmall from "../../../GlobalComponents/Typography/ParagraphSmall/ParagraphSmall";

export default function SpeakerListRow(props: {
  speakers: SpeakerList[];
  showSpeakerDetails?: boolean;
}) {
  const { speakers, showSpeakerDetails } = props;
  return (
    <div className="speaker-row">
      {speakers.map((speaker: SpeakerList) => (
        <div className="speaker">
          <img
            className="speaker__image"
            src={speaker.image.url}
            srcSet={speaker.image.srcset}
            alt={speaker.name}
          />
          {!showSpeakerDetails && (
            <img
              className="speaker__logo"
              src={speaker.company_logo[0].mediaUrl}
            />
          )}

          {showSpeakerDetails && (
            <div className="speaker__speaker-details">
              <ParagraphSmall bold={true} text={speaker.name} />
              <ParagraphSmall bold={true} text={speaker.position} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
