import _ from 'lodash'
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Downshift from 'downshift'

/**
 * SelectField Component.
 */
export default class SelectField extends Component {
  /**
   * React Props.
   * @type {Object}
   */
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
    itemToString: PropTypes.func,
    placeholder: PropTypes.string,
  }

  /**
   * React Default Props.
   * @type {Object}
   */
  static defaultProps = {
    itemToString: item => item,
    placeholder: null,
  }

  /**
   * Creates a new instance of the component.
   * @class
   * @param {Object} props - The props of the component.
   */
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  /**
   * Triggered when the select is toggled.
   * @param  {Object} event - The associated Downshift event.
   */
  onToggleSelect = event => {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }))
  }

  /**
   * Renders the component.
   * @return {JSX} The component.
   */
  render() {
    const { isOpen } = this.state;

    const {
      items,
      itemToString,
      placeholder,
      ...otherProps
    } = this.props;

    return (
      <Downshift isOpen={isOpen} itemToString={itemToString} {...otherProps}>
        {({
          getButtonProps,
          getInputProps,
          getItemProps,
          getRootProps,
          highlightedIndex,
          inputValue,
          selectedItem,
        }) => {
          const selectedStringValue = itemToString(selectedItem, isOpen);

          return (
            <div>
              <button
                {...getButtonProps({ onClick: this.onToggleSelect })}
                ref={button => {
                  this.button = button
                }}
              >
                {(!_.isNil(selectedItem) && !_.isEmpty(selectedItem)) ? selectedStringValue : placeholder}
              </button>
              {isOpen ? (
                <div>
                  {_.map(items, (item, index) => {
                    const stringValue = itemToString(item, isOpen)

                    return (
                      <div {...getItemProps({ item, index })} key={stringValue}>
                        {stringValue}
                      </div>
                    )
                  })}
                </div>
              ) : null}
            </div>
          )
        }}
      </Downshift>
    );
  }
}
