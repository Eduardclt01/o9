import React from "react";
import "./cardContainer.scss";
import { KeynoteBlock, coverImage } from "../../../Types/AgendaTypes";
import CardRegular from "../../Cards/CardRegular/CardRegular";
import CardHighlightedSpeaker from "../../Cards/CardHighlightedSpeaker/CardHighlightedSpeaker";

export default function CardContainer(props: {
  speakersFilteredOnDay: KeynoteBlock[];
}) {
  const { speakersFilteredOnDay } = props;

  function isHighligtedBlock(blockItem: KeynoteBlock) {
    return blockItem.attrs.coverImage;
  }

  return (
    <>
      <div className="card-layout">
        {speakersFilteredOnDay.map((blockItem: KeynoteBlock, index: number) =>
          isHighligtedBlock(blockItem) ? (
            <CardHighlightedSpeaker
              time={blockItem.attrs.startTime}
              heading={blockItem.attrs.title}
              speakers={blockItem.attrs.speakerList}
              coverImage={blockItem.attrs.coverImage as coverImage}
              duration={blockItem.attrs.duration.toString()}
              bodyText={blockItem.innerBlocks[0].innerHTML}
              category={blockItem.attrs.category}
              key={index}
            />
          ) : (
            <CardRegular
              time={blockItem.attrs.startTime}
              category={blockItem.attrs.category}
              heading={blockItem.attrs.title}
              speakers={blockItem.attrs.speakerList}
              duration={blockItem.attrs.duration.toString()}
              bodyText={blockItem.innerBlocks[0].innerHTML}
              key={index}
            />
          )
        )}
      </div>
    </>
  );
}
