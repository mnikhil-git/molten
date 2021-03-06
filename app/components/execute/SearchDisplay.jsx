var React = require('react');
var _ = require('lodash');

var classnames = require('classnames');

var rowStyles = require('components/RowLayout.less');
var styles = require('./SearchDisplay.less');

var SearchDisplay = React.createClass({
    propTypes: {
        search: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.object]).isRequired,
        onFunctionSelect: React.PropTypes.func
    },

    getDefaultProps() {
        return {
            onFunctionSelect: _.noop
        };
    },

    renderList() {
        var rows = _.keys(this.props.search).sort().map(function (fun) {
            return (
                <tr className={styles.function}
                    onClick={() => this.props.onFunctionSelect(fun)}
                    key={fun}>
                    <td>{fun}</td>
                    <td>{this.props.search[fun]}</td>
                </tr>
            );
        }.bind(this));

        return (
            <div>
                <table>
                    <tbody>
                    {rows}
                    </tbody>
                </table>
            </div>
        );
    },

    render() {
        return (
            <div className={classnames(rowStyles.this, styles.this)}>
                <div className={styles.content}>
                    { typeof this.props.search === 'string' ? this.props.search : this.renderList() }
                </div>
            </div>
        );
    }
});

module.exports = SearchDisplay;
