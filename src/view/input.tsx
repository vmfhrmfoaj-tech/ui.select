import { h, Component } from 'preact';
import { connect } from './hoc';
import { DispatchProps } from '../dispatch/create';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface OwnProps {}

interface StoreProps {
  isOpen: boolean;
}

type Props = OwnProps & StoreProps & DispatchProps;

export class InputComp extends Component<Props> {
  private el?: HTMLDivElement | null;

  // public componentDidMount() {}

  render({ isOpen }: Props) {
    const className = ['tui-select-box-input', isOpen ? 'tui-select-box-open' : ''].join(' ');

    return (
      <div
        ref={(el) => {
          this.el = el;
        }}
        className={className}
        tabIndex={0}
      >
        <p class="tui-select-box-placeholder">Please select an option.</p>
        <span class="tui-select-box-icon">select</span>
      </div>
    );
  }
}

export const Input = connect<StoreProps, OwnProps>(({ renderState }) => ({
  isOpen: renderState.isOpen,
}))(InputComp);
