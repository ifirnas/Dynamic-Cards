import React from 'react';

import TitleText from './Title';
import HeadlineText from './Headline';
import ContentText from './ContentText';

export default {
  title: 'Atoms/Titles',
  component: TitleText,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const TemplateTitle = (args) => <TitleText {...args} />;
const TemplateHeadline = (args) => <HeadlineText {...args} />;
const TemplateContent = (args) => <ContentText {...args} />;

export const Title = TemplateTitle.bind({});
Title.args = {
  title: 'Germany'
};
export const Headline = TemplateHeadline.bind({});
Headline.args = {
  headline: 'Berlin'
};
export const Content = TemplateContent.bind({});
Content.args = {
  data: {
    content: 'This is a content for the card article component'
  }
};

