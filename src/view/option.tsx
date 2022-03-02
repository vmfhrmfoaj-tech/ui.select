import { h, Component } from 'preact';
import { connect } from './hoc';
import { DispatchProps } from '../dispatch/create';
import { OptionType } from '@t/store';

interface OwnProps {
  option: OptionType;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface StoreProps {
  hoveredKey: string | null;
}

type Props = OwnProps & StoreProps & DispatchProps;

export class OptionComp extends Component<Props> {
  render({ option, hoveredKey }: Props) {
    const classNames = [
      'tui-select-box-item',
      hoveredKey === option.value ? 'tui-select-box-highlight' : '',
    ];
    return (
      <li class={classNames.join(' ')} tab-index="-1" data-value={option.value}>
        {option.text}
      </li>
    );
  }
}

// eslint-disable-next-line no-empty-pattern
export const Option = connect<StoreProps, OwnProps>(({ renderState }) => ({
  hoveredKey: renderState.hoveredKey,
}))(OptionComp);
