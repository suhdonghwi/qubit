import React from "react";
import ContentViewer from "../components/ContentViewer";

export default function BasicPage() {
  const content = [];

  for (let i = 0; i < 100; i++) {
    content.push({
      textContent: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id nibh lacus. Maecenas finibus nisi enim, ut varius purus faucibus quis.  Nulla malesuada ante mauris, vel consectetur neque rhoncus a. Duis quam ligula, sodales in tortor vel, blandit cursus purus. Integer imperdiet elit in tempor sodales. Maecenas ipsum lacus, volutpat eget sem ut, laoreet tincidunt nisi. Nam sodales, mi id dignissim ultrices, metus sem bibendum erat, ut eleifend enim nisl id nibh. Mauris posuere nunc a accumsan mollis.",
        "Integer at erat et arcu pellentesque tempus non nec elit. Phasellus odio urna, ultricies non massa congue, condimentum malesuada velit.  Nullam gravida lectus quis nunc tempor blandit. Nunc felis mauris, aliquet eleifend aliquet faucibus, sagittis in nulla. Etiam mauris turpis, efficitur laoreet lacus eget, hendrerit semper mi. Suspendisse potenti. Nam in quam ut dui vestibulum viverra nec vitae purus.  Vivamus a nibh tortor. Curabitur rutrum tincidunt nulla. Phasellus laoreet mollis lacus in mattis.",
      ],
    });
  }

  return (
    <ContentViewer
      title="1. Basics"
      description="Base knowledge to understand how quantum computers work"
      content={content}
    />
  );
}
