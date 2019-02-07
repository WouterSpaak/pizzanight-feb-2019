/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface PzaRating {
    'emptySymbol': string;
    'filledSymbol': string;
    'max': number;
    'min': number;
    'value': number;
  }
  interface PzaRatingAttributes extends StencilHTMLAttributes {
    'emptySymbol'?: string;
    'filledSymbol'?: string;
    'max'?: number;
    'min'?: number;
    'onRatingChange'?: (event: CustomEvent<number>) => void;
    'value'?: number;
  }

  interface PzaStar {
    'index': number;
    'star': string;
  }
  interface PzaStarAttributes extends StencilHTMLAttributes {
    'index'?: number;
    'onSelected'?: (event: CustomEvent<number>) => void;
    'star'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'PzaRating': Components.PzaRating;
    'PzaStar': Components.PzaStar;
  }

  interface StencilIntrinsicElements {
    'pza-rating': Components.PzaRatingAttributes;
    'pza-star': Components.PzaStarAttributes;
  }


  interface HTMLPzaRatingElement extends Components.PzaRating, HTMLStencilElement {}
  var HTMLPzaRatingElement: {
    prototype: HTMLPzaRatingElement;
    new (): HTMLPzaRatingElement;
  };

  interface HTMLPzaStarElement extends Components.PzaStar, HTMLStencilElement {}
  var HTMLPzaStarElement: {
    prototype: HTMLPzaStarElement;
    new (): HTMLPzaStarElement;
  };

  interface HTMLElementTagNameMap {
    'pza-rating': HTMLPzaRatingElement
    'pza-star': HTMLPzaStarElement
  }

  interface ElementTagNameMap {
    'pza-rating': HTMLPzaRatingElement;
    'pza-star': HTMLPzaStarElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
