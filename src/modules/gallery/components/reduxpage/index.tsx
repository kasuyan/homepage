import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import PageTitle from "../../../core/components/designsystem/atoms/PageHeader/index";

import { onGetJson } from "../../../../actions/getjson";
import { JsonState } from "../../../../reducer/sampleJson";

interface Props {
  onGetJson: () => void;
}

class ReduxTestPage extends React.Component<Props> {
  onClick = () => {
    this.props.onGetJson();
  };

  render() {
    return (
      <section>
        <PageTitle>ReduxTest</PageTitle>
        <button onClick={this.onClick}>ボタン</button>
      </section>
    );
  }
}

const mapStateToProps = (state: JsonState) => {
  return { state };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ onGetJson }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxTestPage);
