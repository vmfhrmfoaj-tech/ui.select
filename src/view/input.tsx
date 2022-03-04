import { h, Component } from 'preact';
import { connect } from './hoc';
import { DispatchProps } from '../dispatch/create';
import { cls } from '../css/constants';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface OwnProps {}

interface StoreProps {
  opened: boolean;
}

type Props = OwnProps & StoreProps & DispatchProps;

export class InputComp extends Component<Props> {
  private el?: HTMLDivElement | null;

  // public componentDidMount() {}

  render({ opened }: Props) {
    const className = [cls.INPUT, opened ? cls.OPEN : ''].join(' ');

    return (
      <div
        ref={(el) => {
          this.el = el;
        }}
        className={className}
        tabIndex={0}
      >
        <p class={cls.PLACEHOLDER}>Please select an option.</p>
        <span class={cls.ICON}>select</span>
      </div>
    );
  }
}

export const Input = connect<StoreProps, OwnProps>(({ renderState }) => ({
  opened: renderState.opened,
}))(InputComp);
