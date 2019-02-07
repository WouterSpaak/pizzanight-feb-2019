import { Component, Event, Prop, EventEmitter } from '@stencil/core';

@Component({
  tag: 'pza-star',
  styles: `
    span {
      font-size: 62px;
      padding: 20px;
      display: inline-block;
      width: 62px;
      height: 62px;
      line-height: 62px;
      text-align: center;
      border-radius: 20px;
    }

    span:hover {
      background-color: yellow;
      cursor: pointer;
    }
  `
})
export class Star {
  @Prop() star: string;
  @Prop() index: number;

  @Event() selected: EventEmitter<number>;

  select() {
    this.selected.emit(this.index + 1);
  }

  render() {
    return <span onClick={() => this.select()}>{this.star}</span>;
  }
}
