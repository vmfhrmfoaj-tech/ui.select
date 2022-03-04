import { h, Component } from 'preact';
import { Store } from '@t/store';
import { Dispatch } from '../dispatch';
import { Container } from './container';

interface Props {
  rootElement: HTMLElement;
  store: Store;
  dispatch: Dispatch;
}

export class Root extends Component<Props> {
  public getChildContext() {
    return {
      store: this.props.store,
      dispatch: this.props.dispatch,
    };
  }

  public render() {
    // return <Container rootElement={this.props.rootElement} />;
    return <Container rootElement={this.props.rootElement} />;
  }
}
