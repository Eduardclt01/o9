import React from "react";
import { KeynoteBlock, coverImage } from "../../../Types/AgendaTypes";
import CardHighlightedSpeakers from "../../Cards/CardHighlightedSpeaker/CardHighlightedSpeaker";
import Card from "../../Cards/Card/Card";

export default function CardContainer(props: {
  speakersFilteredOnDay: KeynoteBlock[];
}) {
  const { speakersFilteredOnDay } = props;

  function isHighligtedBlock(blockItem: KeynoteBlock) {
    return blockItem.attrs.coverImage;
  }

  return (
    <>
      <div className="main-body__card-layout">
        {speakersFilteredOnDay.map((blockItem) => {
          if (isHighligtedBlock(blockItem)) {
            return (
              <CardHighlightedSpeakers
                time={blockItem.attrs.startTime}
                heading={blockItem.attrs.title}
                speakers={blockItem.attrs.speakerList}
                coverImage={blockItem.attrs.coverImage as coverImage}
              />
            );
          }

          // default return
          return (
            <Card
              time={blockItem.attrs.startTime}
              category={blockItem.attrs.category}
              heading={blockItem.attrs.title}
              speakers={blockItem.attrs.speakerList}
              duration={blockItem.attrs.duration.toString()}
              bodyText={blockItem.innerBlocks[0].innerHTML}
            />
          );
        })}
      </div>
    </>
  );
}
