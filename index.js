'use strict';
const fs     = require('fs');
const path   = require('path');
const helper = require('./lib/helper');

const styles     = fs.readFileSync(path.join(__dirname, 'styles.css'), 'utf8');
const stylesReloaded = fs.readFileSync(path.join(__dirname, 'stylesReloaded.css'), 'utf8');
const backgroundColor = '#282828';
const foregroundColor = '#F8F8F0';
const mainBorderWidth = '2px';

const monokaiColors = {
    black:        backgroundColor,
    red:          '#F92672',
    green:        '#A6E22E',
    yellow:       '#FD971F',
    blue:         '#AE81FF',
    magenta:      '#66D9EF',
    cyan:         '#38CCD1',
    white:        '#ffffff',
    lightBlack:   '#49483E',
    lightRed:     '#F92672',
    lightGreen:   '#A6E22E',
    lightYellow:  '#FD971F',
    lightBlue:    '#AE81FF',
    lightMagenta: '#66D9EF',
    lightCyan:    '#38CCD1',
    lightWhite:   '#ffffff',
    colorCubes:   '#ffffff',
    grayscale:    foregroundColor
};

const tabActiveBackground = '#424242';
const borderColor     = monokaiColors.lightBlack;

const colors = {
    black:        monokaiColors.black,
    red:          monokaiColors.red,
    green:        monokaiColors.green,
    yellow:       monokaiColors.yellow,
    blue:         monokaiColors.blue,
    magenta:      monokaiColors.magenta,
    cyan:         monokaiColors.cyan,
    white:        monokaiColors.white,
    lightBlack:   monokaiColors.lightBlack,
    lightRed:     monokaiColors.lightRed,
    lightGreen:   monokaiColors.lightGreen,
    lightYellow:  monokaiColors.lightYellow,
    lightBlue:    monokaiColors.lightBlue,
    lightMagenta: monokaiColors.lightMagenta,
    lightCyan:    monokaiColors.lightCyan,
    lightWhite:   monokaiColors.lightWhite,
    colorCubes:   monokaiColors.colorCubes,
    grayscale:    monokaiColors.grayscale
};

exports.decorateConfig = config => {
    let borderWidth = mainBorderWidth;
    let themeStyles = styles;

    if (config.monokaiDeluxe) {
        borderWidth = config.monokaiDeluxe.borderWidth || mainBorderWidth;
        let theme = config.monokaiDeluxe.theme;

        switch (theme) {
            case "reloaded":
                themeStyles = stylesReloaded;
                break;
            case "default":
            default:
                themeStyles = styles;
        }
    }

    return Object.assign({}, config, {

        backgroundColor: backgroundColor,
        foregroundColor: foregroundColor,
        cursorColor:     colors.cyan || config.cursorColor,
        cursorShape:     config.cursorShape || "BEAM",
        colors,
        css:             (config.css || '') + helper.replaceLiterals(themeStyles, {
            colors,
            borderWidth,
            borderColor,
            backgroundColor,
            tabActiveBackground
        })
    });


};

//exports.decorateBrowserOptions = defaults => Object.assign({}, defaults, {
//    titleBarStyle: 'default',
//    transparent:   true
//});

exports.getTabsProps = (parentProps, props) => {
    if (props.tabs.length <= 1) {
        // Just one open tab
    } else {
        // More than one opened tab
    }

    return Object.assign({}, parentProps, props)
};

exports.onWindow = (browserWindow) => {
    browserWindow.setVibrancy('dark');
};