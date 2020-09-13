import React from 'react';
import PropTypes from 'prop-types';
import {File} from '@vkontakte/vkui';
import {View, Panel,} from '@vkontakte/vkui';
import Icon56GalleryOutline from "@vkontakte/icons/dist/56/gallery_outline";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import CellButton from "@vkontakte/vkui/dist/components/CellButton/CellButton";


class DonationIcon extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activePanel: 'choose',
            file: null
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            activePanel: 'demo',
            file: URL.createObjectURL(event.target.files[0])
        })
    }

    render() {
        return (
            <View activePanel={this.state.activePanel}>
                <Panel id="choose">
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
                </Panel>
                <Panel id="demo">
                    <Group>
                        <CellButton onClick={() => this.setState({activePanel: 'choose', file: null})}>
                            <img src={this.state.file}
                                 alt='HTML5'
                                 style={{width: 200, height: 200, top: this.props.top, left: this.props.left}}
                            />
                        </CellButton>
                    </Group>
                </Panel>
            </View>
        )
    }
}

export default DonationIcon

DonationIcon.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    fetchedUser: PropTypes.shape({
        photo_200: PropTypes.string,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        city: PropTypes.shape({
            title: PropTypes.string,
        }),
    }),
    loadImage: PropTypes.shape({
        photo: PropTypes.any,
    })
};