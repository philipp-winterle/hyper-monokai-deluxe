'use strict';
const backgroundColor = '#282828';
const foregroundColor = '#F8F8F0';
const mainBorderWidth = '2px';

const monokaiColors = {
    black: backgroundColor,
    red: '#F92672',
    green: '#A6E22E',
    yellow: '#FD971F',
    blue: '#AE81FF',
    magenta: '#66D9EF',
    cyan: '#38CCD1',
    white: '#ffffff',
    lightBlack: '#49483E',
    lightRed: '#F92672',
    lightGreen: '#A6E22E',
    lightYellow: '#FD971F',
    lightBlue: '#AE81FF',
    lightMagenta: '#66D9EF',
    lightCyan: '#38CCD1',
    lightWhite: '#ffffff',
    colorCubes: '#ffffff',
    grayscale: foregroundColor
};

const tabBasicBorder  = '#49483E';
const tabActiveBorder  = 'rgba(0, 181, 181, 1)';
const borderColor = monokaiColors.lightBlack;

const colors = {
    black: monokaiColors.black,
    red: monokaiColors.red,
    green: monokaiColors.green,
    yellow: monokaiColors.yellow,
    blue: monokaiColors.blue,
    magenta: monokaiColors.magenta,
    cyan: monokaiColors.cyan,
    white: monokaiColors.white,
    lightBlack: monokaiColors.lightBlack,
    lightRed: monokaiColors.lightRed,
    lightGreen: monokaiColors.lightGreen,
    lightYellow: monokaiColors.lightYellow,
    lightBlue: monokaiColors.lightBlue,
    lightMagenta: monokaiColors.lightMagenta,
    lightCyan: monokaiColors.lightCyan,
    lightWhite: monokaiColors.lightWhite,
    colorCubes: monokaiColors.colorCubes,
    grayscale: monokaiColors.grayscale
};

exports.decorateConfig = (config) => (
    Object.assign({}, config, {
        backgroundColor: backgroundColor,
        foregroundColor: foregroundColor,
        cursorColor:  colors.cyan || config.cursorColor,
        cursorShape: config.cursorShape || "BEAM",
        colors,
        termCSS: `
            ${config.termCSS || ''}
            @keyframes blink-animation {
                to {
                    background-color: transparent;
                }
            }
            ::selection {
                background: rgba(67, 76, 94, 0.8) !important;
            }
            .cursor-node {
                border-left-width: 2px;
            }
            .cursor-node[focus=true]:not([moving]) {
                animation: blink-animation .777s ease-in-out infinite;
                box-sizing: content-box !important;
                mix-blend-mode: difference;
            }
        `,
        css: `
            ${config.css || ''}
            html{
                height: 100%;
                border-top: 2px solid #fc1da7;
                border-bottom: 2px solid #fba506;
                padding: 2px 0; 
            }
            .hyper_main {
                border-radius: 2px;
                border-style: solid;
                border-image: linear-gradient(to bottom, #fc1da7, #fba506) 1 100%;
                border-bottom: 0;
                border-width: ${mainBorderWidth} !important;
                
            }
            .tabs_list {
                margin: 0 2px!important;
            }
            .tab_tab {
                background-color: ${backgroundColor} !important;
                box-shadow: 0px 2px 0px 0px rgba(0, 181, 181, 0.15);;
            }
            .tab_active {
                box-shadow: 0px 2px 0px 0px rgba(0, 181, 181, 1);
                font-weight: bold;
            }
            
        `
    })
);
