import { Chart } from "../components";

export default {
    title: "Example/Chart",
    component: Chart,
} as ComponentMeta<typeof Chart>;

const Template: ComponentStory<typeof Chart> = (args) => <Chart {...args} />;
export const Primary = Template.bind({});
Primary.args = {
    label: "Button",
    data: [50, 30, 12, 45, 25, 60]
};

// Path: component/src/components/Chart/Chart.tsx
// Compare this snippet from component/src/components/Chart/Chart.tsx: