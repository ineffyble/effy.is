import React, {Component} from 'react';
import createReactClass from 'create-react-class';
import classNames from 'classnames';

/*
 * Morphext React (v1.0.0-ALPHA)
 * There does not appear to be a more idiomatic approach to achieve the desired effect.
 */

// Interval manager
var SetIntervalMixin = {
    componentWillMount: function () {
        this.intervals = [];
    },
    setInterval: function () {
        this.intervals.push(setInterval.apply(null, arguments));
    },
    componentWillUnmount: function () {
        this.intervals.map(clearInterval);
    }
};

// Phrase component
var MXPhrase = createReactClass({
    render: function () {
        var $classes = {
            animated: this.props.active /*|| this.props.lastActive*/
        };
        $classes[this.props.animation] = this.props.active;
        var $classSet = classNames($classes);
        return <span className={$classSet}>{this.props.phrase}</span>;
    }
});

// Morphext component
var Morphext = createReactClass({
    mixins: [SetIntervalMixin],
    getDefaultProps: function () {
        return {
            "animation": "bounceIn",
            "speed": 2000
        };
    },
    getInitialState: function () {
        return {
            index: 0,
            activePhrase: this.props.phrases[0]
        };
    },
    componentDidMount: function () {
        if (this.props.phrases.length < 2) {
            return false;
        }
        this.setInterval(this.tick, this.props.speed);
    },
    tick: function () {
        if (this.state.index + 1 === this.props.phrases.length) {
            this.setState({index: -1});
        }
        this.setState({index: this.state.index + 1});
    },
    render: function () {
        /*var lastIndex = this.state.index - 1;
        if (lastIndex === -1) {
            lastIndex = this.props.phrases.length - 1;
        }*/
        var renderPhrases = this.props.phrases.map(function (text, id) {
            return <MXPhrase key={text} phrase={text} animation={this.props.animation} active={id === this.state.index} /*lastActive={id === lastIndex}*/ />
        }.bind(this));

        return (
            <div className="morphext">
                {renderPhrases}
            </div>
        );
    }
});

export default Morphext;

/*
 * Usage example
 *
 * ## Default component (bare minimum)
 *
 * Mount Morphext component onto #morphext-react-container via React.renderComponent.
 *  <Morphext phrases={$phrases} />
 *
 * ## Customised component
 *
 *  <Morphext animation="fadeIn" speed="3000" phrases={$phrases} />
 *
 * ## Options
 *
 * phrases: text phrases to cycle through (array). Mandatory.
 * https://github.com/MrSaints/Morphext#options
 */
