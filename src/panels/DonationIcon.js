import React from 'react';
import PropTypes from 'prop-types';
import {File} from '@vkontakte/vkui';
import {View, Panel,} from '@vkontakte/vkui';
import Icon56GalleryOutline from "@vkontakte/icons/dist/56/gallery_outline";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import CellButton from "@vkontakte/vkui/dist/components/CellButton/CellButton";
import Icon24DismissOverlay from '@vkontakte/icons/dist/24/dismiss_overlay';
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Banner from "@vkontakte/vkui/dist/components/Banner/Banner";

class DonationIcon extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            file: null
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
    }

    render() {
        if (this.state.file) {
            return (
                <Div>
                    <Icon24DismissOverlay className="dismiss"
                                       onClick={() => this.setState({file: null})}/>
                    <img src={this.state.file}
                         alt='HTML5'
                         className="wrapper"
                    />
                </Div>
            )
        } else {
            return (
                <File
                    accept="image/*"
                    className="uploader"
                    mode="secondary"
                    before={<Icon56GalleryOutline/>}
                    controlSize="xl"
                    onChange={this.handleChange}
                >
                    Загрузить обложку
                </File>
            )
        }
    }
}

export default DonationIcon
