import React from "react";
import Card from ".";

export default {
  title: "Molecules/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const _Card = Template.bind({});
_Card.args = {
  data: {
    imageName: "valtech.jpg",
    isBigCard: true,
    title: "Front End",
    headline: "Valtech",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida dolor nec lacus blandit, sit amet volutpat justo finibus."
  }
}