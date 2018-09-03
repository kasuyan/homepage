import * as React from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../../core/components/designsystem/atoms/PageHeader/index";

class GalleryPage extends React.Component {
  render() {
    return (
      <section>
        <PageTitle>ギャラリー</PageTitle>
        <Link to="./gallery/redux-test">Redux Test</Link>
      </section>
    );
  }
}

export default GalleryPage;
