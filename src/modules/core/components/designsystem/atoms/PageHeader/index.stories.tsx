import * as React from "react";
import { storiesOf } from "@storybook/react";

import PageTitle from "./index";

storiesOf("Designsystem/Atoms/PageHeader", module).add("default", () => (
  <PageTitle>Page's Title</PageTitle>
));
