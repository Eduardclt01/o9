import React from "react";
import { render, screen } from "@testing-library/react";
import TestWrapper from "../../../TestWrapper";
import CardHighlightedSpeakers from "./CardHighlightedSpeaker";

const singleCardMock = {
  blockName: "o9/event-agenda-item",
  attrs: {
    coverImage: {
      id: 41272,
      url: "https://staging17.o9solutions.com/wp-content/uploads/2023/11/Place-the-image.png",
      alt: "Place the image",
    },
    title:
      "Authoritatively syndicate 24/365 core competencies vis-a-vis superior technologies.",
    startTime: "2023-03-28T12:31:44",
    duration: 35,
    category: "KEYNOTE",
    day: "Day 1",
    speakerList: [
      {
        id: 35677,
        name: "Gustavo Lopez Ghory",
        position: "Former CSCO of Kimberly-Clark",
        image: {
          id: 35628,
          url: "https://staging17.o9solutions.com/wp-content/uploads/2022/01/Gustavo-Lopez-Ghory.jpeg",
          alt: "Gustavo lopez ghory",
          srcset:
            "https://staging17.o9solutions.com/wp-content/uploads/2022/01/Gustavo-Lopez-Ghory-300x300.jpeg 300w, https://staging17.o9solutions.com/wp-content/uploads/2022/01/Gustavo-Lopez-Ghory-150x150.jpeg 150w, https://staging17.o9solutions.com/wp-content/uploads/2022/01/Gustavo-Lopez-Ghory-100x100.jpeg 100w, https://staging17.o9solutions.com/wp-content/uploads/2022/01/Gustavo-Lopez-Ghory-140x140.jpeg 140w, https://staging17.o9solutions.com/wp-content/uploads/2022/01/Gustavo-Lopez-Ghory.jpeg 321w",
        },
        company_logo: [
          {
            mediaId: 34246,
            mediaUrl:
              "https://staging17.o9solutions.com/wp-content/uploads/2023/02/Philiphs-logo-black.svg",
            sizes: {
              full: {
                url: "https://staging17.o9solutions.com/wp-content/uploads/2023/02/Philiphs-logo-black.svg",
              },
            },
          },
        ],
      },
    ],
  },
  innerBlocks: [
    {
      blockName: "core/paragraph",
      attrs: [],
      innerBlocks: [],
      innerHTML:
        "\n<p>Continually develop cost effective schemas and granular interfaces. Interactively supply turnkey systems rather than e-business growth strategies. Continually visualize e-business supply chains after synergistic testing procedures. <br>Completely redefine long-term high-impact deliverables without fully researched schemas. Progressively monetize an expanded array of e-services vis-a-vis bricks-and-clicks deliverables.</p>\n",
      innerContent: [
        "\n<p>Continually develop cost effective schemas and granular interfaces. Interactively supply turnkey systems rather than e-business growth strategies. Continually visualize e-business supply chains after synergistic testing procedures. <br>Completely redefine long-term high-impact deliverables without fully researched schemas. Progressively monetize an expanded array of e-services vis-a-vis bricks-and-clicks deliverables.</p>\n",
      ],
    },
  ],
};
const mock = function () {
  return {
    observe: jest.fn(),
    disconnect: jest.fn(),
  };
};

//--> assign mock directly without jest.fn
window.IntersectionObserver = mock;

test("Render card max 2 speakers", async () => {
  render(
    <TestWrapper>
      <CardHighlightedSpeakers
        time={singleCardMock.attrs.startTime}
        category={singleCardMock.attrs.category}
        heading={singleCardMock.attrs.title}
        speakers={singleCardMock.attrs.speakerList}
        duration={singleCardMock.attrs.duration}
        bodyText={singleCardMock.innerBlocks[0].innerHTML}
        coverImage={singleCardMock.attrs.coverImage}
      />
    </TestWrapper>
  );

  const wrapper = await screen.findByTestId("cardHighligted-wrapper");
  const speakerName = await screen.findByTestId("cardHighligted-speakerName");
  const heading = await screen.findByTestId("cardHighligted-heading");
  const speakerpos = await screen.findByTestId("cardHighligted-speakerpos");
  const speakerimg = await screen.findByTestId("cardHighligted-speakerimg");

  expect(wrapper).toHaveStyle(
    `background-image: url(${singleCardMock.attrs.coverImage.url})`
  );
  expect(speakerName).toHaveTextContent(
    singleCardMock.attrs.speakerList[0].name
  );
  expect(heading).toHaveTextContent(singleCardMock.attrs.title);
  expect(speakerpos).toHaveTextContent(
    singleCardMock.attrs.speakerList[0].position
  );
  expect(speakerimg).toHaveAttribute(
    "src",
    singleCardMock.attrs.speakerList[0].company_logo.mediaUrl
  );
});
