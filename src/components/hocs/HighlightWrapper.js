import React from "react";
import Article from '../elements/Article';
import New from '../elements/New';
import Popular from '../elements/Popular';
import Video from '../elements/Video';
import PropTypes from "prop-types";

function HighlightWrapper(InitialComponent) {
    return class extends React.Component {
        render() {
            if (this.props.view < 100) {
                return (
                    <New>
                        <InitialComponent {...this.props} />
                    </New>
                );
            }

            if (this.props.view >= 1000) {
                return (
                    <Popular>
                        <InitialComponent {...this.props} />
                    </Popular>
                );
            }

            return (
                <InitialComponent {...this.props} />
            )
        }
    }
}

HighlightWrapper.propTypes = {
    view: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export const VideoHL = HighlightWrapper(Video);
export const ArticleHL = HighlightWrapper(Article);
