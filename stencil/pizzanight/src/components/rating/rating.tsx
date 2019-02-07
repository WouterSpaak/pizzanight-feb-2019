import {
  Component,
  Prop,
  Event,
  EventEmitter,
  State,
  ComponentDidLoad
} from '@stencil/core';

@Component({
  tag: 'pza-rating'
})
export class Rating implements ComponentDidLoad {
  @Prop() min = 0;
  @Prop() max = 5;
  @Prop() value = 3;

  @Prop() emptySymbol = '⭕';
  @Prop() filledSymbol = '✔';

  @State() rating: number[] = [];

  @Event() ratingChange: EventEmitter<number>;

  componentDidLoad() {
    this.rating = this.getRating();
  }

  setValue(event: CustomEvent<number>) {
    this.rating = this.getRating(event.detail);
    this.ratingChange.emit(event.detail - 1);
  }

  render() {
    return (
      <div class="rating">
        {this.rating.map((r, i) => {
          return r === 1 ? (
            <pza-star
              star={this.filledSymbol}
              index={i}
              onSelected={e => this.setValue(e)}
            />
          ) : (
            <pza-star
              star={this.emptySymbol}
              index={i}
              onSelected={e => this.setValue(e)}
            />
          );
        })}
      </div>
    );
  }

  private getRating(index: number = this.value): number[] {
    return Array(this.max)
      .fill(null)
      .map((_, i) => {
        return i < index ? 1 : 0;
      });
  }
}
