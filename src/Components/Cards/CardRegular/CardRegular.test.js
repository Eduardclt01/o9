import React from "react";
import { render, screen } from "@testing-library/react";
import TestWrapper from "../../../TestWrapper";
import CardRegular from "./CardRegular";

const singleCardMock = {
  blockName: "o9/event-agenda-item",
  attrs: {
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
      <CardRegular
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

  const wrapper = await screen.findByTestId("card-wrapper");
  const heading = await screen.findByTestId("card-heading");
  const speakerrow = await screen.findByTestId("card-speakerrow");
  const header = await screen.findByTestId("card-header");

  expect(wrapper).toHaveClass("grid-span-1");
  expect(heading).toHaveTextContent(singleCardMock.attrs.title);
  expect(header).toHaveTextContent(singleCardMock.attrs.category);
  expect(speakerrow.children).toHaveLength(1);
});

test("Render card max 5 speakers", async () => {
  render(
    <TestWrapper>
      <CardRegular
        time={singleCardMock.attrs.startTime}
        category={singleCardMock.attrs.category}
        heading={singleCardMock.attrs.title}
        speakers={[
          ...singleCardMock.attrs.speakerList,
          ...singleCardMock.attrs.speakerList,
          ...singleCardMock.attrs.speakerList,
        ]}
        duration={singleCardMock.attrs.duration}
        bodyText={singleCardMock.innerBlocks[0].innerHTML}
        coverImage={singleCardMock.attrs.coverImage}
      />
    </TestWrapper>
  );

  const wrapper = await screen.findByTestId("card-wrapper");
  const heading = await screen.findByTestId("card-heading");
  const speakerrow = await screen.findByTestId("card-speakerrow");
  const header = await screen.findByTestId("card-header");

  expect(wrapper).toHaveClass("grid-span-2");
  expect(wrapper).toHaveClass("dark-gray-bg-color");
  expect(heading).toHaveTextContent(singleCardMock.attrs.title);
  expect(header).toHaveTextContent(singleCardMock.attrs.category);
  expect(speakerrow.children).toHaveLength(3);
});
