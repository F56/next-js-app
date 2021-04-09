import React, { Component } from 'react';

export default class Card extends Component {
  static Title = (props) => {
    return <div className="w-full text-xl mt-4">{props.children}</div>;
  };

  static Body = (props) => {
    return <div className="w-full text-sm">{props.children}</div>;
  };

  static Footer = (props) => {
    return <div className="w-full text-sm">{props.children}</div>;
  };

  render() {
    return (
      <div className="flex flex-col bg-white font-base h-min shadow-md rounded-md py-2 px-5 w-full gap-4">
        {this.props.children}
      </div>
    );
  }
}