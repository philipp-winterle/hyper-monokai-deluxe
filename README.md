# Hyper Monokai Deluxe - Theme
[![npm](https://img.shields.io/npm/dm/hyper-monokai-deluxe.svg?label=DL&style=flat-square)]()

> A monokai theme with deluxe content like borders and highlighted tabs for [hyper](https://hyper.is), the best looking terminal on all plattforms

![Hyper Monokai Deluxe Theme](https://raw.githubusercontent.com/hummal/hyper-monokai-deluxe/master/example.png)

*Inspired by the original Hyper Monokai Theme*

## Installation
* Insert "hyper-monokai-deluxe" into your .hyper.js config
```javascript
  ...
  plugins: [
    'hyper-monokai-deluxe'
  ],
  ...
```
* Use [hpm](https://github.com/zeit/hpm) to install the theme
```bash
  hpm install hyper-monokai-deluxe
```

## "So what's the difference? What is the deluxe?"
* You liked hyper-border but like me you didn't like how it uses background gradient to achieve the "borders"? 
I used real borders on the right places to achieve the same. :bomb: 
* You lost track of you active tab? You installed a plugin for that? Not anymore. It's part of the theme and now we have
hightlighted tabs in monokai style. :gem:
* You liked monokai? Yeah, that is still the same. :couple_with_heart:

## Customization
Theme settings can be customized by setting the "monokaiDeluxe" object in your .hyper.js config
```javascript
  ...
  config: {
    monokaiDeluxe: {
      borderWidth: '2px',
      theme: 'reloaded'
    }
  }
  ...
```
### Options

##### borderWidth

- adjusts the thickness of the border around the whole window. OSX windows may have a maximum with border top to prevent traffic lights going ugly. Type: String. Default: '2px'

##### theme

- Currently there is another theme with the same visual style but better css logic behind. This is for testing purposes at the moment. Type: String. Default: 'default'
Values: 'default', 'reloaded'

## Resources and inspiration
* [hyperterm-monokai](https://github.com/arkhamdev/hyperterm-monokai)
* [hyperborder](https://github.com/webmatze/hyperborder)
