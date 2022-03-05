import { h, Component } from 'preact';
import { connect } from './hoc';
import { DispatchProps } from '../dispatch';
import { cls } from '../css/constants';
import { Data } from '@t/store/data';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface OwnProps {}

interface StoreProps {
  opened: boolean;
  placeHolder: string;
  value: string;
  data: Data;
}

type Props = OwnProps & StoreProps & DispatchProps;

export class InputComp extends Component<Props> {
  private el?: HTMLDivElement | null;

  // public componentDidMount() {}

  get getPlaceHolderText() {
    const { placeHolder, data, value } = this.props;

    if (!value) {
      return placeHolder;
    }

    return data.items.find((m) => m.value === value)?.label || value;
  }

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
        <p class={cls.PLACEHOLDER}>{this.getPlaceHolderText}</p>
        <span class={cls.ICON}>select</span>
      </div>
    );
  }
}

export const Input = connect<StoreProps, OwnProps>(({ opened, placeHolder, data }) => ({
  opened,
  placeHolder,
  data,
  value: data.value,
}))(InputComp);
